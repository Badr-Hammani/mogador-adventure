/**
 * Language definitions + shared "chrome" strings (nav, buttons, footer, forms).
 *
 * Source of truth for the 5 languages is the design handoff's i18n.js; the
 * strings below are carried over verbatim where they existed and extended
 * where the production site needs more than the prototype did.
 */

export const LANGS = ["en", "fr", "es", "de", "ar"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export interface LangMeta {
  /** Native name shown in the language switcher. */
  name: string;
  dir: "ltr" | "rtl";
  /** Value for <html lang> and hreflang. */
  htmlLang: string;
  /** OpenGraph og:locale. */
  ogLocale: string;
}

export const LANG_META: Record<Lang, LangMeta> = {
  en: { name: "English", dir: "ltr", htmlLang: "en", ogLocale: "en_US" },
  fr: { name: "Français", dir: "ltr", htmlLang: "fr", ogLocale: "fr_FR" },
  es: { name: "Español", dir: "ltr", htmlLang: "es", ogLocale: "es_ES" },
  de: { name: "Deutsch", dir: "ltr", htmlLang: "de", ogLocale: "de_DE" },
  ar: { name: "العربية", dir: "rtl", htmlLang: "ar", ogLocale: "ar_MA" },
};

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}

export function dirFor(lang: Lang): "ltr" | "rtl" {
  return LANG_META[lang].dir;
}

/* ------------------------------------------------------------------ */
/* UI strings                                                          */
/* ------------------------------------------------------------------ */

export interface UIStrings {
  // nav
  nav_home: string;
  nav_activities: string;
  nav_packages: string;
  nav_about: string;
  nav_gallery: string;
  nav_blog: string;
  nav_faq: string;
  nav_contact: string;
  // hero + generic CTAs
  hero_title: string;
  hero_sub: string;
  hero_badge: string;
  cta_book: string;
  cta_activities: string;
  cta_whatsapp: string;
  cta_whatsapp_short: string;
  learn_more: string;
  view_all: string;
  from_price: string;
  per_person: string;
  duration: string;
  // home sections
  activities_kicker: string;
  activities_title: string;
  activities_intro: string;
  about_kicker: string;
  about_title: string;
  about_body: string;
  about_cta: string;
  gallery_kicker: string;
  gallery_title: string;
  gallery_cta: string;
  testimonials_kicker: string;
  testimonials_title: string;
  packages_kicker: string;
  packages_title: string;
  packages_intro: string;
  final_cta_title: string;
  final_cta_sub: string;
  // trust
  trust_title: string;
  trust_no_deposit: string;
  trust_no_deposit_sub: string;
  trust_cancel: string;
  trust_cancel_sub: string;
  trust_pickup: string;
  trust_pickup_sub: string;
  trust_local: string;
  trust_local_sub: string;
  trust_reply: string;
  // activity page
  whats_included: string;
  what_to_bring: string;
  prices_title: string;
  prices_note: string;
  book_this: string;
  related_title: string;
  activity_faq_title: string;
  meeting_point: string;
  meeting_point_body: string;
  // footer
  footer_tagline: string;
  footer_rights: string;
  footer_explore: string;
  footer_contact: string;
  footer_follow: string;
  // form
  form_title: string;
  form_name: string;
  form_email: string;
  form_activity: string;
  form_activity_placeholder: string;
  form_date: string;
  form_people: string;
  form_message: string;
  form_submit_wa: string;
  form_submit_email: string;
  form_required: string;
  form_invalid_email: string;
  form_hint: string;
  form_not_sure: string;
  // page headers
  faq_kicker: string;
  faq_title: string;
  faq_sub: string;
  blog_kicker: string;
  blog_title: string;
  blog_sub: string;
  blog_read: string;
  contact_kicker: string;
  contact_title: string;
  contact_sub: string;
  gallery_page_sub: string;
  // misc
  lang_label: string;
  skip_to_content: string;
  breadcrumb_home: string;
  reply_time: string;
  written_by: string;
  back_to_blog: string;
  still_questions: string;
  still_questions_sub: string;
}

