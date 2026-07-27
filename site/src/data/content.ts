/**
 * Shared page content: testimonials, general FAQ, team, about story, gallery
 * slots. Everything here is per-language; English is the fallback.
 */

import type { Lang } from "../lib/i18n";
import { DEFAULT_LANG } from "../lib/i18n";

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: Partial<Record<Lang, string>>;
  name: string;
  origin: Partial<Record<Lang, string>>;
  rating: number;
  activity: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Lena K.",
    rating: 5,
    activity: "quad",
    quote: {
      en: "Our guide knew every dune and every wave. Best day of the whole trip.",
      fr: "Notre guide connaissait chaque dune et chaque vague. La meilleure journÃ©e de tout le sÃ©jour.",
      es: "Nuestro guÃ­a se conocÃ­a cada duna y cada ola. El mejor dÃ­a de todo el viaje.",
      de: "Unser Guide kannte jede DÃ¼ne und jede Welle. Der beste Tag der ganzen Reise.",
      ar: "ÙƒØ§Ù† Ù…Ø±Ø´Ø¯Ù†Ø§ ÙŠØ¹Ø±Ù ÙƒÙ„ ÙƒØ«ÙŠØ¨ ÙˆÙƒÙ„ Ù…ÙˆØ¬Ø©. Ø£ÙØ¶Ù„ ÙŠÙˆÙ… ÙÙŠ Ø§Ù„Ø±Ø­Ù„Ø© ÙƒÙ„Ù‡Ø§.",
    },
    origin: {
      en: "Berlin, Germany",
      fr: "Berlin, Allemagne",
      es: "BerlÃ­n, Alemania",
      de: "Berlin, Deutschland",
      ar: "Ø¨Ø±Ù„ÙŠÙ†ØŒ Ø£Ù„Ù…Ø§Ù†ÙŠØ§",
    },
  },
  {
    name: "Marco R.",
    rating: 5,
    activity: "quad",
    quote: {
      en: "Booked through Instagram DM and it was seamless â€” quad biking then a home-cooked tagine.",
      fr: "RÃ©servÃ© par message Instagram, tout s'est fait sans accroc â€” quad puis tajine fait maison.",
      es: "ReservÃ© por mensaje de Instagram y fue todo rodado: quad y luego un tajine casero.",
      de: "Per Instagram-DM gebucht, lief vÃ¶llig reibungslos â€” Quad-Tour und danach eine selbstgekochte Tajine.",
      ar: "Ø­Ø¬Ø²Øª Ø¹Ø¨Ø± Ø±Ø³Ø§Ù„Ø© Ø¥Ù†Ø³ØªØºØ±Ø§Ù… ÙˆÙƒØ§Ù† ÙƒÙ„ Ø´ÙŠØ¡ Ø³Ù„Ø³Ø§Ù‹ â€” Ø¬ÙˆÙ„Ø© ÙƒÙˆØ§Ø¯ Ø«Ù… Ø·Ø§Ø¬ÙŠÙ† Ù…Ù†Ø²Ù„ÙŠ.",
    },
    origin: {
      en: "Milan, Italy",
      fr: "Milan, Italie",
      es: "MilÃ¡n, Italia",
      de: "Mailand, Italien",
      ar: "Ù…ÙŠÙ„Ø§Ù†ÙˆØŒ Ø¥ÙŠØ·Ø§Ù„ÙŠØ§",
    },
  },
  {
    name: "Amara O.",
    rating: 5,
    activity: "surf",
    quote: {
      en: "Surf lesson in the morning, sunset yoga after. Felt like locals, not tourists.",
      fr: "Cours de surf le matin, yoga au coucher du soleil ensuite. On s'est sentis d'ici, pas touristes.",
      es: "Clase de surf por la maÃ±ana y yoga al atardecer. Nos sentimos locales, no turistas.",
      de: "Morgens Surfstunde, danach Yoga zum Sonnenuntergang. Man fÃ¼hlte sich wie ein Einheimischer.",
      ar: "Ø¯Ø±Ø³ Ø³ÙŠØ±Ù ØµØ¨Ø§Ø­Ø§Ù‹ ÙˆÙŠÙˆØºØ§ Ø¹Ù†Ø¯ Ø§Ù„ØºØ±ÙˆØ¨ Ø¨Ø¹Ø¯Ù‡. Ø´Ø¹Ø±Ù†Ø§ Ø£Ù†Ù†Ø§ Ù…Ù† Ø£Ù‡Ù„ Ø§Ù„Ù…ÙƒØ§Ù† Ù„Ø§ Ø³ÙŠÙ‘Ø§Ø­.",
    },
    origin: {
      en: "Lagos, Nigeria",
      fr: "Lagos, Nigeria",
      es: "Lagos, Nigeria",
      de: "Lagos, Nigeria",
      ar: "Ù„Ø§ØºÙˆØ³ØŒ Ù†ÙŠØ¬ÙŠØ±ÙŠØ§",
    },
  },
];

export function testimonialText(t: Testimonial, lang: Lang) {
  return {
    quote: t.quote[lang] ?? t.quote[DEFAULT_LANG] ?? "",
    origin: t.origin[lang] ?? t.origin[DEFAULT_LANG] ?? "",
  };
}

/* ------------------------------------------------------------------ */
/* General FAQ                                                         */
/* ------------------------------------------------------------------ */

export interface FaqEntry {
  q: Partial<Record<Lang, string>>;
  a: Partial<Record<Lang, string>>;
}

