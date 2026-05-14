import os

html_start = """<!DOCTYPE html>
<html lang="it" class="dark scroll-smooth h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Velocitas Glass - Catalogo Massivo</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = { darkMode: 'class', theme: { extend: { colors: { primary: '#10b981', dark: '#050505', darker: '#000000' }, fontFamily: { sans: ['Inter', 'sans-serif'] } } } }
    </script>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://unpkg.com/lucide@latest"></script>
</head>
<body class="bg-dark text-white font-sans antialiased overflow-x-hidden selection:bg-white/20 selection:text-white flex flex-col min-h-screen">
    
    <script src="js/components.js"></script>

    <main class="flex-1 pt-32 pb-24">
        <div class="max-w-7xl mx-auto px-6">
            <div class="text-center mb-16">
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Edizioni Limitate
                </div>
                <h1 class="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 uppercase">Catalogo Prodotti</h1>
                <p class="text-gray-400 text-lg font-light max-w-2xl mx-auto">Il setup definitivo. Mousepad in vetro temperato e gaming sleeves per la massima precisione.</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
"""

html_end = """
            </div>
        </div>
    </main>

    <script src="js/main.js"></script>
</body>
</html>
"""

mousepads = [
    ("Mousepad Vetro Nero Finitura Micrometeorica", "mousepad-vetro-nero.webp"),
    ("Mousepad Vetro Bianco Edizione Limitata", "mousepad-vetro-bianco.webp"),
    ("Mousepad Vetro Emerald Core", "mousepad-vetro-nero.webp"),
    ("Mousepad Vetro Ruby Red", "mousepad-vetro-bianco.webp"),
    ("Mousepad Vetro Sapphire Blue", "mousepad-vetro-nero.webp"),
    ("Mousepad Vetro Obsidian Black", "mousepad-vetro-nero.webp"),
    ("Mousepad Vetro Frost White", "mousepad-vetro-bianco.webp"),
    ("Mousepad Vetro Cyber Neon", "mousepad-vetro-nero.webp"),
    ("Mousepad Vetro Golden Horizon", "mousepad-vetro-bianco.webp"),
    ("Mousepad Vetro Stealth Edition", "mousepad-vetro-nero.webp"),
]

sleeves = [
    ("Pro Gamer con Gaming Sleeves Neri Compression", "pro-gamer-sleeves.webp"),
    ("Dettaglio Gaming Sleeve con Logo Team", "gamer-team-sleeves.webp"),
    ("Gaming Sleeve Bianco V-Tech", "pro-gamer-sleeves.webp"),
    ("Gaming Sleeve Red Strike", "gamer-team-sleeves.webp"),
    ("Gaming Sleeve Blue Flash", "pro-gamer-sleeves.webp"),
    ("Gaming Sleeve Emerald Glide", "gamer-team-sleeves.webp"),
    ("Gaming Sleeve Cyberpunk", "pro-gamer-sleeves.webp"),
    ("Gaming Sleeve Minimalist White", "gamer-team-sleeves.webp"),
    ("Gaming Sleeve Obsidian Texture", "pro-gamer-sleeves.webp"),
    ("Gaming Sleeve Stealth Compression", "gamer-team-sleeves.webp"),
]

products_html = ""

def generate_card(title, img, price, is_mousepad):
    category = "Mousepad Vetro" if is_mousepad else "Gaming Sleeve"
    return f"""
                <div class="glass-panel rounded-3xl border border-white/5 overflow-hidden group hover:border-emerald-500/50 transition-colors flex flex-col relative">
                    <div class="absolute top-4 right-4 z-10 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-bold text-emerald-500">
                        {category}
                    </div>
                    <div class="aspect-square bg-darker relative overflow-hidden">
                        <img src="assets/images/{img}" alt="{title}" class="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-700 mix-blend-luminosity group-hover:mix-blend-normal">
                        <div class="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent opacity-80"></div>
                    </div>
                    <div class="p-6 flex flex-col flex-1 bg-dark/50">
                        <h3 class="text-lg font-bold text-white mb-2 leading-tight group-hover:text-emerald-400 transition-colors">{title}</h3>
                        <p class="text-2xl font-bold text-emerald-500 mt-auto mb-6 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">€{price}</p>
                        <button class="add-to-cart w-full bg-white hover:bg-emerald-500 text-black font-bold py-3 rounded-xl transition-colors flex justify-center items-center gap-2 group/btn" data-name="{title}" data-price="{price}" data-img="assets/images/{img}">
                            <i data-lucide="shopping-cart" class="w-5 h-5 group-hover/btn:-translate-y-1 transition-transform"></i>
                            Aggiungi
                        </button>
                    </div>
                </div>
"""

for mp in mousepads:
    products_html += generate_card(mp[0], mp[1], "69.99", True)

for sl in sleeves:
    products_html += generate_card(sl[0], sl[1], "24.99", False)

with open('catalogo.html', 'w', encoding='utf-8') as f:
    f.write(html_start + products_html + html_end)

print("catalogo.html generated successfully.")
