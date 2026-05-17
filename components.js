window.injectSharedComponents = () => {
    // Calcola il percorso base se ci troviamo in una sottocartella (es. /prodotti/)
    const basePath = '';

    const headerHTML = `
    <header id="main-header" class="fixed top-0 w-full z-50 transition-all duration-300 bg-[#050505]/80 backdrop-blur-md py-4 border-b border-white/5">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <!-- Logo -->
            <a href="${basePath}index.html" class="flex items-center gap-3 cursor-pointer group">
                <div class="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-transform group-hover:scale-110">
                    <div class="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span class="text-xl font-bold tracking-widest uppercase text-white">Velocitas</span>
            </a>
            
            <!-- Menu & Cart allineati a destra -->
            <div class="flex items-center gap-6 md:gap-10 ml-auto">
                <nav class="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-semibold tracking-wide flex-wrap">
                    <a href="${basePath}index.html" class="text-gray-300 hover:text-white transition-colors">Home</a>
                    <a href="${basePath}catalogo.html" class="text-gray-300 hover:text-white transition-colors">Catalogo</a>
                    <a href="${basePath}account.html" class="text-emerald-500 hover:text-emerald-400 transition-colors flex items-center gap-1"><i data-lucide="user" class="w-4 h-4"></i>Account</a>
                </nav>
                <div class="flex items-center">
                    <button class="open-cart relative p-2 text-white hover:text-emerald-400 transition-colors">
                        <i data-lucide="shopping-cart" class="w-6 h-6"></i>
                        <span class="cart-badge-count hidden absolute top-0 right-0 w-4 h-4 bg-emerald-500 text-black text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg">0</span>
                    </button>
                </div>
            </div>
        </div>
    </header>
    `;

    const cartHTML = `
    <!-- SIDEBAR CART -->
    <div id="cart-backdrop" class="hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity"></div>
    <div id="cart-sidebar" class="fixed top-0 right-0 h-full w-full max-w-md bg-darker border-l border-white/10 z-[70] transform translate-x-full transition-transform duration-500 ease-in-out flex flex-col shadow-2xl">
        <div class="p-6 border-b border-white/10 flex justify-between items-center bg-dark shrink-0">
            <h2 class="text-xl font-bold tracking-widest uppercase">Carrello</h2>
            <button class="close-cart text-gray-400 hover:text-white transition-colors"><i data-lucide="x" class="w-6 h-6"></i></button>
        </div>
        <div class="flex-1 overflow-y-auto p-6 bg-[#020202]">
            <div id="cart-empty" class="flex flex-col items-center justify-center h-full text-gray-500 gap-4">
                <i data-lucide="shopping-bag" class="w-16 h-16 opacity-50 mb-4"></i>
                <p class="text-lg">Il tuo carrello è vuoto.</p>
                <button class="close-cart mt-4 px-8 py-3 border border-white/20 rounded-full hover:bg-white/5 transition-colors text-white font-medium">Continua lo shopping</button>
            </div>
            <div id="cart-items" class="hidden flex flex-col gap-6">
                <div class="flex gap-4 glass-panel p-4 rounded-2xl items-center relative group">
                    <div class="w-24 h-24 bg-dark rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden shadow-inner shrink-0">
                        <img src="${basePath}assets/images/mousepad_black.png" alt="Prodotto" class="w-full h-full object-cover opacity-80 mix-blend-luminosity">
                        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                    </div>
                    <div class="flex-1 pr-8">
                        <h3 class="font-bold text-lg leading-tight">Velocitas Edition</h3>
                        <div class="flex justify-between items-center mt-3">
                            <div class="flex items-center gap-4 border border-white/20 rounded-full px-3 py-1 bg-black/50">
                                <button id="btn-decrease" class="text-gray-400 hover:text-white"><i data-lucide="minus" class="w-4 h-4"></i></button>
                                <span id="cart-qty" class="text-sm font-semibold w-4 text-center">1</span>
                                <button id="btn-increase" class="text-gray-400 hover:text-white"><i data-lucide="plus" class="w-4 h-4"></i></button>
                            </div>
                            <p id="cart-item-total" class="font-semibold text-lg">€69.99</p>
                        </div>
                    </div>
                    <button id="btn-remove" class="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-500/10">
                        <i data-lucide="trash-2" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
        <div id="cart-footer" class="hidden shrink-0 p-8 border-t border-white/10 bg-dark shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-10">
            <div class="flex justify-between items-center mb-6">
                <span class="text-gray-400 uppercase tracking-widest text-sm font-bold">Totale</span>
                <span id="cart-final-total" class="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">€69.99</span>
            </div>
            <a href="${basePath}checkout.html" id="btn-checkout" class="w-full bg-emerald-500 hover:bg-emerald-400 text-black py-4 rounded-full font-bold text-lg transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center gap-2"><i data-lucide="lock" class="w-5 h-5"></i>Procedi al Checkout</a>
        </div>
    </div>
    `;

    // FOOTER: Contiene Contatti, Links legali, Dati aziendali
    const footerHTML = `
    <footer class="bg-darker py-16 border-t border-white/5 relative z-10 mt-auto w-full">
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 md:gap-8 items-start border-b border-white/10 pb-12 mb-8">
            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-3">
                    <div class="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                        <div class="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span class="text-lg font-bold tracking-widest uppercase">Velocitas</span>
                </div>
                <p class="text-gray-500 text-sm mt-2 leading-relaxed">
                    Mousepad in vetro e sleeve da gaming pensati per precisione, comfort e una navigazione pulita su desktop, tablet e smartphone. Pronto per GitHub Pages.
                </p>
                <div class="flex items-center gap-2 text-emerald-500 text-xs font-bold uppercase tracking-widest mt-2 border border-emerald-500/30 px-3 py-1 rounded-full w-max bg-emerald-500/10">
                    <i data-lucide="shield-check" class="w-4 h-4"></i> Conforme al GDPR
                </div>
            </div>
            
            <!-- Contatti Aziendali -->
            <div class="flex flex-col gap-4">
                <h4 class="text-white font-semibold uppercase tracking-widest text-sm mb-2">Sede & Contatti</h4>
                <div class="flex flex-col gap-3 text-gray-400 text-sm">
                    <p class="flex items-start gap-3"><i data-lucide="map-pin" class="w-4 h-4 shrink-0 text-emerald-500 mt-1"></i> Via Cavaliere di Vittorio Veneto 767\\D</p>
                    <p class="flex items-center gap-3"><i data-lucide="phone" class="w-4 h-4 shrink-0 text-emerald-500"></i> 3486435518</p>
                    <p class="flex items-center gap-3"><i data-lucide="mail" class="w-4 h-4 shrink-0 text-emerald-500"></i> furia03.fm@gmail.com</p>
                </div>
            </div>
            
            <!-- Link Utili -->
            <div class="flex flex-col gap-4">
                <h4 class="text-white font-semibold uppercase tracking-widest text-sm mb-2">Link Utili</h4>
                <div class="flex flex-col gap-3 text-gray-400 text-sm">
                    <a href="${basePath}termini.html" class="hover:text-emerald-400 transition-colors">Termini e Condizioni</a>
                    <a href="${basePath}privacy.html" class="hover:text-emerald-400 transition-colors">Privacy Policy</a>
                    <a href="${basePath}chi-siamo.html" class="hover:text-emerald-400 transition-colors">Chi Siamo</a>
                </div>
            </div>

            <!-- Contattaci Form -->
            <div class="flex flex-col gap-4">
                <h4 class="text-white font-semibold uppercase tracking-widest text-sm mb-2">Scrivici</h4>
                <form id="footer-contact-form" class="flex flex-col gap-3">
                    <input type="text" id="contact-name" placeholder="Nome" required maxlength="100" autocomplete="off" class="bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-600">
                    <input type="email" id="contact-email" placeholder="Email" required maxlength="100" autocomplete="off" class="bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-600">
                    <textarea id="contact-message" placeholder="Messaggio" required maxlength="100" autocomplete="off" rows="2" class="bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-emerald-500/50 text-white placeholder-gray-600 resize-none"></textarea>
                    <button type="submit" class="bg-emerald-500 hover:bg-emerald-400 text-black font-bold py-2 rounded-lg text-sm transition-colors mt-1">Invia Messaggio</button>
                    <p id="contact-success" class="text-emerald-500 text-xs hidden font-medium mt-1">Messaggio inviato con successo!</p>
                </form>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p class="text-gray-600 text-xs">© 2026 Velocitas Glass. Tutti i diritti riservati.</p>
            <div class="flex gap-4">
                <div class="w-8 h-5 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">VISA</div>
                <div class="w-8 h-5 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">MC</div>
                <div class="w-8 h-5 bg-white/10 rounded flex items-center justify-center text-[8px] font-bold text-white/50">PPAL</div>
            </div>
        </div>
    </footer>
    <script>
        setTimeout(() => {
            const contactForm = document.getElementById('footer-contact-form');
            if(contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const btn = contactForm.querySelector('button');
                    const successMsg = document.getElementById('contact-success');
                    btn.textContent = 'Invio...';
                    btn.classList.add('opacity-50', 'cursor-not-allowed');
                    
                    setTimeout(() => {
                        btn.textContent = 'Invia Messaggio';
                        btn.classList.remove('opacity-50', 'cursor-not-allowed');
                        successMsg.classList.remove('hidden');
                        contactForm.reset();
                        
                        setTimeout(() => {
                            successMsg.classList.add('hidden');
                        }, 3000);
                    }, 1500);
                });
            }
        }, 500);
    </script>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML + cartHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
};