export const UI: Record<Lang, UIStrings> = {
  /* ---------------------------- ENGLISH ---------------------------- */
  en: {
    nav_home: "Home",
    nav_activities: "Activities",
    nav_packages: "Packages",
    nav_about: "Our Story",
    nav_gallery: "Gallery",
    nav_blog: "Journal",
    nav_faq: "FAQ",
    nav_contact: "Book Now",

    hero_title: "Explore dunes, ocean & Moroccan flavors.",
    hero_sub:
      "Quad. Surf. Camel. Horse. Cooking. Yoga. One unforgettable Essaouira adventure.",
    hero_badge: "Essaouira, Morocco",
    cta_book: "Book Your Adventure",
    cta_activities: "See Activities",
    cta_whatsapp: "Message us on WhatsApp",
    cta_whatsapp_short: "WhatsApp",
    learn_more: "Learn more",
    view_all: "View all",
    from_price: "From",
    per_person: "per person",
    duration: "Duration",

    activities_kicker: "What we run",
    activities_title: "Six ways to feel Essaouira",
    activities_intro:
      "From golden dunes to Atlantic waves, discover Essaouira the way locals live it.",
    about_kicker: "Our story",
    about_title: "The real Essaouira — desert, ocean, forest",
    about_body:
      "Mogador Adventures was built by locals who grew up between these dunes and this ocean. We show you the Essaouira most visitors never see — desert to the east, Atlantic to the west, argan forest in between — and our team films every ride, wave and dinner so you leave with more than memories.",
    about_cta: "Meet the team",
    gallery_kicker: "From the field",
    gallery_title: "Moments from recent trips",
    gallery_cta: "See the full gallery",
    testimonials_kicker: "Happy travelers",
    testimonials_title: "What guests say",
    packages_kicker: "Better together",
    packages_title: "Combine two activities, save on both",
    packages_intro:
      "Most operators here run one activity. We run six — so we can build you a whole day, or a whole week, without you booking with four different people.",
    final_cta_title: "Ready for your Essaouira adventure?",
    final_cta_sub: "Message us and we'll help you build the perfect day.",

    trust_title: "Why book direct with us",
    trust_no_deposit: "No deposit",
    trust_no_deposit_sub: "Pay on the day, in cash or by card.",
    trust_cancel: "Free cancellation",
    trust_cancel_sub: "Up to 24 hours before departure.",
    trust_pickup: "Hotel pickup on request",
    trust_pickup_sub: "Available in Essaouira and Diabat — just ask.",
    trust_local: "Local guides",
    trust_local_sub: "Born here. Arabic, French, English spoken.",
    trust_reply: "We reply within 15 minutes, 8am–10pm",

    whats_included: "What's included",
    what_to_bring: "What to bring",
    prices_title: "Prices & durations",
    prices_note:
      "Prices are per quad — one machine, one or two riders — and include the guide, helmet and safety gear. Pickup available on request. Reservation required. Message us for group rates.",
    book_this: "Book this",
    related_title: "You might also like",
    activity_faq_title: "Questions about this activity",
    meeting_point: "Meeting point",
    meeting_point_body:
      "We pick you up from your riad, hotel or apartment anywhere in Essaouira or Diabat — just send us the address on WhatsApp when you book.",

    footer_tagline: "Explore dunes, ocean & Moroccan flavors.",
    footer_rights: "All rights reserved.",
    footer_explore: "Explore",
    footer_contact: "Contact",
    footer_follow: "Follow",

    form_title: "Tell us what you'd like to do",
    form_name: "Full name",
    form_email: "Email",
    form_activity: "Preferred activity",
    form_activity_placeholder: "Choose an activity",
    form_date: "Preferred date",
    form_people: "Number of people",
    form_message: "Anything we should know?",
    form_submit_wa: "Send via WhatsApp",
    form_submit_email: "Send via email",
    form_required: "This field is required",
    form_invalid_email: "Please enter a valid email address",
    form_hint:
      "Fill this in and it builds your WhatsApp message for you — or just message us directly, we don't mind.",
    form_not_sure: "Not sure yet",

    faq_kicker: "Good to know",
    faq_title: "Frequently asked questions",
    faq_sub:
      "Everything guests ask us before they book. If your question isn't here, WhatsApp us — we answer fast.",
    blog_kicker: "The journal",
    blog_title: "Stories from the coast",
    blog_sub:
      "Route notes, honest prices and local advice from the guides who ride these dunes every day.",
    blog_read: "Read more",
    contact_kicker: "Let's plan it",
    contact_title: "Book your adventure",
    contact_sub:
      "Real bookings happen over WhatsApp or a quick call — the form below opens one for you.",
    gallery_page_sub:
      "Real photos from real trips. We film and shoot every outing, so what you see here is what you'll actually do.",

    lang_label: "Language",
    skip_to_content: "Skip to content",
    breadcrumb_home: "Home",
    reply_time: "Typically replies in 15 minutes",
    written_by: "Written by",
    back_to_blog: "Back to the journal",
    still_questions: "Still have questions?",
    still_questions_sub: "Send us a message — a real guide answers, not a bot.",
  },

  /* ---------------------------- FRENCH ----------------------------- */
  fr: {
    nav_home: "Accueil",
    nav_activities: "Activités",
    nav_packages: "Forfaits",
    nav_about: "Notre histoire",
    nav_gallery: "Galerie",
    nav_blog: "Journal",
    nav_faq: "FAQ",
    nav_contact: "Réserver",

    hero_title: "Dunes, océan et saveurs marocaines à explorer.",
    hero_sub:
      "Quad. Surf. Chameau. Cheval. Cuisine. Yoga. Une aventure inoubliable à Essaouira.",
    hero_badge: "Essaouira, Maroc",
    cta_book: "Réservez votre aventure",
    cta_activities: "Voir les activités",
    cta_whatsapp: "Écrivez-nous sur WhatsApp",
    cta_whatsapp_short: "WhatsApp",
    learn_more: "En savoir plus",
    view_all: "Tout voir",
    from_price: "À partir de",
    per_person: "par personne",
    duration: "Durée",

    activities_kicker: "Nos activités",
    activities_title: "Six façons de vivre Essaouira",
    activities_intro:
      "Des dunes dorées aux vagues de l'Atlantique, découvrez Essaouira comme les habitants.",
    about_kicker: "Notre histoire",
    about_title: "La vraie Essaouira — désert, océan, forêt",
    about_body:
      "Mogador Adventures a été créé par des gens d'ici, qui ont grandi entre ces dunes et cet océan. Nous vous montrons l'Essaouira que la plupart des visiteurs ne voient jamais — le désert à l'est, l'Atlantique à l'ouest, la forêt d'arganiers entre les deux — et notre équipe filme chaque sortie, chaque vague et chaque dîner pour que vous repartiez avec plus que des souvenirs.",
    about_cta: "Rencontrer l'équipe",
    gallery_kicker: "Sur le terrain",
    gallery_title: "Instants de nos récentes sorties",
    gallery_cta: "Voir toute la galerie",
    testimonials_kicker: "Voyageurs conquis",
    testimonials_title: "Ce que disent nos clients",
    packages_kicker: "Mieux ensemble",
    packages_title: "Combinez deux activités, économisez sur les deux",
    packages_intro:
      "La plupart des agences ici ne proposent qu'une activité. Nous en proposons six — nous pouvons donc vous construire une journée entière, ou une semaine, sans que vous ayez à réserver auprès de quatre prestataires différents.",
    final_cta_title: "Prêt pour votre aventure à Essaouira ?",
    final_cta_sub: "Écrivez-nous et on construit votre journée parfaite.",

    trust_title: "Pourquoi réserver en direct",
    trust_no_deposit: "Sans acompte",
    trust_no_deposit_sub: "Payez le jour même, en espèces ou par carte.",
    trust_cancel: "Annulation gratuite",
    trust_cancel_sub: "Jusqu'à 24 heures avant le départ.",
    trust_pickup: "Transfert sur demande",
    trust_pickup_sub: "Disponible à Essaouira et à Diabat — demandez-le.",
    trust_local: "Guides locaux",
    trust_local_sub: "Nés ici. Arabe, français, anglais parlés.",
    trust_reply: "Nous répondons en 15 minutes, de 8h à 22h",

    whats_included: "Ce qui est inclus",
    what_to_bring: "À prévoir",
    prices_title: "Tarifs et durées",
    prices_note:
      "Tarifs par quad — une machine, un ou deux pilotes — guide, casque et équipement de sécurité inclus. Transfert possible sur demande. Réservation obligatoire. Écrivez-nous pour les tarifs groupes.",
    book_this: "Réserver",
    related_title: "Vous aimerez aussi",
    activity_faq_title: "Questions sur cette activité",
    meeting_point: "Point de rendez-vous",
    meeting_point_body:
      "Nous venons vous chercher à votre riad, hôtel ou appartement, partout à Essaouira ou à Diabat — envoyez-nous simplement l'adresse sur WhatsApp au moment de réserver.",

    footer_tagline: "Dunes, océan et saveurs marocaines à explorer.",
    footer_rights: "Tous droits réservés.",
    footer_explore: "Explorer",
    footer_contact: "Contact",
    footer_follow: "Suivez-nous",

    form_title: "Dites-nous ce qui vous tente",
    form_name: "Nom complet",
    form_email: "Email",
    form_activity: "Activité souhaitée",
    form_activity_placeholder: "Choisissez une activité",
    form_date: "Date souhaitée",
    form_people: "Nombre de personnes",
    form_message: "Un détail à nous signaler ?",
    form_submit_wa: "Envoyer via WhatsApp",
    form_submit_email: "Envoyer par email",
    form_required: "Ce champ est obligatoire",
    form_invalid_email: "Veuillez saisir une adresse email valide",
    form_hint:
      "Remplissez ce formulaire et il rédige votre message WhatsApp — ou écrivez-nous directement, ça nous va aussi.",
    form_not_sure: "Je ne sais pas encore",

    faq_kicker: "Bon à savoir",
    faq_title: "Questions fréquentes",
    faq_sub:
      "Tout ce que nos clients demandent avant de réserver. Si votre question n'y est pas, écrivez-nous sur WhatsApp — on répond vite.",
    blog_kicker: "Le journal",
    blog_title: "Histoires de la côte",
    blog_sub:
      "Notes de parcours, tarifs sans détour et conseils de guides qui roulent sur ces dunes tous les jours.",
    blog_read: "Lire la suite",
    contact_kicker: "Planifions ça",
    contact_title: "Réservez votre aventure",
    contact_sub:
      "Les réservations se font par WhatsApp ou par téléphone — ce formulaire en ouvre un pour vous.",
    gallery_page_sub:
      "De vraies photos de vraies sorties. Nous filmons et photographions chaque excursion : ce que vous voyez ici, c'est ce que vous ferez.",

    lang_label: "Langue",
    skip_to_content: "Aller au contenu",
    breadcrumb_home: "Accueil",
    reply_time: "Répond généralement en 15 minutes",
    written_by: "Écrit par",
    back_to_blog: "Retour au journal",
    still_questions: "D'autres questions ?",
    still_questions_sub:
      "Écrivez-nous — c'est un vrai guide qui répond, pas un robot.",
  },

  /* ---------------------------- SPANISH ---------------------------- */
  es: {
    nav_home: "Inicio",
    nav_activities: "Actividades",
    nav_packages: "Paquetes",
    nav_about: "Nuestra historia",
    nav_gallery: "Galería",
    nav_blog: "Diario",
    nav_faq: "Preguntas",
    nav_contact: "Reservar",

    hero_title: "Explora dunas, océano y sabores marroquíes.",
    hero_sub:
      "Quad. Surf. Camello. Caballo. Cocina. Yoga. Una aventura inolvidable en Essaouira.",
    hero_badge: "Essaouira, Marruecos",
    cta_book: "Reserva tu aventura",
    cta_activities: "Ver actividades",
    cta_whatsapp: "Escríbenos por WhatsApp",
    cta_whatsapp_short: "WhatsApp",
    learn_more: "Saber más",
    view_all: "Ver todo",
    from_price: "Desde",
    per_person: "por persona",
    duration: "Duración",

    activities_kicker: "Lo que ofrecemos",
    activities_title: "Seis formas de sentir Essaouira",
    activities_intro:
      "De dunas doradas a olas del Atlántico, descubre Essaouira como los locales.",
    about_kicker: "Nuestra historia",
    about_title: "La verdadera Essaouira — desierto, océano, bosque",
    about_body:
      "Mogador Adventures nació de gente de aquí, que creció entre estas dunas y este océano. Te enseñamos la Essaouira que la mayoría de visitantes nunca ve — desierto al este, Atlántico al oeste, bosque de argán en medio — y nuestro equipo graba cada ruta, cada ola y cada cena para que te lleves algo más que recuerdos.",
    about_cta: "Conoce al equipo",
    gallery_kicker: "Desde el terreno",
    gallery_title: "Momentos de viajes recientes",
    gallery_cta: "Ver toda la galería",
    testimonials_kicker: "Viajeros felices",
    testimonials_title: "Lo que dicen nuestros huéspedes",
    packages_kicker: "Mejor juntos",
    packages_title: "Combina dos actividades y ahorra en ambas",
    packages_intro:
      "Casi todas las agencias de aquí ofrecen una sola actividad. Nosotros ofrecemos seis — así podemos montarte un día entero, o una semana, sin que tengas que reservar con cuatro proveedores distintos.",
    final_cta_title: "¿Listo para tu aventura en Essaouira?",
    final_cta_sub: "Escríbenos y armamos tu día perfecto.",

    trust_title: "Por qué reservar directamente",
    trust_no_deposit: "Sin depósito",
    trust_no_deposit_sub: "Paga el mismo día, en efectivo o con tarjeta.",
    trust_cancel: "Cancelación gratuita",
    trust_cancel_sub: "Hasta 24 horas antes de la salida.",
    trust_pickup: "Recogida a petición",
    trust_pickup_sub: "Disponible en Essaouira y Diabat: solo pídelo.",
    trust_local: "Guías locales",
    trust_local_sub: "Nacidos aquí. Hablamos árabe, francés e inglés.",
    trust_reply: "Respondemos en 15 minutos, de 8:00 a 22:00",

    whats_included: "Qué incluye",
    what_to_bring: "Qué llevar",
    prices_title: "Precios y duraciones",
    prices_note:
      "Precios por quad — una máquina, uno o dos pilotos — con guía, casco y equipo de seguridad incluidos. Recogida disponible a petición. Reserva obligatoria. Escríbenos para tarifas de grupo.",
    book_this: "Reservar",
    related_title: "También te puede gustar",
    activity_faq_title: "Preguntas sobre esta actividad",
    meeting_point: "Punto de encuentro",
    meeting_point_body:
      "Te recogemos en tu riad, hotel o apartamento en cualquier punto de Essaouira o Diabat — solo mándanos la dirección por WhatsApp al reservar.",

    footer_tagline: "Explora dunas, océano y sabores marroquíes.",
    footer_rights: "Todos los derechos reservados.",
    footer_explore: "Explorar",
    footer_contact: "Contacto",
    footer_follow: "Síguenos",

    form_title: "Cuéntanos qué te apetece hacer",
    form_name: "Nombre completo",
    form_email: "Correo electrónico",
    form_activity: "Actividad preferida",
    form_activity_placeholder: "Elige una actividad",
    form_date: "Fecha preferida",
    form_people: "Número de personas",
    form_message: "¿Algo que debamos saber?",
    form_submit_wa: "Enviar por WhatsApp",
    form_submit_email: "Enviar por correo",
    form_required: "Este campo es obligatorio",
    form_invalid_email: "Introduce un correo electrónico válido",
    form_hint:
      "Rellénalo y te redacta el mensaje de WhatsApp — o escríbenos directamente, también nos vale.",
    form_not_sure: "Aún no lo sé",

    faq_kicker: "Bueno saberlo",
    faq_title: "Preguntas frecuentes",
    faq_sub:
      "Todo lo que nos preguntan antes de reservar. Si tu duda no está aquí, escríbenos por WhatsApp — contestamos rápido.",
    blog_kicker: "El diario",
    blog_title: "Historias de la costa",
    blog_sub:
      "Notas de ruta, precios sin rodeos y consejos de los guías que recorren estas dunas cada día.",
    blog_read: "Leer más",
    contact_kicker: "Planeémoslo",
    contact_title: "Reserva tu aventura",
    contact_sub:
      "Las reservas reales se hacen por WhatsApp o llamada — este formulario abre una por ti.",
    gallery_page_sub:
      "Fotos reales de salidas reales. Grabamos y fotografiamos cada excursión: lo que ves aquí es lo que vas a hacer.",

    lang_label: "Idioma",
    skip_to_content: "Ir al contenido",
    breadcrumb_home: "Inicio",
    reply_time: "Normalmente responde en 15 minutos",
    written_by: "Escrito por",
    back_to_blog: "Volver al diario",
    still_questions: "¿Te queda alguna duda?",
    still_questions_sub: "Escríbenos — responde un guía de verdad, no un bot.",
  },

  /* ---------------------------- GERMAN ----------------------------- */
  de: {
    nav_home: "Start",
    nav_activities: "Aktivitäten",
    nav_packages: "Pakete",
    nav_about: "Unsere Geschichte",
    nav_gallery: "Galerie",
    nav_blog: "Journal",
    nav_faq: "FAQ",
    nav_contact: "Jetzt buchen",

    hero_title: "Entdecke Dünen, Ozean und marokkanische Aromen.",
    hero_sub:
      "Quad. Surfen. Kamel. Pferd. Kochen. Yoga. Ein unvergessliches Abenteuer in Essaouira.",
    hero_badge: "Essaouira, Marokko",
    cta_book: "Abenteuer buchen",
    cta_activities: "Aktivitäten ansehen",
    cta_whatsapp: "Schreib uns auf WhatsApp",
    cta_whatsapp_short: "WhatsApp",
    learn_more: "Mehr erfahren",
    view_all: "Alle ansehen",
    from_price: "Ab",
    per_person: "pro Person",
    duration: "Dauer",

    activities_kicker: "Unser Angebot",
    activities_title: "Sechs Wege, Essaouira zu erleben",
    activities_intro:
      "Von goldenen Dünen bis zu Atlantikwellen — erlebe Essaouira wie die Einheimischen.",
    about_kicker: "Unsere Geschichte",
    about_title: "Das echte Essaouira — Wüste, Ozean, Wald",
    about_body:
      "Mogador Adventures wurde von Einheimischen gegründet, die zwischen diesen Dünen und diesem Ozean aufgewachsen sind. Wir zeigen dir das Essaouira, das die meisten Besucher nie sehen — Wüste im Osten, Atlantik im Westen, Arganwald dazwischen — und unser Team filmt jede Tour, jede Welle und jedes Abendessen, damit du mit mehr als nur Erinnerungen nach Hause fährst.",
    about_cta: "Team kennenlernen",
    gallery_kicker: "Vor Ort",
    gallery_title: "Momente aus letzten Touren",
    gallery_cta: "Ganze Galerie ansehen",
    testimonials_kicker: "Zufriedene Gäste",
    testimonials_title: "Das sagen unsere Gäste",
    packages_kicker: "Zusammen besser",
    packages_title: "Zwei Aktivitäten kombinieren, bei beiden sparen",
    packages_intro:
      "Die meisten Anbieter hier machen eine Aktivität. Wir machen sechs — so bauen wir dir einen ganzen Tag oder eine ganze Woche, ohne dass du bei vier verschiedenen Leuten buchen musst.",
    final_cta_title: "Bereit für dein Essaouira-Abenteuer?",
    final_cta_sub: "Schreib uns und wir planen deinen perfekten Tag.",

    trust_title: "Warum direkt bei uns buchen",
    trust_no_deposit: "Keine Anzahlung",
    trust_no_deposit_sub: "Zahlung am Tag selbst, bar oder mit Karte.",
    trust_cancel: "Kostenlose Stornierung",
    trust_cancel_sub: "Bis 24 Stunden vor Abfahrt.",
    trust_pickup: "Abholung auf Anfrage",
    trust_pickup_sub: "In Essaouira und Diabat möglich — einfach fragen.",
    trust_local: "Einheimische Guides",
    trust_local_sub: "Hier geboren. Arabisch, Französisch, Englisch.",
    trust_reply: "Wir antworten in 15 Minuten, 8–22 Uhr",

    whats_included: "Inklusive",
    what_to_bring: "Was mitbringen",
    prices_title: "Preise & Dauer",
    prices_note:
      "Preise pro Quad — eine Maschine, ein oder zwei Fahrer — inklusive Guide, Helm und Sicherheitsausrüstung. Abholung auf Anfrage. Reservierung erforderlich. Für Gruppenpreise schreib uns.",
    book_this: "Buchen",
    related_title: "Das könnte dir auch gefallen",
    activity_faq_title: "Fragen zu dieser Aktivität",
    meeting_point: "Treffpunkt",
    meeting_point_body:
      "Wir holen dich von deinem Riad, Hotel oder Apartment ab — überall in Essaouira oder Diabat. Schick uns beim Buchen einfach die Adresse per WhatsApp.",

    footer_tagline: "Entdecke Dünen, Ozean und marokkanische Aromen.",
    footer_rights: "Alle Rechte vorbehalten.",
    footer_explore: "Entdecken",
    footer_contact: "Kontakt",
    footer_follow: "Folgen",

    form_title: "Sag uns, worauf du Lust hast",
    form_name: "Vollständiger Name",
    form_email: "E-Mail",
    form_activity: "Bevorzugte Aktivität",
    form_activity_placeholder: "Aktivität wählen",
    form_date: "Bevorzugtes Datum",
    form_people: "Anzahl Personen",
    form_message: "Sonst noch etwas?",
    form_submit_wa: "Über WhatsApp senden",
    form_submit_email: "Per E-Mail senden",
    form_required: "Dieses Feld ist erforderlich",
    form_invalid_email: "Bitte gib eine gültige E-Mail-Adresse ein",
    form_hint:
      "Ausfüllen und das Formular schreibt deine WhatsApp-Nachricht — oder schreib uns einfach direkt, auch gut.",
    form_not_sure: "Weiß ich noch nicht",

    faq_kicker: "Gut zu wissen",
    faq_title: "Häufige Fragen",
    faq_sub:
      "Alles, was Gäste vor der Buchung fragen. Steht deine Frage nicht dabei — schreib uns auf WhatsApp, wir antworten schnell.",
    blog_kicker: "Das Journal",
    blog_title: "Geschichten von der Küste",
    blog_sub:
      "Routennotizen, ehrliche Preise und Tipps von Guides, die diese Dünen jeden Tag fahren.",
    blog_read: "Weiterlesen",
    contact_kicker: "Los geht's",
    contact_title: "Buche dein Abenteuer",
    contact_sub:
      "Echte Buchungen laufen über WhatsApp oder Anruf — dieses Formular öffnet dir eins.",
    gallery_page_sub:
      "Echte Fotos von echten Touren. Wir filmen und fotografieren jede Ausfahrt — was du hier siehst, machst du auch.",

    lang_label: "Sprache",
    skip_to_content: "Zum Inhalt springen",
    breadcrumb_home: "Start",
    reply_time: "Antwortet meist in 15 Minuten",
    written_by: "Geschrieben von",
    back_to_blog: "Zurück zum Journal",
    still_questions: "Noch Fragen?",
    still_questions_sub:
      "Schreib uns — es antwortet ein echter Guide, kein Bot.",
  },

  /* ---------------------------- ARABIC ----------------------------- */
  ar: {
    nav_home: "الرئيسية",
    nav_activities: "الأنشطة",
    nav_packages: "العروض",
    nav_about: "قصتنا",
    nav_gallery: "معرض الصور",
    nav_blog: "المدونة",
    nav_faq: "الأسئلة الشائعة",
    nav_contact: "احجز الآن",

    hero_title: "استكشف الكثبان والمحيط ونكهات المغرب.",
    hero_sub:
      "دراجة رباعية. ركوب الأمواج. الجمال. الخيل. الطبخ. اليوغا. مغامرة لا تُنسى في الصويرة.",
    hero_badge: "الصويرة، المغرب",
    cta_book: "احجز مغامرتك",
    cta_activities: "شاهد الأنشطة",
    cta_whatsapp: "راسلنا على واتساب",
    cta_whatsapp_short: "واتساب",
    learn_more: "المزيد",
    view_all: "عرض الكل",
    from_price: "ابتداءً من",
    per_person: "للشخص",
    duration: "المدة",

    activities_kicker: "ماذا ننظّم",
    activities_title: "ست طرق لتعيش الصويرة",
    activities_intro:
      "من الكثبان الذهبية إلى أمواج الأطلسي، اكتشف الصويرة كما يعيشها أهلها.",
    about_kicker: "قصتنا",
    about_title: "الصويرة الحقيقية — صحراء ومحيط وغابة",
    about_body:
      "تأسست Mogador Adventures على يد أبناء المدينة الذين نشأوا بين هذه الكثبان وهذا المحيط. نعرّفك على الصويرة التي لا يراها معظم الزوار — الصحراء شرقاً، والأطلسي غرباً، وغابة الأركان بينهما — وفريقنا يصوّر كل جولة وكل موجة وكل عشاء لتعود بأكثر من مجرد ذكريات.",
    about_cta: "تعرّف على الفريق",
    gallery_kicker: "من الميدان",
    gallery_title: "لحظات من رحلات أخيرة",
    gallery_cta: "شاهد المعرض كاملاً",
    testimonials_kicker: "مسافرون سعداء",
    testimonials_title: "ماذا يقول ضيوفنا",
    packages_kicker: "معاً أفضل",
    packages_title: "اجمع نشاطين ووفّر في الاثنين",
    packages_intro:
      "معظم الوكالات هنا تقدّم نشاطاً واحداً. نحن نقدّم ستة — لذا يمكننا أن نبني لك يوماً كاملاً، أو أسبوعاً كاملاً، دون أن تحجز مع أربعة أشخاص مختلفين.",
    final_cta_title: "مستعد لمغامرتك في الصويرة؟",
    final_cta_sub: "راسلنا وسنساعدك على تنظيم يومك المثالي.",

    trust_title: "لماذا تحجز معنا مباشرة",
    trust_no_deposit: "بدون عربون",
    trust_no_deposit_sub: "ادفع يوم الرحلة، نقداً أو بالبطاقة.",
    trust_cancel: "إلغاء مجاني",
    trust_cancel_sub: "حتى 24 ساعة قبل الانطلاق.",
    trust_pickup: "التوصيل عند الطلب",
    trust_pickup_sub: "متاح في الصويرة وديابات — اطلبه فقط.",
    trust_local: "مرشدون محليون",
    trust_local_sub: "وُلدوا هنا. العربية والفرنسية والإنجليزية.",
    trust_reply: "نردّ خلال 15 دقيقة، من 8 صباحاً إلى 10 مساءً",

    whats_included: "ما يشمله السعر",
    what_to_bring: "ما تحتاج إحضاره",
    prices_title: "الأسعار والمدد",
    prices_note:
      "الأسعار لكل دراجة — آلة واحدة بسائق أو سائقَين — وتشمل المرشد والخوذة ومعدات السلامة. التوصيل متاح عند الطلب. الحجز المسبق مطلوب. راسلنا لأسعار المجموعات.",
    book_this: "احجز",
    related_title: "قد يعجبك أيضاً",
    activity_faq_title: "أسئلة حول هذا النشاط",
    meeting_point: "نقطة اللقاء",
    meeting_point_body:
      "نأتي لأخذك من الرياض أو الفندق أو الشقة في أي مكان بالصويرة أو ديابات — فقط أرسل لنا العنوان على واتساب عند الحجز.",

    footer_tagline: "استكشف الكثبان والمحيط ونكهات المغرب.",
    footer_rights: "جميع الحقوق محفوظة.",
    footer_explore: "استكشف",
    footer_contact: "اتصل بنا",
    footer_follow: "تابعنا",

    form_title: "أخبرنا بما تودّ فعله",
    form_name: "الاسم الكامل",
    form_email: "البريد الإلكتروني",
    form_activity: "النشاط المفضل",
    form_activity_placeholder: "اختر نشاطاً",
    form_date: "التاريخ المفضل",
    form_people: "عدد الأشخاص",
    form_message: "هل هناك ما يجب أن نعرفه؟",
    form_submit_wa: "أرسل عبر واتساب",
    form_submit_email: "أرسل عبر البريد",
    form_required: "هذا الحقل مطلوب",
    form_invalid_email: "الرجاء إدخال بريد إلكتروني صحيح",
    form_hint:
      "املأ النموذج وسيكتب لك رسالة واتساب جاهزة — أو راسلنا مباشرة، لا مشكلة.",
    form_not_sure: "لم أقرر بعد",

    faq_kicker: "معلومة مفيدة",
    faq_title: "الأسئلة الشائعة",
    faq_sub:
      "كل ما يسألنا عنه الضيوف قبل الحجز. إن لم تجد سؤالك، راسلنا على واتساب — نردّ بسرعة.",
    blog_kicker: "المدونة",
    blog_title: "حكايات من الساحل",
    blog_sub:
      "ملاحظات عن المسارات وأسعار صريحة ونصائح من مرشدين يجوبون هذه الكثبان يومياً.",
    blog_read: "اقرأ المزيد",
    contact_kicker: "لنخطط لذلك",
    contact_title: "احجز مغامرتك",
    contact_sub:
      "الحجوزات الحقيقية تتم عبر واتساب أو مكالمة سريعة — هذا النموذج يفتح لك واحدة.",
    gallery_page_sub:
      "صور حقيقية من رحلات حقيقية. نصوّر كل خرجة — ما تراه هنا هو ما ستعيشه.",

    lang_label: "اللغة",
    skip_to_content: "انتقل إلى المحتوى",
    breadcrumb_home: "الرئيسية",
    reply_time: "يردّ عادة خلال 15 دقيقة",
    written_by: "بقلم",
    back_to_blog: "العودة إلى المدونة",
    still_questions: "لديك أسئلة أخرى؟",
    still_questions_sub: "راسلنا — يردّ عليك مرشد حقيقي، لا روبوت.",
  },
};

export function t(lang: Lang): UIStrings {
  return UI[lang] ?? UI[DEFAULT_LANG];
}