export const GENERAL_FAQ: FaqEntry[] = [
  {
    q: {
      en: "How do I book?",
      fr: "Comment rÃ©server ?",
      es: "Â¿CÃ³mo reservo?",
      de: "Wie buche ich?",
      ar: "ÙƒÙŠÙ Ø£Ø­Ø¬Ø²ØŸ",
    },
    a: {
      en: "Message us on WhatsApp or Instagram and tell us what you'd like to do and roughly when. We confirm availability, agree a time and pickup point, and that's it. The booking form on this site simply builds that WhatsApp message for you.",
      fr: "Ã‰crivez-nous sur WhatsApp ou Instagram en nous disant ce qui vous tente et Ã  peu prÃ¨s quand. Nous confirmons les disponibilitÃ©s, convenons d'une heure et d'un point de rendez-vous, et c'est rÃ©glÃ©. Le formulaire de ce site rÃ©dige simplement ce message WhatsApp pour vous.",
      es: "EscrÃ­benos por WhatsApp o Instagram diciÃ©ndonos quÃ© te apetece hacer y mÃ¡s o menos cuÃ¡ndo. Confirmamos disponibilidad, acordamos hora y punto de recogida, y ya estÃ¡. El formulario de esta web simplemente te redacta ese mensaje.",
      de: "Schreib uns auf WhatsApp oder Instagram, was du machen mÃ¶chtest und ungefÃ¤hr wann. Wir bestÃ¤tigen die VerfÃ¼gbarkeit, vereinbaren Uhrzeit und Abholpunkt, fertig. Das Formular auf dieser Seite schreibt dir diese WhatsApp-Nachricht einfach vor.",
      ar: "Ø±Ø§Ø³Ù„Ù†Ø§ Ø¹Ù„Ù‰ ÙˆØ§ØªØ³Ø§Ø¨ Ø£Ùˆ Ø¥Ù†Ø³ØªØºØ±Ø§Ù… ÙˆØ£Ø®Ø¨Ø±Ù†Ø§ Ø¨Ù…Ø§ ØªÙˆØ¯Ù‘ ÙØ¹Ù„Ù‡ ÙˆÙ…ØªÙ‰ ØªÙ‚Ø±ÙŠØ¨Ø§Ù‹. Ù†Ø¤ÙƒØ¯ Ø§Ù„ØªÙˆÙØ± ÙˆÙ†ØªÙÙ‚ Ø¹Ù„Ù‰ Ø§Ù„ÙˆÙ‚Øª ÙˆÙ†Ù‚Ø·Ø© Ø§Ù„Ø§Ù„ØªÙ‚Ø§Ø¡ØŒ ÙˆÙ‡Ø°Ø§ ÙƒÙ„ Ø´ÙŠØ¡. Ù†Ù…ÙˆØ°Ø¬ Ø§Ù„Ø­Ø¬Ø² ÙÙŠ Ù‡Ø°Ø§ Ø§Ù„Ù…ÙˆÙ‚Ø¹ ÙŠÙƒØªØ¨ Ù„Ùƒ Ø±Ø³Ø§Ù„Ø© Ø§Ù„ÙˆØ§ØªØ³Ø§Ø¨ ÙÙ‚Ø·.",
    },
  },
  {
    q: {
      en: "Can I book same-day or just walk in?",
      fr: "Peut-on rÃ©server le jour mÃªme ou venir sans rÃ©server ?",
      es: "Â¿Puedo reservar el mismo dÃ­a o presentarme sin mÃ¡s?",
      de: "Kann ich am selben Tag buchen oder einfach vorbeikommen?",
      ar: "Ù‡Ù„ ÙŠÙ…ÙƒÙ† Ø§Ù„Ø­Ø¬Ø² ÙÙŠ Ø§Ù„ÙŠÙˆÙ… Ù†ÙØ³Ù‡ Ø£Ùˆ Ø§Ù„Ø­Ø¶ÙˆØ± Ù…Ø¨Ø§Ø´Ø±Ø©ØŸ",
    },
    a: {
      en: "Often yes, especially outside July and August. Message us and we'll tell you straight away what's free today. Sunset departures are the ones that fill first, so for those give us a day's notice if you can.",
      fr: "Souvent oui, surtout hors juillet et aoÃ»t. Ã‰crivez-nous et nous vous dirons tout de suite ce qui est libre aujourd'hui. Les dÃ©parts au coucher du soleil partent en premier : prÃ©venez-nous idÃ©alement la veille.",
      es: "A menudo sÃ­, sobre todo fuera de julio y agosto. EscrÃ­benos y te decimos al momento quÃ© hay libre hoy. Las salidas de atardecer se llenan primero, asÃ­ que para esas avisa con un dÃ­a si puedes.",
      de: "Oft ja, besonders auÃŸerhalb von Juli und August. Schreib uns und wir sagen dir sofort, was heute frei ist. Sonnenuntergangstouren sind zuerst ausgebucht â€” dafÃ¼r am besten einen Tag vorher Bescheid geben.",
      ar: "ØºØ§Ù„Ø¨Ø§Ù‹ Ù†Ø¹Ù…ØŒ Ø®ØµÙˆØµØ§Ù‹ Ø®Ø§Ø±Ø¬ ÙŠÙˆÙ„ÙŠÙˆØ² ÙˆØºØ´Øª. Ø±Ø§Ø³Ù„Ù†Ø§ ÙˆØ³Ù†Ø®Ø¨Ø±Ùƒ ÙÙˆØ±Ø§Ù‹ Ø¨Ù…Ø§ Ù‡Ùˆ Ù…ØªØ§Ø­ Ø§Ù„ÙŠÙˆÙ…. Ø¬ÙˆÙ„Ø§Øª Ø§Ù„ØºØ±ÙˆØ¨ ØªÙØ­Ø¬Ø² Ø£ÙˆÙ„Ø§Ù‹ØŒ ÙÙŠÙÙØ¶Ù‘Ù„ Ø¥Ø®Ø¨Ø§Ø±Ù†Ø§ Ù‚Ø¨Ù„ ÙŠÙˆÙ….",
    },
  },
  {
    q: {
      en: "Do I need to pay a deposit?",
      fr: "Faut-il verser un acompte ?",
      es: "Â¿Hay que pagar depÃ³sito?",
      de: "Muss ich eine Anzahlung leisten?",
      ar: "Ù‡Ù„ ÙŠØ¬Ø¨ Ø¯ÙØ¹ Ø¹Ø±Ø¨ÙˆÙ†ØŸ",
    },
    a: {
      en: "No. For almost every booking you pay on the day, in cash or by card. Larger groups (eight people or more) and multi-day packages may need a small deposit, and we'll say so clearly when you book â€” never as a surprise.",
      fr: "Non. Pour presque toutes les rÃ©servations, vous payez le jour mÃªme, en espÃ¨ces ou par carte. Les grands groupes (huit personnes et plus) et les forfaits sur plusieurs jours peuvent demander un petit acompte, et nous vous le dirons clairement Ã  la rÃ©servation â€” jamais en surprise.",
      es: "No. En casi todas las reservas pagas el mismo dÃ­a, en efectivo o con tarjeta. Los grupos grandes (ocho personas o mÃ¡s) y los paquetes de varios dÃ­as pueden requerir un pequeÃ±o depÃ³sito, y te lo diremos claramente al reservar.",
      de: "Nein. Bei fast allen Buchungen zahlst du am Tag selbst, bar oder mit Karte. GrÃ¶ÃŸere Gruppen (ab acht Personen) und mehrtÃ¤gige Pakete brauchen eventuell eine kleine Anzahlung â€” das sagen wir bei der Buchung klar, nie als Ãœberraschung.",
      ar: "Ù„Ø§. ÙÙŠ Ù…Ø¹Ø¸Ù… Ø§Ù„Ø­Ø¬ÙˆØ²Ø§Øª ØªØ¯ÙØ¹ ÙŠÙˆÙ… Ø§Ù„Ø¬ÙˆÙ„Ø©ØŒ Ù†Ù‚Ø¯Ø§Ù‹ Ø£Ùˆ Ø¨Ø§Ù„Ø¨Ø·Ø§Ù‚Ø©. Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø§Øª Ø§Ù„ÙƒØ¨ÙŠØ±Ø© (Ø«Ù…Ø§Ù†ÙŠØ© Ø£Ø´Ø®Ø§Øµ ÙØ£ÙƒØ«Ø±) ÙˆØ§Ù„Ø¹Ø±ÙˆØ¶ Ù…ØªØ¹Ø¯Ø¯Ø© Ø§Ù„Ø£ÙŠØ§Ù… Ù‚Ø¯ ØªØªØ·Ù„Ø¨ Ø¹Ø±Ø¨ÙˆÙ†Ø§Ù‹ ØµØºÙŠØ±Ø§Ù‹ØŒ ÙˆØ³Ù†Ø®Ø¨Ø±Ùƒ Ø¨Ø°Ù„Ùƒ Ø¨ÙˆØ¶ÙˆØ­ Ø¹Ù†Ø¯ Ø§Ù„Ø­Ø¬Ø².",
    },
  },
  {
    q: {
      en: "What should I bring?",
      fr: "Que dois-je apporter ?",
      es: "Â¿QuÃ© debo llevar?",
      de: "Was soll ich mitbringen?",
      ar: "Ù…Ø§Ø°Ø§ Ø£Ø­Ø¶Ø± Ù…Ø¹ÙŠØŸ",
    },
    a: {
      en: "Comfortable clothes you don't mind getting sandy, closed shoes, sun protection and water. All the equipment â€” quads, boards, wetsuits, helmets, mats, cooking gear â€” is provided. Each activity page has its own specific list.",
      fr: "Des vÃªtements confortables que le sable ne gÃªnera pas, des chaussures fermÃ©es, une protection solaire et de l'eau. Tout l'Ã©quipement â€” quads, planches, combinaisons, casques, tapis, matÃ©riel de cuisine â€” est fourni. Chaque page d'activitÃ© a sa liste prÃ©cise.",
      es: "Ropa cÃ³moda que no te importe que se llene de arena, calzado cerrado, protecciÃ³n solar y agua. Todo el equipo â€”quads, tablas, neoprenos, cascos, esterillas, utensiliosâ€” va incluido. Cada pÃ¡gina de actividad tiene su lista concreta.",
      de: "Bequeme Kleidung, die sandig werden darf, geschlossene Schuhe, Sonnenschutz und Wasser. Die gesamte AusrÃ¼stung â€” Quads, Boards, NeoprenanzÃ¼ge, Helme, Matten, Kochutensilien â€” wird gestellt. Jede AktivitÃ¤tsseite hat ihre eigene Liste.",
      ar: "Ù…Ù„Ø§Ø¨Ø³ Ù…Ø±ÙŠØ­Ø© Ù„Ø§ ÙŠØ¶ÙŠØ±Ùƒ Ø£Ù† ÙŠØ¹Ù„Ù‚ Ø¨Ù‡Ø§ Ø§Ù„Ø±Ù…Ù„ØŒ ÙˆØ­Ø°Ø§Ø¡ Ù…ØºÙ„Ù‚ØŒ ÙˆÙˆØ§Ù‚ÙŠ Ø´Ù…Ø³ØŒ ÙˆÙ…Ø§Ø¡. ÙƒÙ„ Ø§Ù„Ù…Ø¹Ø¯Ø§Øª â€” Ø§Ù„Ø¯Ø±Ø§Ø¬Ø§Øª ÙˆØ§Ù„Ø£Ù„ÙˆØ§Ø­ ÙˆØ§Ù„Ø¨Ø¯Ù„Ø§Øª ÙˆØ§Ù„Ø®ÙˆØ°Ø§Øª ÙˆØ§Ù„Ø­ØµØ§Ø¦Ø± ÙˆØ£Ø¯ÙˆØ§Øª Ø§Ù„Ø·Ø¨Ø® â€” Ù…ØªÙˆÙØ±Ø© Ù„Ø¯ÙŠÙ†Ø§. Ù„ÙƒÙ„ ØµÙØ­Ø© Ù†Ø´Ø§Ø· Ù‚Ø§Ø¦Ù…ØªÙ‡Ø§ Ø§Ù„Ø®Ø§ØµØ©.",
    },
  },
  {
    q: {
      en: "Are your activities suitable for beginners?",
      fr: "Vos activitÃ©s conviennent-elles aux dÃ©butants ?",
      es: "Â¿Son adecuadas para principiantes?",
      de: "Sind eure AktivitÃ¤ten fÃ¼r AnfÃ¤nger geeignet?",
      ar: "Ù‡Ù„ Ø£Ù†Ø´Ø·ØªÙƒÙ… Ù…Ù†Ø§Ø³Ø¨Ø© Ù„Ù„Ù…Ø¨ØªØ¯Ø¦ÙŠÙ†ØŸ",
    },
    a: {
      en: "Yes â€” all six are coached and every one of them runs regularly with complete beginners. Quads are automatic and need no licence, surf lessons start in whitewater, horses are matched to your riding, and yoga and cooking assume nothing at all.",
      fr: "Oui â€” les six activitÃ©s sont encadrÃ©es et toutes accueillent rÃ©guliÃ¨rement de grands dÃ©butants. Les quads sont automatiques et ne demandent aucun permis, les cours de surf commencent dans la mousse, les chevaux sont choisis selon votre niveau, et le yoga comme la cuisine ne supposent aucun prÃ©requis.",
      es: "SÃ­ â€” las seis son guiadas y todas se hacen habitualmente con principiantes totales. Los quads son automÃ¡ticos y no requieren carnet, el surf empieza en la espuma, los caballos se asignan segÃºn cÃ³mo montes, y el yoga y la cocina no dan nada por supuesto.",
      de: "Ja â€” alle sechs werden betreut und laufen regelmÃ¤ÃŸig mit kompletten AnfÃ¤ngern. Quads sind Automatik und brauchen keinen FÃ¼hrerschein, Surfkurse starten im WeiÃŸwasser, Pferde werden nach KÃ¶nnen zugeteilt, und Yoga und Kochen setzen gar nichts voraus.",
      ar: "Ù†Ø¹Ù… â€” Ø§Ù„Ø£Ù†Ø´Ø·Ø© Ø§Ù„Ø³ØªØ© ÙƒÙ„Ù‡Ø§ Ù…Ø¤Ø·ÙŽÙ‘Ø±Ø© ÙˆØªÙÙ†Ø¸ÙŽÙ‘Ù… Ø¨Ø§Ù†ØªØ¸Ø§Ù… Ù…Ø¹ Ù…Ø¨ØªØ¯Ø¦ÙŠÙ† ØªÙ…Ø§Ù…Ø§Ù‹. Ø§Ù„Ø¯Ø±Ø§Ø¬Ø§Øª Ø£ÙˆØªÙˆÙ…Ø§ØªÙŠÙƒÙŠØ© ÙˆÙ„Ø§ ØªØ­ØªØ§Ø¬ Ø±Ø®ØµØ©ØŒ ÙˆØ¯Ø±ÙˆØ³ Ø§Ù„Ø³ÙŠØ±Ù ØªØ¨Ø¯Ø£ ÙÙŠ Ø§Ù„Ø²Ø¨Ø¯ØŒ ÙˆØ§Ù„Ø®ÙŠÙ„ ØªÙØ®ØªØ§Ø± Ø­Ø³Ø¨ Ù…Ø³ØªÙˆØ§ÙƒØŒ ÙˆØ§Ù„ÙŠÙˆØºØ§ ÙˆØ§Ù„Ø·Ø¨Ø® Ù„Ø§ ÙŠÙØªØ±Ø¶Ø§Ù† Ø£ÙŠ Ø®Ø¨Ø±Ø©.",
    },
  },
  {
    q: {
      en: "Do you pick up from my hotel?",
      fr: "Venez-vous me chercher Ã  mon hÃ´tel ?",
      es: "Â¿RecogÃ©is en el hotel?",
      de: "Holt ihr mich vom Hotel ab?",
      ar: "Ù‡Ù„ ØªØ£ØªÙˆÙ† Ù„Ø£Ø®Ø°ÙŠ Ù…Ù† Ø§Ù„ÙÙ†Ø¯Ù‚ØŸ",
    },
    a: {
      en: "Yes, and it's included â€” anywhere in Essaouira or Diabat. Send us the riad, hotel or apartment address on WhatsApp when you book. If you're staying further out, tell us where and we'll quote the transfer.",
      fr: "Oui, et c'est inclus â€” partout Ã  Essaouira ou Ã  Diabat. Envoyez-nous l'adresse du riad, de l'hÃ´tel ou de l'appartement sur WhatsApp au moment de rÃ©server. Si vous logez plus loin, dites-nous oÃ¹ et nous vous chiffrons le transfert.",
      es: "SÃ­, y va incluido â€” en cualquier punto de Essaouira o Diabat. MÃ¡ndanos por WhatsApp la direcciÃ³n del riad, hotel o apartamento al reservar. Si te alojas mÃ¡s lejos, dinos dÃ³nde y te presupuestamos el traslado.",
      de: "Ja, und es ist inklusive â€” Ã¼berall in Essaouira oder Diabat. Schick uns beim Buchen die Adresse von Riad, Hotel oder Apartment per WhatsApp. Wenn du weiter drauÃŸen wohnst, sag uns wo, dann nennen wir dir den Preis fÃ¼r den Transfer.",
      ar: "Ù†Ø¹Ù…ØŒ ÙˆÙ‡Ùˆ Ù…Ø´Ù…ÙˆÙ„ â€” ÙÙŠ Ø£ÙŠ Ù…ÙƒØ§Ù† Ø¨Ø§Ù„ØµÙˆÙŠØ±Ø© Ø£Ùˆ Ø¯ÙŠØ§Ø¨Ø§Øª. Ø£Ø±Ø³Ù„ Ù„Ù†Ø§ Ø¹Ù†ÙˆØ§Ù† Ø§Ù„Ø±ÙŠØ§Ø¶ Ø£Ùˆ Ø§Ù„ÙÙ†Ø¯Ù‚ Ø£Ùˆ Ø§Ù„Ø´Ù‚Ø© Ø¹Ù„Ù‰ ÙˆØ§ØªØ³Ø§Ø¨ Ø¹Ù†Ø¯ Ø§Ù„Ø­Ø¬Ø². ÙˆØ¥Ù† ÙƒÙ†Øª ØªÙ‚ÙŠÙ… Ø£Ø¨Ø¹Ø¯ØŒ Ø£Ø®Ø¨Ø±Ù†Ø§ Ø¨Ø§Ù„Ù…ÙƒØ§Ù† ÙˆØ³Ù†Ø­Ø¯Ø¯ Ù„Ùƒ Ø³Ø¹Ø± Ø§Ù„Ù†Ù‚Ù„.",
    },
  },
  {
    q: {
      en: "What languages do your guides speak?",
      fr: "Quelles langues parlent vos guides ?",
      es: "Â¿QuÃ© idiomas hablan los guÃ­as?",
      de: "Welche Sprachen sprechen eure Guides?",
      ar: "Ù…Ø§ Ø§Ù„Ù„ØºØ§Øª Ø§Ù„ØªÙŠ ÙŠØªØ­Ø¯Ø«Ù‡Ø§ Ù…Ø±Ø´Ø¯ÙˆÙƒÙ…ØŸ",
    },
    a: {
      en: "Every guide speaks Arabic, French and English as a minimum. Several also speak Spanish or German, and Darija of course. Tell us your preferred language when you book and we'll match you.",
      fr: "Chaque guide parle au minimum arabe, franÃ§ais et anglais. Plusieurs parlent aussi espagnol ou allemand, et le darija bien sÃ»r. Indiquez votre langue prÃ©fÃ©rÃ©e Ã  la rÃ©servation et nous vous attribuerons le bon guide.",
      es: "Todos los guÃ­as hablan como mÃ­nimo Ã¡rabe, francÃ©s e inglÃ©s. Varios hablan tambiÃ©n espaÃ±ol o alemÃ¡n, y dariya por supuesto. Dinos tu idioma preferido al reservar y te asignamos el adecuado.",
      de: "Jeder Guide spricht mindestens Arabisch, FranzÃ¶sisch und Englisch. Mehrere sprechen auÃŸerdem Spanisch oder Deutsch, und natÃ¼rlich Darija. Sag uns bei der Buchung deine Wunschsprache.",
      ar: "ÙƒÙ„ Ù…Ø±Ø´Ø¯ ÙŠØªØ­Ø¯Ø« Ø§Ù„Ø¹Ø±Ø¨ÙŠØ© ÙˆØ§Ù„ÙØ±Ù†Ø³ÙŠØ© ÙˆØ§Ù„Ø¥Ù†Ø¬Ù„ÙŠØ²ÙŠØ© ÙƒØ­Ø¯ Ø£Ø¯Ù†Ù‰. ÙˆØ¨Ø¹Ø¶Ù‡Ù… ÙŠØªØ­Ø¯Ø« Ø§Ù„Ø¥Ø³Ø¨Ø§Ù†ÙŠØ© Ø£Ùˆ Ø§Ù„Ø£Ù„Ù…Ø§Ù†ÙŠØ©ØŒ ÙˆØ§Ù„Ø¯Ø§Ø±Ø¬Ø© Ø¨Ø§Ù„Ø·Ø¨Ø¹. Ø£Ø®Ø¨Ø±Ù†Ø§ Ø¨Ù„ØºØªÙƒ Ø§Ù„Ù…ÙØ¶Ù„Ø© Ø¹Ù†Ø¯ Ø§Ù„Ø­Ø¬Ø² ÙˆØ³Ù†ÙˆÙØ± Ù„Ùƒ Ø§Ù„Ù…Ø±Ø´Ø¯ Ø§Ù„Ù…Ù†Ø§Ø³Ø¨.",
    },
  },
  {
    q: {
      en: "What's your cancellation policy?",
      fr: "Quelle est votre politique d'annulation ?",
      es: "Â¿CuÃ¡l es la polÃ­tica de cancelaciÃ³n?",
      de: "Wie ist eure Stornierungsregelung?",
      ar: "Ù…Ø§ Ø³ÙŠØ§Ø³Ø© Ø§Ù„Ø¥Ù„ØºØ§Ø¡ Ù„Ø¯ÙŠÙƒÙ…ØŸ",
    },
    a: {
      en: "Free cancellation up to 24 hours before departure, no questions and no fee. If we cancel because of weather â€” rare, but it happens with surf and yoga â€” you reschedule free or pay nothing at all.",
      fr: "Annulation gratuite jusqu'Ã  24 heures avant le dÃ©part, sans justification et sans frais. Si c'est nous qui annulons pour cause de mÃ©tÃ©o â€” rare, mais cela arrive pour le surf et le yoga â€” vous reprogrammez gratuitement ou ne payez rien.",
      es: "CancelaciÃ³n gratuita hasta 24 horas antes de la salida, sin preguntas ni cargos. Si cancelamos nosotros por el tiempo â€”poco frecuente, pero pasa con surf y yogaâ€” cambias de fecha gratis o no pagas nada.",
      de: "Kostenlose Stornierung bis 24 Stunden vor Abfahrt, ohne Nachfragen und ohne GebÃ¼hr. Wenn wir wetterbedingt absagen â€” selten, kommt aber bei Surfen und Yoga vor â€” verschiebst du kostenlos oder zahlst gar nichts.",
      ar: "Ø§Ù„Ø¥Ù„ØºØ§Ø¡ Ù…Ø¬Ø§Ù†ÙŠ Ø­ØªÙ‰ 24 Ø³Ø§Ø¹Ø© Ù‚Ø¨Ù„ Ø§Ù„Ø§Ù†Ø·Ù„Ø§Ù‚ØŒ Ø¨Ù„Ø§ Ø£Ø³Ø¦Ù„Ø© ÙˆØ¨Ù„Ø§ Ø±Ø³ÙˆÙ…. ÙˆØ¥Ù† Ø£Ù„ØºÙŠÙ†Ø§ Ù†Ø­Ù† Ø¨Ø³Ø¨Ø¨ Ø§Ù„Ø·Ù‚Ø³ â€” ÙˆÙ‡Ùˆ Ù†Ø§Ø¯Ø± Ù„ÙƒÙ†Ù‡ ÙŠØ­Ø¯Ø« Ù…Ø¹ Ø§Ù„Ø³ÙŠØ±Ù ÙˆØ§Ù„ÙŠÙˆØºØ§ â€” ØªØ¹ÙŠØ¯ Ø§Ù„Ø¬Ø¯ÙˆÙ„Ø© Ù…Ø¬Ø§Ù†Ø§Ù‹ Ø£Ùˆ Ù„Ø§ ØªØ¯ÙØ¹ Ø´ÙŠØ¦Ø§Ù‹ Ø¥Ø·Ù„Ø§Ù‚Ø§Ù‹.",
    },
  },
];

