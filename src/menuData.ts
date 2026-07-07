export interface MenuItem {
  id: string;
  name: string;
  price: number; // In TND/DT (e.g., 14.0, 19.5)
  description?: string;
  ingredients?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "pizza",
    name: "Pizza",
    description: "Le nostre deliziose pizze preparate con ingredienti freschi e cotte alla perfezione.",
    imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
    items: [
      {
        id: "p1",
        name: "Pizza Margherita",
        price: 14.000,
        description: "Classica pizza con salsa di pomodoro fresca e mozzarella filante.",
        ingredients: ["sauce tomate", "mozzarella"]
      },
      {
        id: "p2",
        name: "Pizza Thon",
        price: 19.500,
        description: "Saporita pizza con pomodoro, mozzarella, cipolla fresca, tonno di qualità e olive.",
        ingredients: ["sauce tomate", "mozzarella", "oignon", "thon", "olive"]
      },
      {
        id: "p3",
        name: "Pizza Chicken",
        price: 19.000,
        description: "Pizza farcita con fette di pollo (escalope), cipolle, mozzarella e olive nere.",
        ingredients: ["sauce tomate", "mozzarella", "oignon", "escalope", "olive"]
      },
      {
        id: "p4",
        name: "Chicken Supreme",
        price: 19.000,
        description: "Specialità con base bianca, pollo speziato, prosciutto di tacchino, funghi e un tocco di salsa al pesto.",
        ingredients: ["sauce blanche", "poulet épices", "jambon de dinde", "champignons", "sauce pistou"]
      },
      {
        id: "p5",
        name: "Pizza Végétarienne",
        price: 17.000,
        description: "Una ricca selezione di verdure grigliate: carciofi, zucchine e melanzane con pomodoro e mozzarella.",
        ingredients: ["sauce tomate", "mozzarella", "artichaut", "courgette", "aubergine"]
      },
      {
        id: "p6",
        name: "Pizza Scampi",
        price: 20.000,
        description: "Elegante base bianca con mozzarella, zucchine fresche grigliate e morbida ricotta d'affioramento.",
        ingredients: ["sauce blanche", "mozzarella", "courgette", "ricotta"]
      },
      {
        id: "p7",
        name: "Pizza Buffalo Spicy",
        price: 18.000,
        description: "Per gli amanti del piccante: pomodoro, mozzarella, carne macinata e peperoncino rosso.",
        ingredients: ["sauce tomate", "mozzarella", "viande hachée", "piment rouge"]
      },
      {
        id: "p8",
        name: "Pizza White Garden",
        price: 18.000,
        description: "Pizza bianca delicata con mozzarella, cremosa ricotta e spinaci freschi.",
        ingredients: ["sauce blanche", "mozzarella", "ricotta", "épinard"]
      },
      {
        id: "p9",
        name: "Pizza Texane",
        price: 19.000,
        description: "Ricca combinazione texana con pomodoro, carne macinata, prosciutto, funghi, olive, peperoni e cipolle.",
        ingredients: ["sauce tomate", "mozzarella", "viande hachée", "jambon", "champignons", "olive", "poivron", "oignon"]
      },
      {
        id: "p10",
        name: "Pizza Chicago",
        price: 18.000,
        description: "Stile americano con salsa barbecue affumicata, fette di pepperoni, carne macinata, olive e mozzarella.",
        ingredients: ["sauce barbecue", "pepperoni", "viande hachée", "olive", "mozzarella"]
      },
      {
        id: "p11",
        name: "Quatre Fromages",
        price: 20.500,
        description: "Un'estasi di formaggi su base bianca: mozzarella, saporito Roquefort e una spolverata di Parmigiano.",
        ingredients: ["sauce blanche", "mozzarella", "Roquefort", "Parmesan"]
      },
      {
        id: "p12",
        name: "Quatre Saisons",
        price: 18.000,
        description: "Le quattro stagioni classiche: pomodoro, mozzarella, olive, funghi freschi, carciofi e prosciutto.",
        ingredients: ["sauce tomate", "mozzarella", "olive", "champignons", "artichaut", "jambon"]
      },
      {
        id: "p13",
        name: "Pizza Cocktail",
        price: 25.000,
        description: "La pizza di mare più ricca: pomodoro, mozzarella, cozze, gamberetti teneri e calamari freschi.",
        ingredients: ["sauce tomate", "mozzarella", "moule", "crevette", "calamar"]
      },
      {
        id: "p14",
        name: "Pizza Rayen",
        price: 22.000,
        description: "La nostra pizza speciale firmata: base alla crema di pistacchio, mozzarella, aglio, gamberetti e calamari.",
        ingredients: ["crème pistache", "mozzarella", "ail", "crevette", "calamar"]
      },
      {
        id: "p15",
        name: "Pizza champignons",
        price: 15.000,
        description: "Semplice e gustosa con pomodoro fresco, mozzarella filante e funghi affettati.",
        ingredients: ["sauce tomate", "mozzarella", "champignons"]
      }
    ]
  },
  {
    id: "sandwich",
    name: "Sandwich",
    description: "I classici panini tunisini farciti con le migliori carni e salse, caldi e fragranti.",
    imageUrl: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
    items: [
      { id: "s1", name: "Sandwich Thon", price: 8.500, description: "Panino classico farcito con tonno, insalata fresca e salse." },
      { id: "s2", name: "Sandwich Chawarma", price: 8.500, description: "La nostra squisita carne di shawarma speziata e saporita." },
      { id: "s3", name: "Sandwich Escalope", price: 8.500, description: "Fettine di pollo alla piastra succose ed insaporite." },
      { id: "s4", name: "Sandwich Escalope panée", price: 9.500, description: "Fettine di pollo panate croccanti, dorate al punto giusto." },
      { id: "s5", name: "Sandwich Cordon bleu", price: 9.500, description: "Cordon bleu filante con cuore di prosciutto e formaggio fuso." }
    ]
  },
  {
    id: "libanais",
    name: "Libanais",
    description: "Sottili sfoglie di pane arabo arrotolate e piastrate, piene di sapore.",
    imageUrl: "https://images.unsplash.com/photo-1547058886-af77d00d2358?auto=format&fit=crop&w=600&q=80",
    items: [
      { id: "l1", name: "Libanais Thon", price: 8.500, description: "Pane arabo sottile arrotolato con tonno, uova, olive e patatine." },
      { id: "l2", name: "Libanais Chawarma", price: 9.000, description: "Saporito rotolo di pane libanese con carne chawarma speziata." },
      { id: "l3", name: "Libanais Escalope", price: 9.000, description: "Delicato rotolo farcito con scaloppine di pollo grigliate e salse." },
      { id: "l4", name: "Libanais Escalope panée", price: 9.500, description: "Incredibile rotolo con pollo panato croccante e formaggio." },
      { id: "l5", name: "Libanais Cordon bleu", price: 9.500, description: "Rotolo filante farcito con cordon bleu e insalate fresche." }
    ]
  },
  {
    id: "makloub",
    name: "Makloub / Calzoni",
    description: "Tradizionale impasto di pizza ripiegato, cotto al forno sul momento e farcito abbondantemente.",
    imageUrl: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
    items: [
      { id: "m1", name: "Makloub Jambon", price: 8.500, description: "Il classico Makloub tunisino caldo con prosciutto e mozzarella fusa." },
      { id: "m2", name: "Makloub Thon", price: 9.500, description: "Versione saporita con tonno tunisino, maionese, harissa e formaggio." },
      { id: "m3", name: "Makloub Chawarma", price: 10.500, description: "Saporitissimo impasto al forno con shawarma di pollo speziato." },
      { id: "m4", name: "Makloub Escalope", price: 10.500, description: "Farcito con scaloppine di pollo grigliate, formaggio e patatine." },
      { id: "m5", name: "Makloub Escalope panée", price: 11.000, description: "Golosa combinazione con pollo panato croccante e formaggio filante." },
      { id: "m6", name: "Makloub Mahboul", price: 10.000, description: "La nostra versione 'pazza' (Mahboul in arabo) super ricca di salse e ripieni!" },
      { id: "m7", name: "Makloub Cordon bleu", price: 11.000, description: "Ripieno di cordon bleu fuso, patatine e insalata tunisina." }
    ]
  },
  {
    id: "baguette",
    name: "Baguette Farcie",
    description: "Pane a baguette tunisino farcito internamente e cotto al forno fino a sciogliere il formaggio.",
    imageUrl: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80",
    items: [
      { id: "b1", name: "Baguette Farcie Jambon", price: 8.500, description: "Baguette farcita con prosciutto, formaggio fuso e salse, passata in forno." },
      { id: "b2", name: "Baguette Farcie Thon", price: 9.500, description: "Farcita con tonno del mediterraneo, uovo sodo tritato e formaggio." },
      { id: "b3", name: "Baguette Farcie Chawarma", price: 10.500, description: "Cotta al forno con un generoso ripieno di chawarma e formaggio filante." },
      { id: "b4", name: "Baguette Farcie Escalope", price: 10.500, description: "Con tenero pollo grigliato, spezie tunisine e formaggio." },
      { id: "b5", name: "Baguette Farcie Escalope panée", price: 11.000, description: "Super croccante con scaloppina panata dorata e tanto formaggio." },
      { id: "b6", name: "Baguette Farcie Cordon bleu", price: 11.000, description: "La baguette preferita dai golosi, ricca di cordon bleu filante." }
    ]
  },
  {
    id: "cornet",
    name: "Cornet",
    description: "Una fantastica sfoglia a forma di cono, dorata e ripiena di prelibatezze fumanti.",
    imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    items: [
      { id: "c_s1", name: "Cornet Chawarma", price: 11.000, description: "Cono fragrante ripieno di calda carne shawarma e salse." },
      { id: "c_s2", name: "Cornet Escalope", price: 11.000, description: "Pollo grigliato a dadini saporiti all'interno di un cono di pane croccante." },
      { id: "c_s3", name: "Cornet Escalope panée", price: 12.000, description: "Cono farcito con straccetti di pollo panati croccanti, formaggio e salse." },
      { id: "c_s4", name: "Cornet Cordon bleu", price: 12.000, description: "Una bomba di sapore con cordon bleu a fette e formaggio fuso in cono." }
    ]
  },
  {
    id: "tacos",
    name: "Tacos",
    description: "Tacos stile francese/tunisino con piadina piegata a rettangolo, grigliata e ripiena di patatine e salsa formaggio.",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=600&q=80",
    items: [
      { id: "t1", name: "Tacos mexicain", price: 10.500, description: "Tacos speziato con carne macinata piccante, peperoni e cipolle." },
      { id: "t2", name: "Tacos Havana", price: 10.500, description: "Gusto tropicale saporito con pollo speziato e salsa BBQ." },
      { id: "t3", name: "Tacos Hawaï", price: 12.500, description: "Dolce e salato con pollo croccante, formaggio e fette di ananas." },
      { id: "t4", name: "Tacos Thon", price: 10.000, description: "Tacos delizioso farcito con tonno, formaggio cremoso e patatine." }
    ]
  },
  {
    id: "bonbons",
    name: "Les Bonbons",
    description: "Una specialità tunisina: impasto farcito e attorcigliato ai lati a forma di caramella, cotto al forno.",
    imageUrl: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80",
    items: [
      { id: "bb1", name: "Bonbon Jambon", price: 8.000, description: "Caramella di pane al forno con ripieno classico di prosciutto e mozzarella." },
      { id: "bb2", name: "Bonbon Thon", price: 9.000, description: "Farcito con tonno saporito, olive nere e formaggio fuso." },
      { id: "bb3", name: "Bonbon Chawarma", price: 9.500, description: "Cotto al forno con ripieno di shawarma speziato." },
      { id: "bb4", name: "Bonbon Escalope", price: 9.500, description: "Gusto delicato con petto di pollo e mozzarella filante in forno." },
      { id: "bb5", name: "Bonbon Escalope panée", price: 10.000, description: "Superbo bonbon di pane farcito con scaloppina panata croccante." },
      { id: "bb6", name: "Bonbon Cordon bleu", price: 10.000, description: "La delizia filante del cordon bleu cotto dentro il nostro involucro a bonbon." }
    ]
  },
  {
    id: "ciabatta",
    name: "Ciabatta",
    description: "Pane tipo ciabatta croccante fuori e morbidissimo dentro, piastrato caldo.",
    imageUrl: "https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=600&q=80",
    items: [
      { id: "cb1", name: "Ciabatta Thon", price: 8.000, description: "Pane ciabatta croccante con tonno, pomodorini, lattuga e salse." },
      { id: "cb2", name: "Ciabatta Chawarma", price: 8.500, description: "Farcito abbondantemente con shawarma speziato di pollo e maionese." },
      { id: "cb3", name: "Ciabatta Escalope", price: 8.500, description: "Scaloppina di pollo grigliata con formaggio fuso in pane ciabatta." },
      { id: "cb4", name: "Ciabatta Escalope panée", price: 9.500, description: "Con pollo panato dorato croccante, salse speciali e lattuga." },
      { id: "cb5", name: "Ciabatta Cordon bleu", price: 9.500, description: "Golosissimo ripieno caldo di cordon bleu filante in ciabatta." }
    ]
  },
  {
    id: "supplements",
    name: "Suppléments",
    description: "Arricchisci la tua pizza o il tuo panino con sfiziosi ingredienti extra.",
    imageUrl: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=600&q=80",
    items: [
      { id: "sup1", name: "Supplément Frite", price: 2.500, description: "Porzione extra di patatine fritte croccanti e salate dorate." },
      { id: "sup2", name: "Supplément Mozzarella", price: 3.500, description: "Una porzione generosa di formaggio mozzarella filante in più." }
    ]
  },
  {
    id: "boissons",
    name: "Boissons",
    description: "Bevande fresche ed acqua per accompagner al meglio il tuo pasto tunisino.",
    imageUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    items: [
      { id: "dr1", name: "Boisson gazeuse", price: 1.600, description: "Bibita gassata fresca a scelta (Coca, Fanta, Bogua...)." },
      { id: "dr2", name: "Canette", price: 1.500, description: "Lattina fresca di bibita a scelta da 33cl." },
      { id: "dr3", name: "Eau minérale 1L", price: 1.500, description: "Bottiglia d'acqua minerale naturale fresca da 1 Litro." },
      { id: "dr4", name: "Eau minérale 0.5 L", price: 1.000, description: "Bottiglia d'acqua minerale naturale fresca da 50cl." }
    ]
  }
];

