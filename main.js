const initApp = () => {
    // 1. INIETTA HEADER E FOOTER
    if (window.injectSharedComponents && !document.getElementById('main-header')) {
        window.injectSharedComponents();
    }
    
    // Inizializza icone DOPO l'inserimento
    lucide.createIcons();

    // 1.5. POPOLAMENTO CATALOGO DINAMICO
    const catalogoGrid = document.getElementById('catalogo-grid');
    if (catalogoGrid && typeof prodotti !== 'undefined') {
        catalogoGrid.innerHTML = prodotti.map(p => `
            <div class="glass-panel rounded-3xl border border-white/5 overflow-hidden group hover:border-emerald-500/50 transition-colors flex flex-col relative">
                <div class="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-emerald-500">
                    ${p.nome.includes('Sleeve') ? 'Gaming Sleeve' : 'Mousepad Vetro'}
                </div>
                <a href="prodotto-template.html?id=${p.id}" class="aspect-square bg-darker relative overflow-hidden block">
                    <img src="${p.img}" alt="${p.nome}" class="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal">
                    <div class="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent opacity-80"></div>
                </a>
                <div class="p-6 flex flex-col flex-1 bg-dark/50">
                    <a href="prodotto-template.html?id=${p.id}" class="block">
                        <h3 class="text-lg font-bold text-white mb-2 leading-tight group-hover:text-emerald-400 transition-colors">${p.nome}</h3>
                    </a>
                    <p class="text-2xl font-bold text-emerald-500 mt-auto mb-6 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">${p.prezzo}</p>
                    <button class="add-to-cart w-full bg-white hover:bg-emerald-500 text-black font-bold py-3 rounded-xl transition-colors flex justify-center items-center gap-2 group/btn" data-name="${p.nome}" data-price="${parseFloat(p.prezzo.replace('€',''))}" data-img="${p.img}">
                        <i data-lucide="shopping-cart" class="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform"></i>
                        Aggiungi
                    </button>
                </div>
            </div>
        `).join('');
    }

    // 2. Cart Logic
    let cartItemsArr = JSON.parse(localStorage.getItem('cartItemsArr')) || [];
    let shippingCost = 0;

    const cartSidebar = document.getElementById('cart-sidebar');
    const cartBackdrop = document.getElementById('cart-backdrop');
    const cartEmpty = document.getElementById('cart-empty');
    const cartItemsContainer = document.getElementById('cart-items');
    const cartFooter = document.getElementById('cart-footer');
    const finalTotalElement = document.getElementById('cart-final-total');

    const updateCartUI = () => {
        localStorage.setItem('cartItemsArr', JSON.stringify(cartItemsArr));
        
        let totalQty = cartItemsArr.reduce((sum, item) => sum + item.qty, 0);
        let subtotal = cartItemsArr.reduce((sum, item) => sum + (item.price * item.qty), 0);
        
        document.querySelectorAll('.cart-badge-count').forEach(b => {
            b.textContent = totalQty;
            if(totalQty > 0) b.classList.remove('hidden');
            else b.classList.add('hidden');
        });

        if(totalQty === 0) {
            if(cartEmpty) { cartEmpty.classList.remove('hidden'); cartEmpty.classList.add('flex'); }
            if(cartItemsContainer) cartItemsContainer.classList.add('hidden');
            if(cartFooter) cartFooter.classList.add('hidden');
        } else {
            if(cartEmpty) { cartEmpty.classList.add('hidden'); cartEmpty.classList.remove('flex'); }
            if(cartItemsContainer) {
                cartItemsContainer.classList.remove('hidden');
                cartItemsContainer.innerHTML = cartItemsArr.map((item, index) => `
                <div class="flex gap-4 glass-panel p-4 rounded-2xl items-center relative group">
                    <div class="w-20 h-20 bg-dark rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden shadow-inner shrink-0">
                        <img src="${item.img}" alt="${item.name}" class="w-full h-full object-cover opacity-80 mix-blend-luminosity">
                        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                    </div>
                    <div class="flex-1 pr-6">
                        <h3 class="font-bold text-sm leading-tight text-white">${item.name}</h3>
                        <div class="flex justify-between items-center mt-3">
                            <div class="flex items-center gap-3 border border-white/20 rounded-full px-2 py-1 bg-black/50">
                                <button class="btn-decrease text-gray-400 hover:text-white" data-index="${index}"><i data-lucide="minus" class="w-3 h-3"></i></button>
                                <span class="text-xs font-semibold w-4 text-center text-white">${item.qty}</span>
                                <button class="btn-increase text-gray-400 hover:text-white" data-index="${index}"><i data-lucide="plus" class="w-3 h-3"></i></button>
                            </div>
                            <p class="font-semibold text-sm text-emerald-400">€${(item.price * item.qty).toFixed(2)}</p>
                        </div>
                    </div>
                    <button class="btn-remove absolute top-2 right-2 text-gray-500 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-500/10" data-index="${index}">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>
                </div>`).join('');
                
                // Re-bind click events
                cartItemsContainer.querySelectorAll('.btn-decrease').forEach(btn => btn.addEventListener('click', (e) => {
                    let idx = parseInt(e.currentTarget.getAttribute('data-index'));
                    if(cartItemsArr[idx].qty > 1) cartItemsArr[idx].qty--;
                    else cartItemsArr.splice(idx, 1);
                    updateCartUI();
                }));
                cartItemsContainer.querySelectorAll('.btn-increase').forEach(btn => btn.addEventListener('click', (e) => {
                    let idx = parseInt(e.currentTarget.getAttribute('data-index'));
                    cartItemsArr[idx].qty++;
                    updateCartUI();
                }));
                cartItemsContainer.querySelectorAll('.btn-remove').forEach(btn => btn.addEventListener('click', (e) => {
                    let idx = parseInt(e.currentTarget.getAttribute('data-index'));
                    cartItemsArr.splice(idx, 1);
                    updateCartUI();
                }));
                
                lucide.createIcons();
            }
            if(cartFooter) {
                cartFooter.classList.remove('hidden');
                if(finalTotalElement) finalTotalElement.textContent = `€${subtotal.toFixed(2)}`;
            }
        }
        updateCheckoutTotal();
    };

    const toggleCart = (open) => {
        if(open) {
            if(cartSidebar) { cartSidebar.classList.remove('translate-x-full'); cartSidebar.classList.add('translate-x-0'); }
            if(cartBackdrop) cartBackdrop.classList.remove('hidden');
        } else {
            if(cartSidebar) { cartSidebar.classList.add('translate-x-full'); cartSidebar.classList.remove('translate-x-0'); }
            if(cartBackdrop) cartBackdrop.classList.add('hidden');
        }
    };
    
    // Expose for external template scripts
    window.velocitasUpdateCartUI = updateCartUI;
    window.velocitasToggleCart = toggleCart;

    document.querySelectorAll('.open-cart').forEach(btn => btn.addEventListener('click', (e) => { e.preventDefault(); toggleCart(true); }));
    document.querySelectorAll('.close-cart').forEach(btn => btn.addEventListener('click', () => toggleCart(false)));
    if(cartBackdrop) cartBackdrop.addEventListener('click', () => toggleCart(false));

    const bindAddToCartButtons = () => {
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            // Remove old listeners to prevent duplicates if called multiple times
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            newBtn.addEventListener('click', (e) => {
                let name = newBtn.getAttribute('data-name');
                let price = parseFloat(newBtn.getAttribute('data-price'));
                let img = newBtn.getAttribute('data-img');
                
                if(!name) { name = "Velocitas Product"; price = 69.99; img = "assets/images/mousepad-vetro-nero.webp"; }
                
                let existing = cartItemsArr.find(i => i.name === name);
                if(existing) {
                    existing.qty++;
                } else {
                    cartItemsArr.push({name, price, img, qty: 1});
                }
                updateCartUI();
                toggleCart(true);
            });
        });
    };
    bindAddToCartButtons();
    // Expose for dynamic pages
    window.bindAddToCartButtons = bindAddToCartButtons;

    // 3. Checkout Modal & Shipping Logic
    const checkoutModal = document.getElementById('checkout-modal');
    if(document.getElementById('btn-checkout')) {
        document.getElementById('btn-checkout').addEventListener('click', () => {
            toggleCart(false);
            updateCheckoutTotal();
            checkoutModal.classList.remove('hidden');
        });
    }
    if(document.getElementById('btn-close-checkout')) {
        document.getElementById('btn-close-checkout').addEventListener('click', () => { checkoutModal.classList.add('hidden'); });
    }

    const shippingSelect = document.getElementById('shipping-select');
    const checkoutShippingCost = document.getElementById('checkout-shipping-cost');
    const checkoutTotal = document.getElementById('checkout-total');
    
    const updateCheckoutTotal = () => {
        let totalQty = cartItemsArr.reduce((sum, item) => sum + item.qty, 0);
        let subtotal = cartItemsArr.reduce((sum, item) => sum + (item.price * item.qty), 0);
        
        if(!document.getElementById('checkout-qty')) return;
        document.getElementById('checkout-qty').textContent = `x${totalQty}`;
        document.getElementById('checkout-subtotal').textContent = `€${subtotal.toFixed(2)}`;
        
        if(shippingSelect) {
            shippingCost = parseFloat(shippingSelect.value);
            if(shippingCost === 0) {
                checkoutShippingCost.textContent = 'Gratuita';
                checkoutShippingCost.classList.add('text-emerald-500');
            } else {
                checkoutShippingCost.textContent = `€${shippingCost.toFixed(2)}`;
                checkoutShippingCost.classList.remove('text-emerald-500');
            }
        }
        const total = subtotal + shippingCost;
        if(checkoutTotal) checkoutTotal.textContent = `€${total.toFixed(2)}`;
    }

    if(shippingSelect) {
        shippingSelect.addEventListener('change', updateCheckoutTotal);
    }

    updateCartUI();

    // 4. Contact Form Logic (Fetch API)
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i data-lucide="loader" class="w-5 h-5 animate-spin"></i> Invio in corso...';
            lucide.createIcons();
            
            setTimeout(() => {
                const msgBox = document.createElement('div');
                msgBox.className = 'mt-4 p-4 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-center font-medium';
                msgBox.textContent = 'Messaggio inviato con successo! Ti risponderemo presto.';
                contactForm.appendChild(msgBox);
                contactForm.reset();
                btn.innerHTML = originalText;
                lucide.createIcons();
                setTimeout(() => msgBox.remove(), 5000);
            }, 1500);
        });
    }

    // 5. Account Page Logic
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const accountDashboard = document.getElementById('account-dashboard');
    const accountForms = document.getElementById('account-forms');
    
    if(accountForms) {
        const showRegister = document.getElementById('show-register');
        const showLogin = document.getElementById('show-login');
        if(showRegister) showRegister.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('login-box').classList.add('hidden');
            document.getElementById('register-box').classList.remove('hidden');
        });
        if(showLogin) showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('register-box').classList.add('hidden');
            document.getElementById('login-box').classList.remove('hidden');
        });

        const performLogin = (e) => {
            e.preventDefault();
            accountForms.classList.add('hidden');
            accountDashboard.classList.remove('hidden');
            const email = e.target.querySelector('input[type="email"]').value;
            document.getElementById('user-email-display').textContent = email;
        };
        if(loginForm) loginForm.addEventListener('submit', performLogin);
        if(registerForm) registerForm.addEventListener('submit', performLogin);

        document.getElementById('btn-logout').addEventListener('click', () => {
            accountDashboard.classList.add('hidden');
            accountForms.classList.remove('hidden');
            if(loginForm) loginForm.reset();
            if(registerForm) registerForm.reset();
        });
    }
};

// Esegui in modo sicuro
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