export function faqText(entry: FaqEntry, lang: Lang) {
  return {
    q: entry.q[lang] ?? entry.q[DEFAULT_LANG] ?? "",
    a: entry.a[lang] ?? entry.a[DEFAULT_LANG] ?? "",
  };
}

/* ------------------------------------------------------------------ */
/* About page                                                          */
/* ------------------------------------------------------------------ */

export const ABOUT_STORY: Partial<Record<Lang, string[]>> = {
  en: [
    "Mogador Adventures started with a simple idea: show visitors the Essaouira we grew up in, not a postcard version of it. Our founders are locals â€” surfers, quad guides, and home cooks â€” who've spent years running these dunes, riding these waves and cooking in these kitchens for friends and family.",
    "Essaouira sits where three landscapes meet: the Sahara-fringed dunes to the south, the open Atlantic on its doorstep, and the argan forest just inland. Most trips only see one. We built Mogador Adventures to move between all three in a single visit â€” a quad run through the dunes at sunset, a surf lesson at sunrise, a horseback ride through the forest, a cooking class with a local family.",
    "Every guide on our team grew up here. We book almost entirely through Instagram DMs and WhatsApp because that's how our guests find us â€” through real photos and video from real trips, not stock imagery. Our team films and photographs every outing so you leave with more than a memory.",
  ],
  fr: [
    "Mogador Adventures est nÃ© d'une idÃ©e simple : montrer aux visiteurs l'Essaouira dans laquelle nous avons grandi, pas sa version carte postale. Nos fondateurs sont d'ici â€” surfeurs, guides quad et cuisiniers de famille â€” et ils passent leurs journÃ©es depuis des annÃ©es sur ces dunes, sur ces vagues et dans ces cuisines, pour leurs proches d'abord.",
    "Essaouira se trouve Ã  la rencontre de trois paysages : les dunes bordÃ©es de Sahara au sud, l'Atlantique ouvert Ã  sa porte, et la forÃªt d'arganiers juste Ã  l'intÃ©rieur des terres. La plupart des sÃ©jours n'en voient qu'un. Nous avons crÃ©Ã© Mogador Adventures pour circuler entre les trois en une seule visite â€” une sortie quad dans les dunes au coucher du soleil, un cours de surf au lever du jour, une balade Ã  cheval en forÃªt, un cours de cuisine chez une famille d'ici.",
    "Chaque guide de notre Ã©quipe a grandi ici. Nous rÃ©servons presque exclusivement par messages Instagram et WhatsApp, parce que c'est comme Ã§a que nos clients nous trouvent â€” par de vraies photos et de vraies vidÃ©os de vraies sorties, pas des images de banque. Notre Ã©quipe filme et photographie chaque excursion pour que vous repartiez avec plus qu'un souvenir.",
  ],
  es: [
    "Mogador Adventures naciÃ³ de una idea sencilla: enseÃ±ar a los visitantes la Essaouira en la que crecimos, no su versiÃ³n de postal. Nuestros fundadores son de aquÃ­ â€” surfistas, guÃ­as de quad y cocineros de casa â€” y llevan aÃ±os recorriendo estas dunas, surfeando estas olas y cocinando en estas cocinas, primero para los suyos.",
    "Essaouira estÃ¡ donde se juntan tres paisajes: las dunas que anuncian el SÃ¡hara al sur, el AtlÃ¡ntico abierto en su puerta y el bosque de argÃ¡n justo tierra adentro. Casi todos los viajes ven solo uno. Creamos Mogador Adventures para movernos entre los tres en una sola visita.",
    "Todos los guÃ­as del equipo crecieron aquÃ­. Reservamos casi todo por mensajes de Instagram y WhatsApp porque asÃ­ es como nos encuentran nuestros huÃ©spedes: con fotos y vÃ­deos reales de salidas reales, no con imÃ¡genes de banco. Grabamos y fotografiamos cada excursiÃ³n para que te lleves algo mÃ¡s que un recuerdo.",
  ],
  de: [
    "Mogador Adventures begann mit einer einfachen Idee: Besuchern das Essaouira zu zeigen, in dem wir aufgewachsen sind â€” nicht die Postkartenversion davon. Unsere GrÃ¼nder sind von hier: Surfer, Quad-Guides und HauskÃ¶che, die seit Jahren diese DÃ¼nen fahren, diese Wellen reiten und in diesen KÃ¼chen fÃ¼r Freunde und Familie kochen.",
    "Essaouira liegt dort, wo drei Landschaften aufeinandertreffen: die von der Sahara gesÃ¤umten DÃ¼nen im SÃ¼den, der offene Atlantik vor der TÃ¼r und der Arganwald gleich im Landesinneren. Die meisten Reisen sehen nur eine davon. Wir haben Mogador Adventures gebaut, um in einem einzigen Aufenthalt zwischen allen dreien zu wechseln.",
    "Jeder Guide in unserem Team ist hier aufgewachsen. Wir buchen fast ausschlieÃŸlich Ã¼ber Instagram-DMs und WhatsApp, weil unsere GÃ¤ste uns so finden â€” Ã¼ber echte Fotos und Videos von echten Touren, nicht Ã¼ber Stockmaterial. Wir filmen und fotografieren jede Ausfahrt, damit du mit mehr als einer Erinnerung nach Hause fÃ¤hrst.",
  ],
  ar: [
    "Ø¨Ø¯Ø£Øª Mogador Adventures Ø¨ÙÙƒØ±Ø© Ø¨Ø³ÙŠØ·Ø©: Ø£Ù† Ù†ÙØ±ÙŠ Ø§Ù„Ø²ÙˆØ§Ø± Ø§Ù„ØµÙˆÙŠØ±Ø© Ø§Ù„ØªÙŠ Ù†Ø´Ø£Ù†Ø§ ÙÙŠÙ‡Ø§ØŒ Ù„Ø§ Ù†Ø³Ø®ØªÙ‡Ø§ Ø§Ù„Ø¨Ø±ÙŠØ¯ÙŠØ©. Ù…Ø¤Ø³Ø³ÙˆÙ†Ø§ Ù…Ù† Ø£Ù‡Ù„ Ø§Ù„Ù…Ø¯ÙŠÙ†Ø© â€” Ø±Ø§ÙƒØ¨Ùˆ Ø£Ù…ÙˆØ§Ø¬ ÙˆÙ…Ø±Ø´Ø¯Ùˆ ÙƒÙˆØ§Ø¯ ÙˆØ·Ù‡Ø§Ø© Ø¨ÙŠÙˆØª â€” Ù‚Ø¶ÙˆØ§ Ø³Ù†ÙˆØ§Øª ÙÙˆÙ‚ Ù‡Ø°Ù‡ Ø§Ù„ÙƒØ«Ø¨Ø§Ù† ÙˆÙÙˆÙ‚ Ù‡Ø°Ù‡ Ø§Ù„Ø£Ù…ÙˆØ§Ø¬ ÙˆÙÙŠ Ù‡Ø°Ù‡ Ø§Ù„Ù…Ø·Ø§Ø¨Ø®ØŒ Ù„Ø£Ù‡Ù„Ù‡Ù… ÙˆØ£ØµØ¯Ù‚Ø§Ø¦Ù‡Ù… Ø£ÙˆÙ„Ø§Ù‹.",
    "ØªÙ‚Ø¹ Ø§Ù„ØµÙˆÙŠØ±Ø© Ø­ÙŠØ« ØªÙ„ØªÙ‚ÙŠ Ø«Ù„Ø§Ø«Ø© Ù…Ø´Ø§Ù‡Ø¯: Ø§Ù„ÙƒØ«Ø¨Ø§Ù† Ø§Ù„Ù…ØªØ§Ø®Ù…Ø© Ù„Ù„ØµØ­Ø±Ø§Ø¡ Ø¬Ù†ÙˆØ¨Ø§Ù‹ØŒ ÙˆØ§Ù„Ø£Ø·Ù„Ø³ÙŠ Ø§Ù„Ù…ÙØªÙˆØ­ Ø¹Ù†Ø¯ Ø¨Ø§Ø¨Ù‡Ø§ØŒ ÙˆØºØ§Ø¨Ø© Ø§Ù„Ø£Ø±ÙƒØ§Ù† ÙÙŠ Ø§Ù„Ø¯Ø§Ø®Ù„ Ø§Ù„Ù‚Ø±ÙŠØ¨. Ù…Ø¹Ø¸Ù… Ø§Ù„Ø±Ø­Ù„Ø§Øª Ù„Ø§ ØªØ±Ù‰ Ø¥Ù„Ø§ ÙˆØ§Ø­Ø¯Ø§Ù‹ Ù…Ù†Ù‡Ø§. Ø£Ù†Ø´Ø£Ù†Ø§ Mogador Adventures Ù„Ù„ØªÙ†Ù‚Ù„ Ø¨ÙŠÙ† Ø§Ù„Ø«Ù„Ø§Ø«Ø© ÙÙŠ Ø²ÙŠØ§Ø±Ø© ÙˆØ§Ø­Ø¯Ø©.",
    "ÙƒÙ„ Ù…Ø±Ø´Ø¯ ÙÙŠ ÙØ±ÙŠÙ‚Ù†Ø§ Ù†Ø´Ø£ Ù‡Ù†Ø§. Ù†Ø­Ø¬Ø² ØªÙ‚Ø±ÙŠØ¨Ø§Ù‹ Ø¨Ø§Ù„ÙƒØ§Ù…Ù„ Ø¹Ø¨Ø± Ø±Ø³Ø§Ø¦Ù„ Ø¥Ù†Ø³ØªØºØ±Ø§Ù… ÙˆÙˆØ§ØªØ³Ø§Ø¨ØŒ Ù„Ø£Ù† Ø¶ÙŠÙˆÙÙ†Ø§ ÙŠØ¬Ø¯ÙˆÙ†Ù†Ø§ Ù‡ÙƒØ°Ø§ â€” Ø¨ØµÙˆØ± ÙˆÙÙŠØ¯ÙŠÙˆÙ‡Ø§Øª Ø­Ù‚ÙŠÙ‚ÙŠØ© Ù…Ù† Ø±Ø­Ù„Ø§Øª Ø­Ù‚ÙŠÙ‚ÙŠØ©ØŒ Ù„Ø§ ØµÙˆØ± Ø¬Ø§Ù‡Ø²Ø©. Ù†ØµÙˆÙ‘Ø± ÙƒÙ„ Ø®Ø±Ø¬Ø© Ù„ØªØ¹ÙˆØ¯ Ø¨Ø£ÙƒØ«Ø± Ù…Ù† Ù…Ø¬Ø±Ø¯ Ø°ÙƒØ±Ù‰.",
  ],
};

