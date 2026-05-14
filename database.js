const prodotti = [
  { 
    id: 1, 
    img: "assets/images/gemini_20.png", 
    nome: "Mousepad Vetro Bianco Standard", 
    prezzo: "59.99€", 
    desc: "Il nostro Mousepad in Vetro Bianco Standard è l'equilibrio perfetto tra estetica minimalista e prestazioni assolute. La superficie levigata in vetro temperato garantisce una scorrevolezza senza precedenti, eliminando qualsiasi attrito indesiderato per movimenti fluidi e letali. Ideale per chi cerca un tracking pulito." 
  },
  { 
    id: 2, 
    img: "assets/images/gemini_11.png", 
    nome: "Mousepad Vetro Grigio Tecnico", 
    prezzo: "59.99€", 
    desc: "Design ultra-sottile per scrivanie moderne. Il Grigio Tecnico non è solo un colore, ma una dichiarazione d'intenti: fonde durabilità industriale con un feeling tattile sofisticato. Il rivestimento assicura micro-movimenti costanti e precisi, perfetto per i flick-shot più esigenti." 
  },
  { 
    id: 3, 
    img: "assets/images/gemini_17.png", 
    nome: "Mousepad Vetro Nero Satinato", 
    prezzo: "59.99€", 
    desc: "L'eleganza assoluta del Nero Satinato. La superficie opaca riduce attivamente i riflessi ambientali, garantendo che i sensori ottici dei mouse catturino ogni singolo movimento senza interferenze. Un'esperienza di controllo e precisione estrema progettata per i giocatori competitivi." 
  },
  { 
    id: 4, 
    img: "assets/images/gemini_7.png", 
    nome: "Mousepad Vetro Textured Pro", 
    prezzo: "69.99€", 
    desc: "Per chi cerca il feedback. La finitura esclusiva Micro-Meteorica offre un feedback tattile impercettibile a occhio nudo ma fondamentale per la memoria muscolare. Avrai un controllo di stop superiore senza rinunciare alla tipica scorrevolezza del vetro temperato." 
  },
  { 
    id: 5, 
    img: "assets/images/gemini_13.png", 
    nome: "Mousepad Vetro Bianco Limited", 
    prezzo: "69.99€", 
    desc: "Edizione Limitata. Bianco ottico purissimo con un elegante bordo nero a contrasto che ridefinisce l'estetica del tuo setup. Il trattamento speciale della superficie garantisce una pulizia totale in un passata, impedendo al sudore di compromettere le prestazioni in game." 
  },
  { 
    id: 6, 
    img: "assets/images/gemini_16.png", 
    nome: "Mousepad Vetro Stealth Carbon", 
    prezzo: "69.99€", 
    desc: "Stile aggressivo per performance tecniche. La finitura in finta fibra di carbonio è intrappolata sotto il vetro temperato, garantendo un'estetica racing indistruttibile. Massima stabilità e scivolamento calibrato al millimetro." 
  },
  { 
    id: 7, 
    img: "assets/images/gemini_6.png", 
    nome: "Mousepad Vetro Circuit Limited", 
    prezzo: "79.99€", 
    desc: "Un capolavoro tecnologico. Motivo a circuito stampato rosso e nero inciso direttamente a laser sotto la superficie del vetro. Rappresenta la massima evoluzione dei nostri mousepad, unendo un design futuristico a prestazioni eSport senza compromessi." 
  },
  { 
    id: 8, 
    img: "assets/images/gemini_3.png", 
    nome: "Mousepad Vetro Galaxy Nebula", 
    prezzo: "79.99€", 
    desc: "Porta il tuo setup in un'altra dimensione. Un vibrante motivo a nebulosa galattica stampato in altissima risoluzione, perfetto per riflettere la luce dei tuoi setup LED/RGB. Ogni dettaglio è protetto da vetro rinforzato per una longevità ineguagliabile." 
  },
  { 
    id: 9, 
    img: "assets/images/gemini_8.png", 
    nome: "Mousepad Vetro Red Lava", 
    prezzo: "79.99€", 
    desc: "Un drammatico motivo a lava fusa rossa e nera che sprigiona energia pura. Realizzato per chi non accetta compromessi né in fatto di stile né di precisione. La superficie garantisce una tracciabilità del pixel chirurgica in ogni condizione." 
  },
  { 
    id: 10, 
    img: "assets/images/gemini_14.png", 
    nome: "Gaming Sleeve Basic Nero", 
    prezzo: "24.99€", 
    desc: "La base delle performance. Questa Sleeve nera opaca con compressione graduata riduce l'affaticamento muscolare durante le lunghe sessioni e azzera l'attrito del braccio sul tappetino o sulla scrivania. Traspirante e leggera come una seconda pelle." 
  },
  { 
    id: 11, 
    img: "assets/images/gemini_10.png", 
    nome: "Gaming Sleeve Basic Bianco", 
    prezzo: "24.99€", 
    desc: "Design minimalista, prestazioni eccellenti. Realizzata in tessuto tecnico bianco ottico traspirante, mantiene il braccio fresco sotto pressione e garantisce un movimento fluido per la massima libertà d'azione nei giochi FPS." 
  },
  { 
    id: 12, 
    img: "assets/images/gemini_2.png", 
    nome: "Gaming Sleeve Pro Grip Nero", 
    prezzo: "24.99€", 
    desc: "Livello Pro. Integra zone grip in silicone antiscivolo sull'avambraccio per garantire massima stabilità dove serve, mantenendo lo scivolamento perfetto sul polso. Il nero profondo si adatta a qualsiasi outfit da gamer." 
  },
  { 
    id: 13, 
    img: "assets/images/gemini_4.png", 
    nome: "Gaming Sleeve Pro Grip Bianco", 
    prezzo: "24.99€", 
    desc: "Bianco ottico con zone grip in silicone trasparente. Progettata per i puristi del setup bianco che necessitano del massimo supporto muscolare e aderenza selettiva per i movimenti di precisione assoluta." 
  },
  { 
    id: 14, 
    img: "assets/images/gemini_19.png", 
    nome: "Gaming Sleeve Limited Red/White", 
    prezzo: "29.99€", 
    desc: "Stile distintivo. Presenta il nostro logo a V geometrico fuso in una trama rossa e bianca in edizione limitata. Materiali premium con cuciture piatte per eliminare qualsiasi fastidio e garantire zero frizione." 
  },
  { 
    id: 15, 
    img: "assets/images/gemini_12.png", 
    nome: "Gaming Sleeve Grey Camo", 
    prezzo: "24.99€", 
    desc: "Motivo mimetico tattico in scala di grigi e neri per setup dal look aggressivo. Il tessuto a compressione supporta attivamente la circolazione del braccio migliorando i riflessi e abbassando i tempi di reazione." 
  },
  { 
    id: 16, 
    img: "assets/images/gemini_15.png", 
    nome: "Gaming Sleeve Red Stealth", 
    prezzo: "24.99€", 
    desc: "Un'estetica aggressiva e nascosta: tessuto nero opaco ad altissima resistenza unito a cuciture rosse tecniche a contrasto. Costruita per i giocatori hardcore che puntano al massimo risultato senza distrazioni." 
  },
  { 
    id: 17, 
    img: "assets/images/gemini_5.png", 
    nome: "Gaming Sleeve Circuit Print", 
    prezzo: "29.99€", 
    desc: "Edizione da collezione. La trama presenta un intricato circuito stampato in oro metallizzato su base nera. Unisce le nostre tecnologie anti-attrito e di termoregolazione con un design che farà invidia ai tuoi compagni di squadra." 
  },
  { 
    id: 18, 
    img: "assets/images/gemini_9.png", 
    nome: "Gaming Sleeve Neon Ripple", 
    prezzo: "24.99€", 
    desc: "Onde fluide in blu neon elettrico attraversano il tessuto tecnico di questa sleeve futuristica. Ideata per armonizzarsi perfettamente con i monitor e le luci della tua postazione, migliorando drasticamente lo scorrimento sul pad." 
  },
  { 
    id: 19, 
    img: "assets/images/gemini_1.png", 
    nome: "Gaming Sleeve Custom Team", 
    prezzo: "29.99€", 
    desc: "Per i team competitivi. La struttura avanzata presenta un pannello laterale liscio progettato per ospitare patch e loghi del tuo team di esport. Flessibilità totale senza compromettere la compressione anatomica." 
  },
  { 
    id: 20, 
    img: "assets/images/gemini_18.png", 
    nome: "Gaming Sleeve Carbon Fiber", 
    prezzo: "29.99€", 
    desc: "Resistenza estrema. La texture visiva imita la fibra di carbonio mentre la composizione in spandex infuso assicura un'adattabilità millimetrica. L'ultimo ritrovato per chi spinge i propri limiti oltre ogni record." 
  }
];

if (typeof module !== "undefined" && module.exports) {
    module.exports = prodotti;
}
