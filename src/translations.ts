export type Language = "it" | "fr" | "ar";

export interface TranslationSet {
  // Navbar
  navHome: string;
  navMenu: string;
  navChef: string;
  navReservation: string;
  navReviews: string;
  logoSub: string;

  // Hero Section
  heroBadge: string;
  heroTitle1: string;
  heroTitleGradient: string;
  heroDesc: string;
  heroBtnMenu: string;
  heroBtnBook: string;
  heroHighlightFresh: string;
  heroHighlightFreshDesc: string;
  heroHighlightPizza: string;
  heroHighlightPizzaDesc: string;
  heroHighlightSpeed: string;
  heroHighlightSpeedDesc: string;
  heroFloatFast: string;
  heroFloatFastDesc: string;
  heroFloatPizza: string;
  heroFloatPizzaDesc: string;

  // Menu Section
  menuTitle: string;
  menuDesc: string;
  menuSearchPlaceholder: string;
  menuSearchClear: string;
  menuItemsCount: string;
  menuItemsCountSingle: string;
  menuCode: string;
  menuAdd: string;
  menuNotFoundTitle: string;
  menuNotFoundDesc: string;
  menuNotFoundBtn: string;

  // Chef AI Section
  chefBadge: string;
  chefTitle: string;
  chefDesc: string;
  chefActiveStatus: string;
  chefStatusText: string;
  chefWelcomeMsg: string;
  chefThinkingText: string;
  chefFaqLabel: string;
  chefPlaceholder: string;
  chefSendBtn: string;

  // Reservation Section
  resBadge: string;
  resTitle: string;
  resDesc: string;
  resConfirmTitle: string;
  resConfirmSub: string;
  resConfirmIdLabel: string;
  resConfirmGuest: string;
  resConfirmPhone: string;
  resConfirmDate: string;
  resConfirmTime: string;
  resConfirmPeople: string;
  resConfirmTableArea: string;
  resConfirmNotesTitle: string;
  resConfirmNotesBody: string;
  resConfirmAnotherBtn: string;
  resFormTitle: string;
  resFormName: string;
  resFormNamePlaceholder: string;
  resFormPhone: string;
  resFormPhonePlaceholder: string;
  resFormEmail: string;
  resFormEmailPlaceholder: string;
  resFormDate: string;
  resFormGuests: string;
  resFormPeopleLabel: string;
  resFormPersonLabel: string;
  resFormTime: string;
  resFormSubmit: string;
  resFormSubmitting: string;
  resMapTitle: string;
  resMapSub: string;
  resMapSelected: string;
  resMapAvailable: string;
  resMapEntrance: string;
  resMapOven: string;
  resMapSelectedTable: string;
  resMapPosition: string;

  // Reviews Section
  revBadge: string;
  revTitle: string;
  revDesc: string;
  revFormTitle: string;
  revFormName: string;
  revFormNamePlaceholder: string;
  revFormRating: string;
  revFormComment: string;
  revFormCommentPlaceholder: string;
  revFormSuccess: string;
  revFormSubmit: string;
  revFormEmpty: string;

  // Cart Drawer
  cartTitle: string;
  cartEmptyTitle: string;
  cartEmptyDesc: string;
  cartEmptyBtn: string;
  cartOrderTrackerTitle: string;
  cartOrderTrackerId: string;
  cartOrderProgressLabel: string;
  cartOrderProgressTime: string;
  cartStep1: string;
  cartStep2: string;
  cartStep3: string;
  cartStep4: string;
  cartReceiptTitle: string;
  cartReceiptMethod: string;
  cartReceiptDeliveryFee: string;
  cartReceiptTotal: string;
  cartCloseAndClearBtn: string;
  cartAsportoBtn: string;
  cartConsegnaBtn: string;
  cartFormName: string;
  cartFormNamePlaceholder: string;
  cartFormPhone: string;
  cartFormPhonePlaceholder: string;
  cartFormAddress: string;
  cartFormAddressPlaceholder: string;
  cartFormNotes: string;
  cartFormNotesPlaceholder: string;
  cartCalcSubtotal: string;
  cartCalcDelivery: string;
  cartCalcTotal: string;
  cartSubmitBtn: string;
  cartSubmittingBtn: string;