export interface TeamMember {
  name: string;
  role: Partial<Record<Lang, string>>;
  bio: Partial<Record<Lang, string>>;
  /** Square-cropped portrait in src/assets/photos, or null for a placeholder. */
  photo: string | null;
}

export const TEAM: TeamMember[] = [
  {
    name: "Youssef",
    photo: "guide-youssef-quad-sunset-essaouira.jpg",
    role: {
      en: "Founder & quad guide",
      fr: "Fondateur et guide quad",
      es: "Fundador y guÃ­a de quad",
      de: "GrÃ¼nder und Quad-Guide",
      ar: "Ø§Ù„Ù…Ø¤Ø³Ø³ ÙˆÙ…Ø±Ø´Ø¯ Ø§Ù„ÙƒÙˆØ§Ø¯",
    },
    bio: {
      en: "Grew up in Diabat and has been riding the dune belt since he was a teenager. Leads most of the sunset quad tours and knows which line through the sand works on any given day.",
      fr: "A grandi Ã  Diabat et roule sur le cordon dunaire depuis l'adolescence. Il mÃ¨ne la plupart des sorties quad au coucher du soleil et sait quelle trace tient le sable selon le jour.",
      es: "CreciÃ³ en Diabat y lleva recorriendo el cordÃ³n de dunas desde adolescente. GuÃ­a casi todas las salidas de quad al atardecer y sabe quÃ© trazada aguanta cada dÃ­a.",
      de: "Ist in Diabat aufgewachsen und fÃ¤hrt den DÃ¼nengÃ¼rtel seit seiner Jugend. Er fÃ¼hrt die meisten Sonnenuntergangstouren und weiÃŸ, welche Linie durch den Sand an welchem Tag trÃ¤gt.",
      ar: "Ù†Ø´Ø£ ÙÙŠ Ø¯ÙŠØ§Ø¨Ø§Øª ÙˆÙŠØ¬ÙˆØ¨ Ø­Ø²Ø§Ù… Ø§Ù„ÙƒØ«Ø¨Ø§Ù† Ù…Ù†Ø° Ù…Ø±Ø§Ù‡Ù‚ØªÙ‡. ÙŠÙ‚ÙˆØ¯ Ù…Ø¹Ø¸Ù… Ø¬ÙˆÙ„Ø§Øª Ø§Ù„ÙƒÙˆØ§Ø¯ Ø¹Ù†Ø¯ Ø§Ù„ØºØ±ÙˆØ¨ ÙˆÙŠØ¹Ø±Ù Ø£ÙŠ Ù…Ø³Ø§Ø± ÙÙŠ Ø§Ù„Ø±Ù…Ù„ ÙŠØµÙ„Ø­ ÙÙŠ ÙƒÙ„ ÙŠÙˆÙ….",
    },
  },
  {
    // No portrait supplied yet.
    name: "Salma",
    photo: null,
    role: {
      en: "Surf instructor",
      fr: "Monitrice de surf",
      es: "Monitora de surf",
      de: "Surflehrerin",
      ar: "Ù…Ø¯Ø±Ù‘Ø¨Ø© Ø±ÙƒÙˆØ¨ Ø£Ù…ÙˆØ§Ø¬",
    },
    bio: {
      en: "Surfs Essaouira's break every day of the year and teaches beginners with more patience than anyone we know. Also runs the sunrise yoga sessions.",
      fr: "Surfe le spot d'Essaouira tous les jours de l'annÃ©e et enseigne aux dÃ©butants avec une patience rare. Elle anime aussi les sÃ©ances de yoga au lever du soleil.",
      es: "Surfea el pico de Essaouira todos los dÃ­as del aÃ±o y enseÃ±a a principiantes con una paciencia poco comÃºn. TambiÃ©n lleva las sesiones de yoga al amanecer.",
      de: "Surft Essaouiras Break an jedem Tag des Jahres und unterrichtet AnfÃ¤nger mit mehr Geduld als jede andere Person, die wir kennen. Leitet auÃŸerdem die Yoga-Sessions bei Sonnenaufgang.",
      ar: "ØªØ±ÙƒØ¨ Ù…ÙˆØ¬ Ø§Ù„ØµÙˆÙŠØ±Ø© ÙƒÙ„ ÙŠÙˆÙ… ÙÙŠ Ø§Ù„Ø³Ù†Ø© ÙˆØªÙØ¹Ù„Ù‘Ù… Ø§Ù„Ù…Ø¨ØªØ¯Ø¦ÙŠÙ† Ø¨ØµØ¨Ø± Ù†Ø§Ø¯Ø±. ØªØ´Ø±Ù Ø£ÙŠØ¶Ø§Ù‹ Ø¹Ù„Ù‰ Ø­ØµØµ Ø§Ù„ÙŠÙˆØºØ§ Ø¹Ù†Ø¯ Ø§Ù„Ø´Ø±ÙˆÙ‚.",
    },
  },
  {
    // No portrait supplied yet.
    name: "Hassan",
    photo: null,
    role: {
      en: "Cooking host",
      fr: "HÃ´te cuisine",
      es: "AnfitriÃ³n de cocina",
      de: "Koch-Gastgeber",
      ar: "Ù…Ø¶ÙŠÙ Ø§Ù„Ø·Ø¨Ø®",
    },
    bio: {
      en: "Opens his family kitchen for the cooking classes and does the market run himself. His mother's tagine recipe is the one you'll be making.",
      fr: "Ouvre la cuisine familiale pour les cours et fait le marchÃ© lui-mÃªme. C'est la recette de tajine de sa mÃ¨re que vous prÃ©parerez.",
      es: "Abre la cocina de su familia para las clases y hace Ã©l mismo la compra. La receta de tajine que prepararÃ¡s es la de su madre.",
      de: "Ã–ffnet seine FamilienkÃ¼che fÃ¼r die Kochkurse und geht selbst auf den Markt. Das Tajine-Rezept, das du kochst, ist das seiner Mutter.",
      ar: "ÙŠÙØªØ­ Ù…Ø·Ø¨Ø® Ø¹Ø§Ø¦Ù„ØªÙ‡ Ù„Ø¯Ø±ÙˆØ³ Ø§Ù„Ø·Ø¨Ø® ÙˆÙŠØªØ³ÙˆÙ‘Ù‚ Ø¨Ù†ÙØ³Ù‡ Ù…Ù† Ø§Ù„Ø³ÙˆÙ‚. ÙˆØµÙØ© Ø§Ù„Ø·Ø§Ø¬ÙŠÙ† Ø§Ù„ØªÙŠ Ø³ØªÙØ¹Ø¯Ù‘Ù‡Ø§ Ù‡ÙŠ ÙˆØµÙØ© ÙˆØ§Ù„Ø¯ØªÙ‡.",
    },
  },
];

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export interface GallerySlot {
  /** Filename in src/assets/photos, or null while we await client photos. */
  photo: string | null;
  /** Alt text / placeholder brief â€” doubles as the shot list for the photographer. */
  label: Partial<Record<Lang, string>>;
  portrait?: boolean;
}