// Helper to localize categories and menu items
export function getLocalizedMenu(lang: "it" | "fr" | "ar"): MenuCategory[] {
  if (lang === "it") return menuCategories;

  // Let's build localized details
  return menuCategories.map((cat) => {
    let catName = cat.name;
    let catDesc = cat.description;

    if (lang === "fr") {
      if (cat.id === "pizza") {
        catName = "Pizza";
        catDesc = "Nos délicieuses pizzas préparées avec des ingrédients frais et cuites à la perfection.";
      } else if (cat.id === "sandwich") {
        catName = "Sandwich";
        catDesc = "Les sandwichs tunisiens classiques farcis avec les meilleures viandes et sauces, chauds et croustillants.";
      } else if (cat.id === "libanais") {
        catName = "Libanais";
        catDesc = "Fines galettes de pain arabe roulées et grillées, pleines de saveur.";
      } else if (cat.id === "makloub") {
        catName = "Makloub / Calzone";
        catDesc = "Pâte à pizza traditionnelle pliée, cuite au four sur place et généreusement farcie.";
      } else if (cat.id === "baguette") {
        catName = "Baguette Farcie";
        catDesc = "Pain baguette tunisien farci et cuit au four jusqu'à ce que le fromage soit fondant.";
      } else if (cat.id === "cornet") {
        catName = "Cornet";
        catDesc = "Un fantastique cône de pâte dorée et croustillante, rempli de délices chauds.";
      } else if (cat.id === "tacos") {
        catName = "Tacos";
        catDesc = "Tacos style français/tunisien avec galette pliée en rectangle, grillée et garnie de frites et sauce fromage.";
      } else if (cat.id === "bonbons") {
        catName = "Les Bonbons";
        catDesc = "Une spécialité tunisienne : pâte farcie et torsadée sur les côtés en forme de bonbon, cuite au four.";
      } else if (cat.id === "ciabatta") {
        catName = "Ciabatta";
        catDesc = "Pain ciabatta croustillant à l'extérieur et moelleux à l'intérieur, grillé chaud.";
      } else if (cat.id === "supplements") {
        catName = "Suppléments";
        catDesc = "Enrichissez votre pizza ou votre sandwich avec de délicieux ingrédients supplémentaires.";
      } else if (cat.id === "boissons") {
        catName = "Boissons";
        catDesc = "Boissons fraîches et eau pour accompagner au mieux votre repas tunisien.";
      }
    } else if (lang === "ar") {
      if (cat.id === "pizza") {
        catName = "بيتزا";
        catDesc = "بيتزا لذيذة محضرة بمكونات طازجة ومخبوزة بإتقان.";
      } else if (cat.id === "sandwich") {
        catName = "سندوتشات";
        catDesc = "السندوتشات التونسية الكلاسيكية المحشية بأجود أنواع اللحوم والصلصات، ساخنة ومقرمشة.";
      } else if (cat.id === "libanais") {
        catName = "خبز لبناني";
        catDesc = "رقائق خبز عربي خفيف ملفوفة ومحمرة على الصاج، مليئة بالنكهات.";
      } else if (cat.id === "makloub") {
        catName = "مقلوب / كالزوني";
        catDesc = "عجينة البيتزا التقليدية المطوية، مخبوزة في الفرن في الحين ومحشية بسخاء.";
      } else if (cat.id === "baguette") {
        catName = "باغيت محشية";
        catDesc = "خبز الباغيت التونسي المحشي والمخبوز في الفرن حتى يذوب الجبن.";
      } else if (cat.id === "cornet") {
        catName = "كورنيه";
        catDesc = "مخروط عجين ذهبي مقرمش محشي بأشهى الحشوات الساخنة.";
      } else if (cat.id === "tacos") {
        catName = "تاكوس";
        catDesc = "تاكوس على الطريقة الفرنسية/التونسية، ملفوف ومحمر ومحشي بالبطاطا المقرمشة وصلصة الجبن.";
      } else if (cat.id === "bonbons") {
        catName = "بونبون (حلوى)";
        catDesc = "أكلة تونسية مبتكرة: عجين محشي ومغلق من الجانبين على شكل قطعة حلوى ومخبوز في الفرن.";
      } else if (cat.id === "ciabatta") {
        catName = "شاباتا";
        catDesc = "خبز شاباتا الإيطالي المقرمش من الخارج والطري من الداخل، محمر وساخن.";
      } else if (cat.id === "supplements") {
        catName = "إضافات";
        catDesc = "أضف لمستك الخاصة إلى البيتزا أو السندوتش بمكونات إضافية شهية.";
      } else if (cat.id === "boissons") {
        catName = "مشروبات باردة";
        catDesc = "مشروبات غازية ومياه معدنية باردة لتكتمل وجبتك اللذيذة.";
      }
    }

    const items = cat.items.map((item) => {
      let itemName = item.name;
      let itemDesc = item.description;
      let itemIngs = item.ingredients;

      // Localize Pizza ingredients values to look gorgeous
      if (itemIngs && lang === "ar") {
        itemIngs = itemIngs.map((ing) => {
          if (ing === "sauce tomate") return "صلصة طماطم";
          if (ing === "mozzarella") return "موزاريلا";
          if (ing === "oignon") return "بصل";
          if (ing === "thon") return "تن";
          if (ing === "olive") return "زيتون";
          if (ing === "escalope") return "إسكالوب";
          if (ing === "poulet épices") return "دجاج متبل";
          if (ing === "jambon de dinde") return "مرتديلا ديك رومي";
          if (ing === "champignons") return "فطر";
          if (ing === "sauce pistou") return "صلصة بيستو";
          if (ing === "artichaut") return "خرشوف";
          if (ing === "courgette") return "كوسا";
          if (ing === "aubergine") return "باذنجان";
          if (ing === "ricotta") return "ريكوتا";
          if (ing === "viande hachée") return "لحم مفروم";
          if (ing === "piment rouge") return "فلفل حار";
          if (ing === "épinard") return "سبانخ";
          if (ing === "jambon") return "مرتديلا";
          if (ing === "poivron") return "فلفل حلو";
          if (ing === "sauce barbecue") return "صلصة باربكيو";
          if (ing === "pepperoni") return "ببروني";
          if (ing === "sauce blanche") return "صلصة بيضاء";
          if (ing === "Roquefort") return "روكفور";
          if (ing === "Parmesan") return "بارميزان";
          if (ing === "moule") return "بلح البحر";
          if (ing === "crevette") return "قريدس";
          if (ing === "calamar") return "كلمار";
          if (ing === "crème pistache") return "كريمة الفستق";
          if (ing === "ail") return "ثوم";
          return ing;
        });
      }

      // French item details
      if (lang === "fr") {
        if (item.id === "p1") { itemName = "Pizza Margherita"; itemDesc = "Pizza classique avec sauce tomate fraîche et mozzarella fondante."; }
        else if (item.id === "p2") { itemName = "Pizza Thon"; itemDesc = "Savoureuse pizza avec tomate, mozzarella, oignon frais, thon de qualité et olives."; }
        else if (item.id === "p3") { itemName = "Pizza Poulet"; itemDesc = "Pizza garnie de tranches de poulet (escalope), oignons, mozzarella et olives noires."; }
        else if (item.id === "p4") { itemName = "Poulet Suprême"; itemDesc = "Spécialité avec base blanche, poulet épicé, jambon de dinde, champignons et sauce pesto."; }
        else if (item.id === "p5") { itemName = "Pizza Végétarienne"; itemDesc = "Une riche sélection de légumes grillés : artichauts, courgettes et aubergines avec tomate et mozzarella."; }
        else if (item.id === "p6") { itemName = "Pizza Scampi"; itemDesc = "Élégante base blanche avec mozzarella, courgettes fraîches grillées et ricotta fraîche."; }
        else if (item.id === "p7") { itemName = "Pizza Buffalo Épicée"; itemDesc = "Pour les amateurs de piquant : tomate, mozzarella, viande hachée et piment rouge."; }
        else if (item.id === "p8") { itemName = "Pizza White Garden"; itemDesc = "Pizza blanche délicate avec mozzarella, ricotta crémeuse et épinards frais."; }
        else if (item.id === "p9") { itemName = "Pizza Texane"; itemDesc = "Riche combinaison texane avec tomate, viande hachée, jambon, champignons, olives, poivrons et oignons."; }
        else if (item.id === "p10") { itemName = "Pizza Chicago"; itemDesc = "Style américain avec sauce barbecue fumée, tranches de pepperoni, viande hachée, olives et mozzarella."; }
        else if (item.id === "p11") { itemName = "Quatre Fromages"; itemDesc = "Une extase de fromages sur base blanche : mozzarella, Roquefort savoureux et Parmesan."; }
        else if (item.id === "p12") { itemName = "Quatre Saisons"; itemDesc = "Les quatre saisons classiques : tomate, mozzarella, olives, champignons frais, artichauts et jambon."; }
        else if (item.id === "p13") { itemName = "Pizza Cocktail de Mer"; itemDesc = "La pizza de la mer la plus riche : tomate, mozzarella, moules, crevettes tendres et calmars frais."; }
        else if (item.id === "p14") { itemName = "Pizza Rayen"; itemDesc = "Notre pizza spéciale signature : base crème de pistache, mozzarella, ail, crevettes et calmars."; }
        else if (item.id === "p15") { itemName = "Pizza Champignons"; itemDesc = "Simple et délicieuse avec tomate fraîche, mozzarella fondante et champignons émincés."; }
        // Sandwich
        else if (item.id === "s1") { itemName = "Sandwich Thon"; itemDesc = "Sandwich classique garni de thon, salade fraîche et sauces."; }
        else if (item.id === "s2") { itemName = "Sandwich Chawarma"; itemDesc = "Notre délicieuse viande de shawarma épicée et savoureuse."; }
        else if (item.id === "s3") { itemName = "Sandwich Escalope"; itemDesc = "Tranches d'escalope de poulet juteuses grillées à la plaque."; }
        else if (item.id === "s4") { itemName = "Sandwich Escalope panée"; itemDesc = "Tranches de poulet pané croustillantes, dorées à souhait."; }
        else if (item.id === "s5") { itemName = "Sandwich Cordon bleu"; itemDesc = "Cordon bleu fondant avec cœur de jambon et fromage fondu."; }
        // Libanais
        else if (item.id === "l1") { itemName = "Libanais Thon"; itemDesc = "Pain libanais fin roulé avec thon, œufs, olives et frites."; }
        else if (item.id === "l2") { itemName = "Libanais Chawarma"; itemDesc = "Savoureux rouleau de pain libanais avec viande chawarma épicée."; }
        else if (item.id === "l3") { itemName = "Libanais Escalope"; itemDesc = "Délicat rouleau garni d'escalope de poulet grillée et sauces."; }
        else if (item.id === "l4") { itemName = "Libanais Escalope panée"; itemDesc = "Délicieux rouleau avec poulet pané croustillant et fromage."; }
        else if (item.id === "l5") { itemName = "Libanais Cordon bleu"; itemDesc = "Rouleau fondant garni de cordon bleu et salades fraîches."; }
        // Makloub
        else if (item.id === "m1") { itemName = "Makloub Jambon"; itemDesc = "Le classique Makloub tunisien chaud avec jambon et mozzarella fondante."; }
        else if (item.id === "m2") { itemName = "Makloub Thon"; itemDesc = "Version savoureuse avec thon tunisien, mayonnaise, harissa et fromage."; }
        else if (item.id === "m3") { itemName = "Makloub Chawarma"; itemDesc = "Pâte savoureuse cuite au four avec chawarma de poulet épicé."; }
        else if (item.id === "m4") { itemName = "Makloub Escalope"; itemDesc = "Garni d'escalope de poulet grillée, fromage et frites."; }
        else if (item.id === "m5") { itemName = "Makloub Escalope panée"; itemDesc = "Combinaison gourmande avec poulet pané croustillant et fromage fondant."; }
        else if (item.id === "m6") { itemName = "Makloub Mahboul"; itemDesc = "Notre version 'folle' (Mahboul) super riche en sauces et garnitures !"; }
        else if (item.id === "m7") { itemName = "Makloub Cordon bleu"; itemDesc = "Garni de cordon bleu fondant, frites et salade tunisienne."; }
        // Baguette
        else if (item.id === "b1") { itemName = "Baguette Farcie Jambon"; itemDesc = "Baguette farcie avec jambon, fromage fondu et sauces, passée au four."; }
        else if (item.id === "b2") { itemName = "Baguette Farcie Thon"; itemDesc = "Farcie de thon de la méditerranée, œuf dur haché et fromage."; }
        else if (item.id === "b3") { itemName = "Baguette Farcie Chawarma"; itemDesc = "Cuite au four avec une généreuse garniture de chawarma et fromage fondant."; }
        else if (item.id === "b4") { itemName = "Baguette Farcie Escalope"; itemDesc = "Avec escalope de poulet tendre, épices tunisiennes et fromage."; }
        else if (item.id === "b5") { itemName = "Baguette Farcie Escalope panée"; itemDesc = "Super croustillante avec escalope panée dorée et beaucoup de fromage."; }
        else if (item.id === "b6") { itemName = "Baguette Farcie Cordon bleu"; itemDesc = "La baguette préférée des gourmands, riche en cordon bleu fondant."; }
        // Cornet
        else if (item.id === "c_s1") { itemName = "Cornet Chawarma"; itemDesc = "Cône croustillant rempli de viande chawarma chaude et de sauces."; }
        else if (item.id === "c_s2") { itemName = "Cornet Escalope"; itemDesc = "Poulet grillé en dés savoureux dans un cône de pain croustillant."; }
        else if (item.id === "c_s3") { itemName = "Cornet Escalope panée"; itemDesc = "Cône farci de poulet pané croustillant, fromage et sauces."; }
        else if (item.id === "c_s4") { itemName = "Cornet Cordon bleu"; itemDesc = "Une explosion de saveurs avec cordon bleu en tranches et fromage fondu."; }
        // Tacos
        else if (item.id === "t1") { itemName = "Tacos Mexicain"; itemDesc = "Tacos épicé avec viande hachée relevée, poivrons et oignons."; }
        else if (item.id === "t2") { itemName = "Tacos Havana"; itemDesc = "Goût tropical savoureux avec poulet épicé et sauce BBQ."; }
        else if (item.id === "t3") { itemName = "Tacos Hawaï"; itemDesc = "Sucré-salé avec poulet croustillant, fromage et tranches d'ananas."; }
        else if (item.id === "t4") { itemName = "Tacos Thon"; itemDesc = "Tacos délicieux farci de thon, fromage à la crème et frites."; }
        // Bonbons
        else if (item.id === "bb1") { itemName = "Bonbon Jambon"; itemDesc = "Bonbon de pain au four avec garniture classique de jambon et mozzarella."; }
        else if (item.id === "bb2") { itemName = "Bonbon Thon"; itemDesc = "Farci de thon savoureux, olives noires et fromage fondu."; }
        else if (item.id === "bb3") { itemName = "Bonbon Chawarma"; itemDesc = "Cuit au four avec garniture de chawarma épicé."; }
        else if (item.id === "bb4") { itemName = "Bonbon Escalope"; itemDesc = "Goût délicat avec escalope de poulet et mozzarella fondante au four."; }
        else if (item.id === "bb5") { itemName = "Bonbon Escalope panée"; itemDesc = "Superbe bonbon de pain farci d'escalope panée croustillante."; }
        else if (item.id === "bb6") { itemName = "Bonbon Cordon bleu"; itemDesc = "La délicieuse gourmandise du cordon bleu cuit dans notre pain bonbon."; }
        // Ciabatta
        else if (item.id === "cb1") { itemName = "Ciabatta Thon"; itemDesc = "Pain ciabatta croustillant avec thon, tomates, laitue et sauces."; }
        else if (item.id === "cb2") { itemName = "Ciabatta Chawarma"; itemDesc = "Garni généreusement de chawarma de poulet épicé et mayonnaise."; }
        else if (item.id === "cb3") { itemName = "Ciabatta Escalope"; itemDesc = "Escalope de poulet grillée avec fromage fondu en pain ciabatta."; }
        else if (item.id === "cb4") { itemName = "Ciabatta Escalope panée"; itemDesc = "Avec poulet pané doré croustillant, sauces spéciales et laitue."; }
        else if (item.id === "cb5") { itemName = "Ciabatta Cordon bleu"; itemDesc = "Délicieuse ciabatta garnie de cordon bleu chaud et fondant."; }
        // Supplements
        else if (item.id === "sup1") { itemName = "Supplément Frites"; itemDesc = "Portion supplémentaire de frites dorées et croustillantes."; }
        else if (item.id === "sup2") { itemName = "Supplément Mozzarella"; itemDesc = "Une portion généreuse de fromage mozzarella fondante en plus."; }
        // Boissons
        else if (item.id === "dr1") { itemName = "Boisson gazeuse"; itemDesc = "Boisson gazeuse fraîche au choix (Coca, Fanta, Boga...)."; }
        else if (item.id === "dr2") { itemName = "Canette"; itemDesc = "Canette fraîche de boisson au choix de 33cl."; }
        else if (item.id === "dr3") { itemName = "Eau minérale 1L"; itemDesc = "Bouteille d'eau minérale naturelle de 1 Litre."; }
        else if (item.id === "dr4") { itemName = "Eau minérale 0.5L"; itemDesc = "Bouteille d'eau minérale naturelle de 50cl."; }
      }

      // Arabic item details
      if (lang === "ar") {
        if (item.id === "p1") { itemName = "بيتزا مارغريتا"; itemDesc = "البيتزا الكلاسيكية بصلصة الطماطم الطازجة وجبنة الموزاريلا الغنية."; }
        else if (item.id === "p2") { itemName = "بيتزا بالتن"; itemDesc = "بيتزا لذيذة مع الطماطم، الموزاريلا، البصل الطازج، التن الفاخر والزيتون."; }
        else if (item.id === "p3") { itemName = "بيتزا بالدجاج"; itemDesc = "بيتزا غنية بشرائح الدجاج (الإسكالوب)، البصل، الموزاريلا والزيتون الأسود."; }
        else if (item.id === "p4") { itemName = "تشيكن سوبريم"; itemDesc = "بيتزا بصلصة بيضاء، دجاج متبل، مرتديلا حبش، فطر ولمسة من صلصة البيستو."; }
        else if (item.id === "p5") { itemName = "بيتزا خضروات"; itemDesc = "تشكيلة غنية من الخضار المشوية: خرشوف، كوسا، باذنجان مع الطماطم والموزاريلا."; }
        else if (item.id === "p6") { itemName = "بيتزا سكامبي"; itemDesc = "قاعدة بيضاء أنيقة مع الموزاريلا، الكوسا الطازجة المشوية وجبنة الريكوتا الطرية."; }
        else if (item.id === "p7") { itemName = "بيتزا بوفالو حارة"; itemDesc = "لعشاق النكهات الحارة: طماطم، موزاريلا، لحم مفروم وفلفل أحمر حار."; }
        else if (item.id === "p8") { itemName = "بيتزا الحديقة البيضاء"; itemDesc = "بيتزا بيضاء خفيفة ولذيذة مع الموزاريلا، كريمة الريكوتا والسبانخ الطازجة."; }
        else if (item.id === "p9") { itemName = "بيتزا تكساس"; itemDesc = "توليفة غنية من الطماطم، اللحم المفروم، المرتديلا، الفطر، الزيتون، الفلفل والبصل."; }
        else if (item.id === "p10") { itemName = "بيتزا شيكاغو"; itemDesc = "على الطريقة الأمريكية بصلصة الباربكيو المدخنة، شرائح الببروني، اللحم المفروم، الزيتون والموزاريلا."; }
        else if (item.id === "p11") { itemName = "بيتزا الأربع أجبان"; itemDesc = "مزيج ساحر من الأجبان الفاخرة على قاعدة بيضاء: موزاريلا، الروكفور الفواح والبارميزان."; }
        else if (item.id === "p12") { itemName = "بيتزا الفصول الأربعة"; itemDesc = "مكونات الفصول الأربعة الكلاسيكية: طماطم، موزاريلا، زيتون، فطر طازج، خرشوف ومرتديلا."; }
        else if (item.id === "p13") { itemName = "بيتزا فواكه البحر"; itemDesc = "أغنى بيتزا بحرية: طماطم، موزاريلا، بلح البحر، قريدس طري وكلمار طازج."; }
        else if (item.id === "p14") { itemName = "بيتزا ريان الخاصة"; itemDesc = "بيتزا المطعم الخاصة والشهيرة: قاعدة بكريمة الفستق، موزاريلا، ثوم، قريدس وكلمار."; }
        else if (item.id === "p15") { itemName = "بيتزا بالفطر"; itemDesc = "بسيطة ولذيذة بصلصة الطماطم الطازجة، موزاريلا وشرائح الفطر الغنية."; }
        // Sandwich
        else if (item.id === "s1") { itemName = "سندوتش تن"; itemDesc = "سندوتش كلاسيكي محشي بالتن، السلطة الطازجة والصلصات."; }
        else if (item.id === "s2") { itemName = "سندوتش شاورما"; itemDesc = "لحم شاورما الدجاج المتبل بالبهارات الخاصة والشهية."; }
        else if (item.id === "s3") { itemName = "سندوتش إسكالوب"; itemDesc = "شرائح إسكالوب الدجاج المشوية على الصاج الطازجة والطرية."; }
        else if (item.id === "s4") { itemName = "سندوتش إسكالوب باني"; itemDesc = "شرائح دجاج مقرمشة ومقلية بالبقسماط ذهبية اللون."; }
        else if (item.id === "s5") { itemName = "سندوتش كوردون بلو"; itemDesc = "كوردون بلو شهي محشي بالجبن الذائب والمرتديلا."; }
        // Libanais
        else if (item.id === "l1") { itemName = "لبناني بالتن"; itemDesc = "خبز لبناني رقيق ملفوف بالتن، البيض، الزيتون والبطاطا."; }
        else if (item.id === "l2") { itemName = "لبناني شاورما"; itemDesc = "لفافة خبز لبناني محشية بشاورما الدجاج المتبلة الرائعة."; }
        else if (item.id === "l3") { itemName = "لبناني إسكالوب"; itemDesc = "لفافة خفيفة محشية بإسكالوب الدجاج المشوي والصلصات."; }
        else if (item.id === "l4") { itemName = "لبناني إسكالوب باني"; itemDesc = "لفافة دجاج باني مقرمش مع الجبنة السائلة والبطاطا."; }
        else if (item.id === "l5") { itemName = "لبناني كوردون بلو"; itemDesc = "لفافة شهية محشية بالكوردون بلو الذائب والسلطات الطازجة."; }
        // Makloub
        else if (item.id === "m1") { itemName = "مقلوب مرتديلا"; itemDesc = "مقلوب تونسي كلاسيكي ساخن بالمرتديلا والموزاريلا الذائبة."; }
        else if (item.id === "m2") { itemName = "مقلوب تن"; itemDesc = "مقلوب بنكهة تونسية ممتازة بالتن، المايونيز، الهريسة والجبن."; }
        else if (item.id === "m3") { itemName = "مقلوب شاورما"; itemDesc = "عجينة مقلوب مخبوزة في الفرن ومحشية بشاورما الدجاج المتبلة."; }
        else if (item.id === "m4") { itemName = "مقلوب إسكالوب"; itemDesc = "محشي بإسكالوب الدجاج المشوي، الجبنة السائحة والبطاطا المقرمشة."; }
        else if (item.id === "m5") { itemName = "مقلوب إسكالوب باني"; itemDesc = "توليفة لذيذة من الدجاج الباني المقرمش والجبن المطاطي."; }
        else if (item.id === "m6") { itemName = "مقلوب مهبول"; itemDesc = "مقلوب 'المهبول' الخاص بنا! غني جداً بالحشوات المتنوعة والصلصات."; }
        else if (item.id === "m7") { itemName = "مقلوب كوردون بلو"; itemDesc = "محشي بالكوردون بلو الذائب، البطاطا المقرمشة والسلطة التونسية."; }
        // Baguette
        else if (item.id === "b1") { itemName = "باغيت محشية مرتديلا"; itemDesc = "باغيت محشية بالمرتديلا والجبن الذائب والصلصات ومحمصة بالفرن."; }
        else if (item.id === "b2") { itemName = "باغيت محشية تن"; itemDesc = "محشية بالتن التونسي الفاخر، البيض المفروم والجبن."; }
        else if (item.id === "b3") { itemName = "باغيت محشية شاورما"; itemDesc = "مخبوزة بالفرن ومحشية بشاورما الدجاج اللذيذة والجبن السائح."; }
        else if (item.id === "b4") { itemName = "باغيت محشية إسكالوب"; itemDesc = "بإسكالوب الدجاج الطري، البهارات التونسية الفواحة والجبن."; }
        else if (item.id === "b5") { itemName = "باغيت محشية إسكالوب باني"; itemDesc = "مقرمشة وممتازة بإسكالوب باني ذهبي والعديد من الأجبان."; }
        else if (item.id === "b6") { itemName = "باغيت محشية كوردون بلو"; itemDesc = "الباغيت المفضلة للجميع، غنية بالكوردون بلو الذائب."; }
        // Cornet
        else if (item.id === "c_s1") { itemName = "كورنيه شاورما"; itemDesc = "قمع عجين مقرمش غني بشاورما الدجاج الساخنة والصلصات."; }
        else if (item.id === "c_s2") { itemName = "كورنيه إسكالوب"; itemDesc = "قطع دجاج مشوي متبل داخل كورنيه من العجين الذهبي."; }
        else if (item.id === "c_s3") { itemName = "كورنيه إسكالوب باني"; itemDesc = "كورنيه محشي بقطع الدجاج المقرمشة باني والأجبان السائحة."; }
        else if (item.id === "c_s4") { itemName = "كورنيه كوردون بلو"; itemDesc = "انفجار من النكهات مع الكوردون بلو والجبن الذائب في كورنيه طازج."; }
        // Tacos
        else if (item.id === "t1") { itemName = "تاكوس مكسيكي"; itemDesc = "تاكوس متبل باللحم المفروم الحار، الفلفل والبصل."; }
        else if (item.id === "t2") { itemName = "تاكوس هافانا"; itemDesc = "نكهة استوائية متميزة بالدجاج المتبل وصلصة الباربكيو."; }
        else if (item.id === "t3") { itemName = "تاكوس هاواي"; itemDesc = "حلو ومالح بالدجاج المقرمش، الجبن وقطع الأناناس."; }
        else if (item.id === "t4") { itemName = "تاكوس تن"; itemDesc = "تاكوس شهي محشي بالتن، الجبن الكريمي والبطاطا."; }
        // Bonbons
        else if (item.id === "bb1") { itemName = "بونبون مرتديلا"; itemDesc = "عجينة بونبون في الفرن محشية بالمرتديلا والموزاريلا الكلاسيكية."; }
        else if (item.id === "bb2") { itemName = "بونبون تن"; itemDesc = "محشية بالتن اللذيذ، الزيتون الأسود والجبن المطاطي."; }
        else if (item.id === "bb3") { itemName = "بونبون شاورما"; itemDesc = "مخبوزة في الفرن على شكل قطعة حلوى غنية بشاورما الدجاج."; }
        else if (item.id === "bb4") { itemName = "بونبون إسكالوب"; itemDesc = "ذوق رائع بإسكالوب الدجاج والموزاريلا الذائبة بالفرن."; }
        else if (item.id === "bb5") { itemName = "بونبون إسكالوب باني"; itemDesc = "بونبون عجين فاخر محشي بإسكالوب باني المقرمش."; }
        else if (item.id === "bb6") { itemName = "بونبون كوردون بلو"; itemDesc = "الكوردون بلو اللذيذ والذائب مخبوز داخل عجين بونبون المبتكر."; }
        // Ciabatta
        else if (item.id === "cb1") { itemName = "شاباتا تن"; itemDesc = "خبز الشاباتا المقرمش محشي بالتن، الطماطم، الخس والصلصات."; }
        else if (item.id === "cb2") { itemName = "شاباتا شاورما"; itemDesc = "محشي بسخاء بشاورما الدجاج المتبلة والمايونيز والبطاطا."; }
        else if (item.id === "cb3") { itemName = "شاباتا إسكالوب"; itemDesc = "إسكالوب دجاج مشوي مع الجبن الذائب في خبز شاباتا دافئ."; }
        else if (item.id === "cb4") { itemName = "شاباتا إسكالوب باني"; itemDesc = "مع دجاج باني مقرمش، صلصات خاصة وسلطة خس طازجة."; }
        else if (item.id === "cb5") { itemName = "شاباتا كوردون بلو"; itemDesc = "حشوة دافئة وشهية من الكوردون بلو والجبن في خبز شاباتا."; }
        // Supplements
        else if (item.id === "sup1") { itemName = "إضافة بطاطا مقلية"; itemDesc = "حصة إضافية من البطاطا المقلية المقرمشة والذهبية."; }
        else if (item.id === "sup2") { itemName = "إضافة موزاريلا"; itemDesc = "حصة إضافية سخية من جبنة الموزاريلا المطاطية اللذيذة."; }
        // Boissons
        else if (item.id === "dr1") { itemName = "مشروب غازي"; itemDesc = "مشروب غازي بارد حسب اختيارك (كوكا، فانتا، بوغا...)."; }
        else if (item.id === "dr2") { itemName = "علبة كانيت"; itemDesc = "علبة مشروب غازي باردة 33 مل حسب الرغبة."; }
        else if (item.id === "dr3") { itemName = "مياه معدنية 1 لتر"; itemDesc = "قارورة مياه معدنية طبيعية باردة سعة 1 لتر."; }
        else if (item.id === "dr4") { itemName = "مياه معدنية نصف لتر"; itemDesc = "قارورة مياه معدنية طبيعية باردة سعة 500 مل."; }
      }

      return {
        ...item,
        name: itemName,
        description: itemDesc,
        ingredients: itemIngs
      };
    });

    return {
      ...cat,
      name: catName,
      description: catDesc,
      items
    };
  });
}