  // Footer & General
  footerDesc: string;
  footerTag1: string;
  footerTag2: string;
  footerContactsTitle: string;
  footerHoursLabel: string;
  footerHoursValue: string;
  footerNavTitle: string;
  footerCopyright: string;
  footerMadeWith: string;
  scrollToTopLabel: string;
}

export const translations: Record<Language, TranslationSet> = {
  it: {
    navHome: "Home",
    navMenu: "Menu",
    navChef: "Chef AI ✨",
    navReservation: "Prenota Tavolo",
    navReviews: "Recensioni",
    logoSub: "Tunisian Street Food",

    heroBadge: "Sapori Autentici della Tunisia",
    heroTitle1: "L'arte dello Street Food",
    heroTitleGradient: "Tunisino e Pizze d'Autore",
    heroDesc: "Benvenuti da Resto Rayen! Dal nostro famosissimo Makloub cotto sul momento, alle fragranti Baguettes Farcies e alla nostra esclusiva Pizza Rayen con crema di pistacchio, gamberi e calamari. Un viaggio sensoriale autentico e indimenticabile, preparato con amore e ingredienti freschi.",
    heroBtnMenu: "Esplora il Nostro Menu",
    heroBtnBook: "Prenota un Tavolo",
    heroHighlightFresh: "100%",
    heroHighlightFreshDesc: "Ingredienti Freschi",
    heroHighlightPizza: "10+",
    heroHighlightPizzaDesc: "Tipi di Pizza",
    heroHighlightSpeed: "<15m",
    heroHighlightSpeedDesc: "Preparazione Rapida",
    heroFloatFast: "Makloub & Tacos",
    heroFloatFastDesc: "Cotto al Forno",
    heroFloatPizza: "Pizza Rayen",
    heroFloatPizzaDesc: "Crema di Pistacchio",

    menuTitle: "Esplora il Nostro Menu",
    menuDesc: "Ogni specialità è preparata al momento nel nostro forno a pietra. Scegli la tua categoria preferita e aggiungi al carrello.",
    menuSearchPlaceholder: "Cerca pizza, chawarma, cordon bleu, ingredienti...",
    menuSearchClear: "Cancella",
    menuItemsCount: "elementi",
    menuItemsCountSingle: "elemento",
    menuCode: "Codice",
    menuAdd: "Aggiungi",
    menuNotFoundTitle: "Nessun piatto trovato",
    menuNotFoundDesc: "Non siamo riusciti a trovare piatti o ingredienti corrispondenti alla ricerca. Prova un'altra ricerca.",
    menuNotFoundBtn: "Mostra tutto il menu",

    chefBadge: "Assistente Virtuale",
    chefTitle: "Chiedi allo Chef AI",
    chefDesc: "Parla direttamente con lo Chef Rayen! Fatti consigliare un abbinamento perfetto, scopri i segreti degli ingredienti o fatti guidare in base alla tua fame.",
    chefActiveStatus: "Sempre pronto in cucina • Online",
    chefStatusText: "Gemini Powered",
    chefWelcomeMsg: "Aslama, habibi! 👋 Sono lo Chef Rayen. Benvenuto nel mio regno dei sapori! Vuoi farti consigliare una pizza speciale, un succoso Makloub o scoprire di più sui nostri piatti tunisini? Chiedimi pure, sono qui per te! 🍳✨",
    chefThinkingText: "Chef Rayen sta cucinando la risposta",
    chefFaqLabel: "Domande frequenti:",
    chefPlaceholder: "Chiedi allo Chef... (es. Quali pizze hanno il tonno? Consigliami un panino vegetariano)",
    chefSendBtn: "Invia",

    resBadge: "Pianifica la Tua Serata",
    resTitle: "Prenotazione Tavoli",
    resDesc: "Riserva il tuo posto d'onore. Scegli il tavolo desiderato sulla mappa interattiva del nostro locale e vivi un'esperienza memorabile.",
    resConfirmTitle: "Prenotazione Confermata!",
    resConfirmSub: "Grazie per aver scelto Resto Rayen",
    resConfirmIdLabel: "Codice di Conferma",
    resConfirmGuest: "Ospite",
    resConfirmPhone: "Cellulare",
    resConfirmDate: "Data",
    resConfirmTime: "Ora",
    resConfirmPeople: "Ospiti",
    resConfirmTableArea: "Tavolo & Area Riservata",
    resConfirmNotesTitle: "Nota importante per gli ospiti:",
    resConfirmNotesBody: "La prenotazione viene mantenuta per un massimo di 15 minuti oltre l'orario stabilito. Per modifiche o cancellazioni, contattaci telefonicamente o tramite l'assistente virtuale. Ti aspettiamo! 🍽️",
    resConfirmAnotherBtn: "Effettua un'altra prenotazione",
    resFormTitle: "Dati di Contatto",
    resFormName: "Nome Completo",
    resFormNamePlaceholder: "Esempio: Mario Rossi",
    resFormPhone: "Numero di Telefono",
    resFormPhonePlaceholder: "Esempio: +39 333 1234567",
    resFormEmail: "Email (Opzionale)",
    resFormEmailPlaceholder: "Esempio: mario.rossi@email.com",
    resFormDate: "Data",
    resFormGuests: "Ospiti",
    resFormPeopleLabel: "persone",
    resFormPersonLabel: "persona",
    resFormTime: "Orario",
    resFormSubmit: "Conferma Prenotazione",
    resFormSubmitting: "Prenotazione in corso...",
    resMapTitle: "Mappa del Ristorante",
    resMapSub: "Clicca per selezionare la zona",
    resMapSelected: "Selezionato",
    resMapAvailable: "Disponibile",
    resMapEntrance: "Ingresso Principale 🚪",
    resMapOven: "Forno a Legna 🔥",
    resMapSelectedTable: "Tavolo selezionato:",
    resMapPosition: "Posizione:",

    revBadge: "La Voce dei Nostri Ospiti",
    revTitle: "Cosa Dicono di Noi",
    revDesc: "La soddisfazione dei nostri clienti è la nostra ricetta migliore. Leggi le recensioni reali e lascia la tua opinione.",
    revFormTitle: "Lascia la Tua Recensione",
    revFormName: "Tuo Nome",
    revFormNamePlaceholder: "Inserisci il tuo nome",
    revFormRating: "Valutazione",
    revFormComment: "Il Tuo Commento",
    revFormCommentPlaceholder: "Scrivi qui cosa ne pensi della nostra cucina o del nostro servizio...",
    revFormSuccess: "Recensione pubblicata con successo! Grazie, habibi! ❤️",
    revFormSubmit: "Invia Recensione",
    revFormEmpty: "Nessuna recensione caricata. Scrivi la prima!",

    cartTitle: "Il Tuo Carrello",
    cartEmptyTitle: "Il tuo carrello è vuoto",
    cartEmptyDesc: "Aggiungi le deliziose pizze o i tipici panini tunisini dal menu per completare l'ordine!",
    cartEmptyBtn: "Torna al menu",
    cartOrderTrackerTitle: "Ordine Ricevuto con Successo!",
    cartOrderTrackerId: "ID ORDINE",
    cartOrderProgressLabel: "Stato di avanzamento",
    cartOrderProgressTime: "In consegna tra:",
    cartStep1: "Ricevuto",
    cartStep2: "Preparazione",
    cartStep3: "In Consegna",
    cartStep4: "Consegnato",
    cartReceiptTitle: "Riepilogo Scontrino",
    cartReceiptMethod: "Metodo consegna:",
    cartReceiptDeliveryFee: "Spese di spedizione:",
    cartReceiptTotal: "Totale scontrino:",
    cartCloseAndClearBtn: "Chiudi e Svuota Carrello",
    cartAsportoBtn: "Asporto (Ritiro locale)",
    cartConsegnaBtn: "Domicilio (+3.000 DT)",
    cartFormName: "Tuo Nome",
    cartFormNamePlaceholder: "Inserisci nome e cognome",
    cartFormPhone: "Telefono Cellulare",
    cartFormPhonePlaceholder: "Esempio: 22 123 456",
    cartFormAddress: "Indirizzo di Consegna",
    cartFormAddressPlaceholder: "Via, civico, quartiere e città",
    cartFormNotes: "Note per la cucina / citofono",
    cartFormNotesPlaceholder: "Esempio: Niente cipolla, citofono interno 4B...",
    cartCalcSubtotal: "Subtotale carrello:",
    cartCalcDelivery: "Spedizione a domicilio:",
    cartCalcTotal: "Prezzo Totale:",
    cartSubmitBtn: "Paga & Completa Ordine",
    cartSubmittingBtn: "Elaborazione Ordine...",

    footerDesc: "Benvenuti da Resto Rayen, il cuore pulsante dello street food tunisino e delle pizze speciali più ricche della città. Esperienza, cortesia e materie prime d'eccellenza cotte al forno sul momento.",
    footerTag1: "Authentic Taste",
    footerTag2: "Tunisian Pride",
    footerContactsTitle: "Contatti & Orari",
    footerHoursLabel: "Lunedì - Domenica:",
    footerHoursValue: "12:00 - 14:00, 17:00 - 00:00",
    footerNavTitle: "Navigazione",
    footerCopyright: "Tutti i diritti riservati.",
    footerMadeWith: "Fatto con",
    scrollToTopLabel: "Torna in alto"
  },
  fr: {
    navHome: "Accueil",
    navMenu: "Menu",
    navChef: "Chef IA ✨",
    navReservation: "Réserver",
    navReviews: "Avis",
    logoSub: "Street Food Tunisien",

    heroBadge: "Saveurs Authentiques de la Tunisie",
    heroTitle1: "L'art du Street Food",
    heroTitleGradient: "Tunisien & Pizzas d'Auteur",
    heroDesc: "Bienvenue chez Resto Rayen ! De notre célèbre Makloub cuit sur place, à nos Baguettes Farcies parfumées et notre Pizza Rayen exclusive à la crème de pistache, crevettes et calmars. Un voyage sensoriel authentique et inoubliable, préparé avec amour et ingrédients frais.",
    heroBtnMenu: "Découvrir notre Menu",
    heroBtnBook: "Réserver une Table",
    heroHighlightFresh: "100%",
    heroHighlightFreshDesc: "Ingrédients Frais",
    heroHighlightPizza: "10+",
    heroHighlightPizzaDesc: "Types de Pizza",
    heroHighlightSpeed: "<15m",
    heroHighlightSpeedDesc: "Service Rapide",
    heroFloatFast: "Makloub & Tacos",
    heroFloatFastDesc: "Cuit au Four",
    heroFloatPizza: "Pizza Rayen",
    heroFloatPizzaDesc: "Crème de Pistache",

    menuTitle: "Découvrez Notre Menu",
    menuDesc: "Chaque spécialité est préparée à la minute dans notre four à pierre. Choisissez votre catégorie préférée et ajoutez-la au panier.",
    menuSearchPlaceholder: "Rechercher pizza, chawarma, cordon bleu, ingrédients...",
    menuSearchClear: "Effacer",
    menuItemsCount: "éléments",
    menuItemsCountSingle: "élément",
    menuCode: "Code",
    menuAdd: "Ajouter",
    menuNotFoundTitle: "Aucun plat trouvé",
    menuNotFoundDesc: "Nous n'avons trouvé aucun plat ou ingrédient correspondant à votre recherche. Essayez une autre recherche.",
    menuNotFoundBtn: "Afficher tout le menu",

    chefBadge: "Assistant Virtuel",
    chefTitle: "Demandez au Chef IA",
    chefDesc: "Parlez directement avec le Chef Rayen ! Demandez des recommandations, découvrez les secrets des ingrédients ou laissez-vous guider selon votre faim.",
    chefActiveStatus: "Toujours prêt en cuisine • En ligne",
    chefStatusText: "Propulsé par Gemini",
    chefWelcomeMsg: "Aslama, habibi ! 👋 Je suis le Chef Rayen. Bienvenue dans mon royaume des saveurs ! Vous voulez des recommandations pour une pizza spéciale, un Makloub juteux ou en savoir plus sur nos plats tunisiens ? Demandez-moi ce que vous voulez ! 🍳✨",
    chefThinkingText: "Le Chef Rayen prépare sa réponse",
    chefFaqLabel: "Questions fréquentes :",
    chefPlaceholder: "Demandez au Chef... (ex: Quelles pizzas contiennent du thon ? Conseillez-moi un sandwich végétarien)",
    chefSendBtn: "Envoyer",

    resBadge: "Planifiez votre Soirée",
    resTitle: "Réservation de Table",
    resDesc: "Réservez votre place d'honneur. Choisissez la table souhaitée sur la carte interactive de notre restaurant et vivez une expérience mémorable.",
    resConfirmTitle: "Réservation Confirmée !",
    resConfirmSub: "Merci d'avoir choisi Resto Rayen",
    resConfirmIdLabel: "Code de Confirmation",
    resConfirmGuest: "Client",
    resConfirmPhone: "Téléphone",
    resConfirmDate: "Date",
    resConfirmTime: "Heure",
    resConfirmPeople: "Invités",
    resConfirmTableArea: "Table & Zone Réservée",
    resConfirmNotesTitle: "Note importante pour les invités :",
    resConfirmNotesBody: "La réservation est maintenue pendant 15 minutes au-delà de l'heure fixée. Pour toute modification ou annulation, contactez-nous par téléphone ou via l'assistant virtuel. Nous vous attendons ! 🍽️",
    resConfirmAnotherBtn: "Faire une autre réservation",
    resFormTitle: "Informations de Contact",
    resFormName: "Nom Complet",
    resFormNamePlaceholder: "Exemple : Jean Dupont",
    resFormPhone: "Numéro de Téléphone",
    resFormPhonePlaceholder: "Exemple : +33 6 12345678",
    resFormEmail: "Email (Optionnel)",
    resFormEmailPlaceholder: "Exemple : jean.dupont@email.com",
    resFormDate: "Date",
    resFormGuests: "Invités",
    resFormPeopleLabel: "personnes",
    resFormPersonLabel: "personne",
    resFormTime: "Heure",
    resFormSubmit: "Confirmer la Réservation",
    resFormSubmitting: "Réservation en cours...",
    resMapTitle: "Plan du Restaurant",
    resMapSub: "Cliquez pour sélectionner la zone",
    resMapSelected: "Sélectionné",
    resMapAvailable: "Disponible",
    resMapEntrance: "Entrée Principale 🚪",
    resMapOven: "Four à Bois 🔥",
    resMapSelectedTable: "Table sélectionnée :",
    resMapPosition: "Emplacement :",

    revBadge: "La Voix de nos Clients",
    revTitle: "Ce qu'on Dit de Nous",
    revDesc: "La satisfaction de nos clients est notre meilleure recette. Lisez les avis authentiques et partagez votre expérience.",
    revFormTitle: "Laissez votre Avis",
    revFormName: "Votre Nom",
    revFormNamePlaceholder: "Saisissez votre nom",
    revFormRating: "Note",
    revFormComment: "Votre Commentaire",
    revFormCommentPlaceholder: "Écrivez ici ce que vous pensez de notre cuisine ou de notre service...",
    revFormSuccess: "Avis publié avec succès ! Merci, habibi ! ❤️",
    revFormSubmit: "Envoyer l'Avis",
    revFormEmpty: "Aucun avis publié. Écrivez le premier !",

    cartTitle: "Votre Panier",
    cartEmptyTitle: "Votre panier est vide",
    cartEmptyDesc: "Ajoutez de délicieuses pizzas ou des sandwichs tunisiens typiques du menu pour compléter la commande !",
    cartEmptyBtn: "Retour au menu",
    cartOrderTrackerTitle: "Commande reçue avec succès !",
    cartOrderTrackerId: "ID COMMANDE",
    cartOrderProgressLabel: "Suivi de la commande",
    cartOrderProgressTime: "Livraison estimée dans :",
    cartStep1: "Reçue",
    cartStep2: "Préparation",
    cartStep3: "En Livraison",
    cartStep4: "Livrée",
    cartReceiptTitle: "Détail du Ticket",
    cartReceiptMethod: "Mode de livraison :",
    cartReceiptDeliveryFee: "Frais de livraison :",
    cartReceiptTotal: "Total du ticket :",
    cartCloseAndClearBtn: "Fermer & Vider le Panier",
    cartAsportoBtn: "À emporter (Retrait sur place)",
    cartConsegnaBtn: "À domicile (+3.000 DT)",
    cartFormName: "Votre Nom",
    cartFormNamePlaceholder: "Saisissez nom et prénom",
    cartFormPhone: "Téléphone Portable",
    cartFormPhonePlaceholder: "Exemple : 22 123 456",
    cartFormAddress: "Adresse de Livraison",
    cartFormAddressPlaceholder: "Rue, numéro, quartier et ville",
    cartFormNotes: "Notes pour la cuisine / interphone",
    cartFormNotesPlaceholder: "Exemple : Sans oignon, interphone 4B...",
    cartCalcSubtotal: "Sous-total du panier :",
    cartCalcDelivery: "Livraison à domicile :",
    cartCalcTotal: "Prix Total :",
    cartSubmitBtn: "Payer & Finaliser la Commande",
    cartSubmittingBtn: "Traitement de la commande...",

    footerDesc: "Bienvenue chez Resto Rayen, le cœur battant du street food tunisien et des pizzas d'auteur les plus généreuses de la ville. Savoir-faire, accueil chaleureux et ingrédients d'excellence cuits au feu de bois.",
    footerTag1: "Goût Authentique",
    footerTag2: "Fierté Tunisienne",
    footerContactsTitle: "Contact & Horaires",
    footerHoursLabel: "Lundi - Dimanche :",
    footerHoursValue: "12:00 - 14:00, 17:00 - 00:00",
    footerNavTitle: "Navigation",
    footerCopyright: "Tous droits réservés.",
    footerMadeWith: "Fait avec",
    scrollToTopLabel: "Retour en haut"
  },
  ar: {
    navHome: "الرئيسية",
    navMenu: "القائمة",
    navChef: "الشيف الذكي ✨",
    navReservation: "حجز طاولة",
    navReviews: "الآراء",
    logoSub: "أكلات تونسية شعبية",

    heroBadge: "المذاق التونسي الأصيل",
    heroTitle1: "فن الأكلات الشعبية",
    heroTitleGradient: "التونسية والبيتزا الإبداعية",
    heroDesc: "مرحباً بكم في ريستو ريان! من المقلوب الشهير المحضر في الحين، إلى الباغيت المحشية الفواحة وبيتزا ريان الحصرية بكريمة الفستق والقريدس والكلمار. رحلة ذوقية فريدة لا تنسى، تُحضر بكل حب وبمكونات طازجة.",
    heroBtnMenu: "اكتشف قائمتنا",
    heroBtnBook: "احجز طاولتك الآن",
    heroHighlightFresh: "100%",
    heroHighlightFreshDesc: "مكونات طازجة",
    heroHighlightPizza: "+10",
    heroHighlightPizzaDesc: "أنواع بيتزا",
    heroHighlightSpeed: "أقل من 15د",
    heroHighlightSpeedDesc: "تحضير سريع",
    heroFloatFast: "مقلوب وطاكوس",
    heroFloatFastDesc: "مخبوز في الفرن",
    heroFloatPizza: "بيتزا ريان",
    heroFloatPizzaDesc: "بكريمة الفستق",

    menuTitle: "اكتشف قائمتنا الغنية",
    menuDesc: "كل أكلاتنا تُحضر في الحين في فرن الحطب الخاص بنا. اختر صنفك المفضل وأضف إلى السلة.",
    menuSearchPlaceholder: "ابحث عن بيتزا، شاورما، كوردون بلو، مكونات...",
    menuSearchClear: "مسح",
    menuItemsCount: "أطباق",
    menuItemsCountSingle: "طبق",
    menuCode: "الرمز",
    menuAdd: "أضف للسلة",
    menuNotFoundTitle: "لم يتم العثور على أي طبق",
    menuNotFoundDesc: "عذراً، لم نجد أي طبق أو مكون يطابق بحثك. يرجى تجربة كلمات أخرى.",
    menuNotFoundBtn: "عرض كل القائمة",

    chefBadge: "المساعد الافتراضي",
    chefTitle: "اسأل الشيف الذكي",
    chefDesc: "تحدث مباشرة مع الشيف ريان! دعه يقترح عليك أفضل الأطباق، يفسر لك المكونات أو يوجهك حسب رغبتك.",
    chefActiveStatus: "جاهز دائماً في المطبخ • متصل",
    chefStatusText: "مدعوم بـ Gemini",
    chefWelcomeMsg: "عسارمة، حبيبي! 👋 أنا الشيف ريان. مرحباً بك في عالم المذاق الأصيل! تحب ننصحك ببيتزا ممتازة، مقلوب بنين برشة، أو تحب تعرف أكثر على أكلاتنا التونسية؟ اسألني اللي تحب، أنا هنا باش ننصحك! 🍳✨",
    chefThinkingText: "الشيف ريان يحضر الإجابة الآن",
    chefFaqLabel: "الأسئلة الشائعة:",
    chefPlaceholder: "اسأل الشيف... (مثلاً: ماهي البيتزا التي تحتوي على التونة؟ انصحني بسندوتش نباتي)",
    chefSendBtn: "إرسال",

    resBadge: "خطط لسهرتك معنا",
    resTitle: "حجز الطاولات",
    resDesc: "احجز مكانك المفضل. اختر الطاولة التي تعجبك من خلال خارطة المطعم التفاعلية واستمتع بتجربة رائعة.",
    resConfirmTitle: "تم تأكيد الحجز بنجاح!",
    resConfirmSub: "شكراً لاختياركم ريستو ريان",
    resConfirmIdLabel: "رمز الحجز الخاص بك",
    resConfirmGuest: "الاسم",
    resConfirmPhone: "الهاتف",
    resConfirmDate: "التاريخ",
    resConfirmTime: "الوقت",
    resConfirmPeople: "عدد الأشخاص",
    resConfirmTableArea: "الطاولة والمنطقة المحجوزة",
    resConfirmNotesTitle: "ملاحظة هامة للضيوف:",
    resConfirmNotesBody: "نحتفظ بالطاولة لمدة أقصاها 15 دقيقة بعد الوقت المحدد. للتعديل أو الإلغاء، يرجى الاتصال بنا هاتفياً أو عبر المساعد الافتراضي. في انتظاركم! 🍽️",
    resConfirmAnotherBtn: "إجراء حجز آخر",
    resFormTitle: "معلومات الاتصال",
    resFormName: "الاسم الكامل",
    resFormNamePlaceholder: "مثال: أحمد بن علي",
    resFormPhone: "رقم الهاتف",
    resFormPhonePlaceholder: "مثال: 56034046 216+",
    resFormEmail: "البريد الإلكتروني (اختياري)",
    resFormEmailPlaceholder: "مثال: ahmed@email.com",
    resFormDate: "التاريخ",
    resFormGuests: "عدد الضيوف",
    resFormPeopleLabel: "أشخاص",
    resFormPersonLabel: "شخص واحد",
    resFormTime: "الوقت",
    resFormSubmit: "تأكيد الحجز",
    resFormSubmitting: "جاري تأكيد الحجز...",
    resMapTitle: "خارطة المطعم",
    resMapSub: "اضغط على الطاولة لاختيارها",
    resMapSelected: "محددة",
    resMapAvailable: "شاغرة",
    resMapEntrance: "المدخل الرئيسي 🚪",
    resMapOven: "فرن الحطب 🔥",
    resMapSelectedTable: "الطاولة المحددة:",
    resMapPosition: "الموقع:",

    revBadge: "آراء ضيوفنا الكرام",
    revTitle: "ماذا يقولون عنا",
    revDesc: "رضا حرفائنا هو أفضل سر لنجاحنا. اقرأ التقييمات الحقيقية وشاركنا رأيك بكل صراحة.",
    revFormTitle: "أضف تقييمك",
    revFormName: "اسمك الكريم",
    revFormNamePlaceholder: "أدخل اسمك هنا",
    revFormRating: "التقييم",
    revFormComment: "تعليقك",
    revFormCommentPlaceholder: "اكتب هنا رأيك في أكلاتنا وخدماتنا بكل أمانة...",
    revFormSuccess: "تم نشر تقييمك بنجاح! يرحم والديك، حبيبي! ❤️",
    revFormSubmit: "إرسال التقييم",
    revFormEmpty: "لا توجد تقييمات حالياً. كن أول من يكتب تقييماً!",

    cartTitle: "سلة المشتريات",
    cartEmptyTitle: "سلتك فارغة حالياً",
    cartEmptyDesc: "أضف البيتزا اللذيذة أو السندوتشات التونسية الفواحة من القائمة لإتمام طلبك!",
    cartEmptyBtn: "العودة للقائمة",
    cartOrderTrackerTitle: "تم استلام طلبك بنجاح!",
    cartOrderTrackerId: "رمز الطلب",
    cartOrderProgressLabel: "حالة الطلب الحالية",
    cartOrderProgressTime: "الوقت المتبقي للتسليم:",
    cartStep1: "تم الاستلام",
    cartStep2: "قيد التحضير",
    cartStep3: "خرج للتوصيل",
    cartStep4: "تم التسليم",
    cartReceiptTitle: "تفاصيل الفاتورة",
    cartReceiptMethod: "طريقة الاستلام:",
    cartReceiptDeliveryFee: "تكلفة التوصيل:",
    cartReceiptTotal: "المجموع الإجمالي:",
    cartCloseAndClearBtn: "إغلاق وإفراغ السلة",
    cartAsportoBtn: "استلام من المطعم (تيك اواي)",
    cartConsegnaBtn: "توصيل للمنزل (+3.000 د.ت)",
    cartFormName: "اسمك الكريم",
    cartFormNamePlaceholder: "أدخل الاسم واللقب",
    cartFormPhone: "رقم الهاتف",
    cartFormPhonePlaceholder: "مثال: 56034046 216+",
    cartFormAddress: "عنوان التوصيل الكامل",
    cartFormAddressPlaceholder: "الشارع، رقم المنزل، الحي والمدينة",
    cartFormNotes: "ملاحظات للمطبخ أو عامل التوصيل",
    cartFormNotesPlaceholder: "مثال: بدون بصل، الطابق الثاني شقة 4...",
    cartCalcSubtotal: "مجموع السلة:",
    cartCalcDelivery: "معلوم التوصيل للبيت:",
    cartCalcTotal: "المجموع الجملي:",
    cartSubmitBtn: "تأكيد الطلب والدفع عند الاستلام",
    cartSubmittingBtn: "جاري إرسال الطلب...",

    footerDesc: "مرحباً بكم في ريستو ريان، الوجهة المفضلة لعشاق الأكلات التونسية الشعبية والبيتزا الغنية في المهدية. خبرة، جودة عالية ومكونات ممتازة مخبوزة في فرن الحطب في الحين.",
    footerTag1: "ذوق أصيل",
    footerTag2: "فخر تونسي",
    footerContactsTitle: "الاتصال والأوقات",
    footerHoursLabel: "من الاثنين إلى الأحد:",
    footerHoursValue: "12:00 - 14:00, 17:00 - 00:00",
    footerNavTitle: "تصفح الموقع",
    footerCopyright: "جميع الحقوق محفوظة.",
    footerMadeWith: "صُنع بكل",
    scrollToTopLabel: "الرجوع للأعلى"
  }
};