export const GALLERY: GallerySlot[] = [
  {
    photo: "quad-sunset-riders-atlantic-essaouira.jpg",
    portrait: true,
    label: {
      en: "Riders watching the sun go into the Atlantic from the dunes",
      fr: "Pilotes regardant le soleil plonger dans l'Atlantique depuis les dunes",
      es: "Pilotos viendo caer el sol en el AtlÃ¡ntico desde las dunas",
      de: "Fahrer sehen von den DÃ¼nen aus die Sonne im Atlantik versinken",
      ar: "Ø³Ø§Ø¦Ù‚ÙˆÙ† ÙŠØ´Ø§Ù‡Ø¯ÙˆÙ† Ø§Ù„Ø´Ù…Ø³ ØªØºÙŠØ¨ ÙÙŠ Ø§Ù„Ø£Ø·Ù„Ø³ÙŠ Ù…Ù† ÙÙˆÙ‚ Ø§Ù„ÙƒØ«Ø¨Ø§Ù†",
    },
  },
  {
    photo: "quad-convoy-dunes-essaouira.jpg",
    label: {
      en: "Quad convoy lined up on the dune belt",
      fr: "Convoi de quads alignÃ© sur le cordon dunaire",
      es: "Convoy de quads alineado en el cordÃ³n de dunas",
      de: "Quad-Konvoi auf dem DÃ¼nengÃ¼rtel",
      ar: "Ù‚Ø§ÙÙ„Ø© ÙƒÙˆØ§Ø¯ Ù…ØµØ·ÙØ© Ø¹Ù„Ù‰ Ø­Ø²Ø§Ù… Ø§Ù„ÙƒØ«Ø¨Ø§Ù†",
    },
  },
  {
    photo: "camel-train-beach-essaouira.jpg",
    label: {
      en: "Camel train crossing the beach at low tide",
      fr: "Caravane de chameaux traversant la plage Ã  marÃ©e basse",
      es: "Caravana de camellos cruzando la playa con marea baja",
      de: "Kamelkarawane am Strand bei Ebbe",
      ar: "Ù‚Ø§ÙÙ„Ø© Ø¬Ù…Ø§Ù„ ØªØ¹Ø¨Ø± Ø§Ù„Ø´Ø§Ø·Ø¦ Ø¹Ù†Ø¯ Ø§Ù„Ø¬Ø²Ø±",
    },
  },
  {
    photo: "quad-sunset-silhouette-dune-essaouira.jpg",
    label: {
      en: "Silhouette on the dune crest at sunset",
      fr: "Silhouette sur la crÃªte d'une dune au coucher du soleil",
      es: "Silueta en la cresta de la duna al atardecer",
      de: "Silhouette auf dem DÃ¼nenkamm bei Sonnenuntergang",
      ar: "Ø¸Ù„Ù‘ Ø¹Ù„Ù‰ Ù‚Ù…Ø© Ø§Ù„ÙƒØ«ÙŠØ¨ Ø¹Ù†Ø¯ Ø§Ù„ØºØ±ÙˆØ¨",
    },
  },
  {
    photo: "horseback-riding-beach-essaouira.jpg",
    portrait: true,
    label: {
      en: "Horseback riders on the beach south of Diabat",
      fr: "Cavaliers sur la plage au sud de Diabat",
      es: "Jinetes en la playa al sur de Diabat",
      de: "Reiter am Strand sÃ¼dlich von Diabat",
      ar: "ÙØ±Ø³Ø§Ù† Ø¹Ù„Ù‰ Ø§Ù„Ø´Ø§Ø·Ø¦ Ø¬Ù†ÙˆØ¨ Ø¯ÙŠØ§Ø¨Ø§Øª",
    },
  },
  {
    photo: "quad-argan-forest-track-essaouira.jpg",
    label: {
      en: "Threading the argan forest track inland",
      fr: "Sur la piste de la forÃªt d'arganiers, Ã  l'intÃ©rieur des terres",
      es: "Por la pista del bosque de argÃ¡n tierra adentro",
      de: "Auf dem Arganwald-Pfad im Landesinneren",
      ar: "Ø¹Ù„Ù‰ Ù…Ø³Ø§Ø± ØºØ§Ø¨Ø© Ø§Ù„Ø£Ø±ÙƒØ§Ù† ÙÙŠ Ø§Ù„Ø¯Ø§Ø®Ù„",
    },
  },
  {
    photo: "group-quad-tour-beach-essaouira.jpg",
    label: {
      en: "A full group at the end of a beach run",
      fr: "Un groupe complet Ã  la fin d'une sortie sur la plage",
      es: "Un grupo entero al final de una ruta por la playa",
      de: "Eine ganze Gruppe am Ende einer Strandtour",
      ar: "Ù…Ø¬Ù…ÙˆØ¹Ø© ÙƒØ§Ù…Ù„Ø© ÙÙŠ Ù†Ù‡Ø§ÙŠØ© Ø¬ÙˆÙ„Ø© Ø´Ø§Ø·Ø¦ÙŠØ©",
    },
  },
  {
    photo: "dune-belt-sunset-essaouira.jpg",
    label: {
      en: "The dune belt at last light",
      fr: "Le cordon dunaire aux derniÃ¨res lueurs",
      es: "El cordÃ³n de dunas con la Ãºltima luz",
      de: "Der DÃ¼nengÃ¼rtel im letzten Licht",
      ar: "Ø­Ø²Ø§Ù… Ø§Ù„ÙƒØ«Ø¨Ø§Ù† Ø¹Ù†Ø¯ Ø¢Ø®Ø± Ø§Ù„Ø¶ÙˆØ¡",
    },
  },
  {
    photo: "quad-far-dunes-essaouira.jpg",
    label: {
      en: "Out on the far dunes, half-day route",
      fr: "Sur les dunes lointaines, parcours demi-journÃ©e",
      es: "En las dunas lejanas, ruta de medio dÃ­a",
      de: "Auf den fernen DÃ¼nen, Halbtagesroute",
      ar: "ÙÙŠ Ø§Ù„ÙƒØ«Ø¨Ø§Ù† Ø§Ù„Ø¨Ø¹ÙŠØ¯Ø©ØŒ Ù…Ø³Ø§Ø± Ù†ØµÙ ÙŠÙˆÙ…",
    },
  },
  {
    photo: "guide-youssef-quad-sunset-essaouira.jpg",
    portrait: true,
    label: {
      en: "One of our guides at the end of a sunset run",
      fr: "L'un de nos guides Ã  la fin d'une sortie au coucher du soleil",
      es: "Uno de nuestros guÃ­as al final de una salida al atardecer",
      de: "Einer unserer Guides nach einer Sonnenuntergangstour",
      ar: "Ø£Ø­Ø¯ Ù…Ø±Ø´Ø¯ÙŠÙ†Ø§ ÙÙŠ Ù†Ù‡Ø§ÙŠØ© Ø¬ÙˆÙ„Ø© Ø§Ù„ØºØ±ÙˆØ¨",
    },
  },
  {
    photo: "atlantic-beach-sunrise-essaouira.jpg",
    label: {
      en: "Tyre tracks on the wet sand at first light",
      fr: "Traces de pneus sur le sable mouillÃ© aux premiÃ¨res lueurs",
      es: "Huellas de neumÃ¡ticos en la arena mojada al amanecer",
      de: "Reifenspuren im nassen Sand im ersten Licht",
      ar: "Ø¢Ø«Ø§Ø± Ø§Ù„Ø¹Ø¬Ù„Ø§Øª Ø¹Ù„Ù‰ Ø§Ù„Ø±Ù…Ù„ Ø§Ù„Ù…Ø¨Ù„Ù„ Ø¹Ù†Ø¯ Ø£ÙˆÙ„ Ø§Ù„Ø¶ÙˆØ¡",
    },
  },
  {
    photo: "quad-fleet-beach-essaouira.jpg",
    label: {
      en: "Our fleet, cleaned and fuelled before a departure",
      fr: "Notre parc, nettoyÃ© et plein fait avant un dÃ©part",
      es: "Nuestra flota, limpia y repostada antes de una salida",
      de: "Unsere Flotte, gereinigt und getankt vor der Abfahrt",
      ar: "Ø£Ø³Ø·ÙˆÙ„Ù†Ø§ØŒ Ù†Ø¸ÙŠÙ ÙˆÙ…Ø¹Ø¨Ø£ Ø¨Ø§Ù„ÙˆÙ‚ÙˆØ¯ Ù‚Ø¨Ù„ Ø§Ù„Ø§Ù†Ø·Ù„Ø§Ù‚",
    },
  },
];


export function localised<T extends Partial<Record<Lang, string>>>(
  field: T,
  lang: Lang,
): string {
  return field[lang] ?? field[DEFAULT_LANG] ?? "";
}
