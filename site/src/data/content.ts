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

/*
 * REAL reviews, transcribed from the Google Business Profile
 * (maps.google.com/?cid=12071693882875441050). Last checked 31 July 2026, when
 * the profile stood at 5.0 from 8 reviews. Two of those eight aren't here:
 * one is a bare 5-star rating with no text (nothing to transcribe), and
 * Soukaina's is a near-duplicate of the entry already below (same review, she
 * just posted it under a second display name — "Soukaina Shares" — with two
 * extra sentences; not worth a second card).
 *
 * These replace the three sample testimonials that came with the design
 * prototype — "Lena K., Berlin", "Marco R., Milan", "Amara O., Lagos". Those
 * were placeholder copy invented for a mockup, and presenting invented
 * customers as real ones on a page that takes bookings is not something to
 * ship. Two real reviews beat three convincing fictional ones.
 *
 * The originals are in English; the other languages are translations, which is
 * exactly what Google itself shows. Keep the English verbatim.
 *
 * When new reviews come in, add them here. The rating and the review COUNT
 * look after themselves — scripts/fetch-google-reviews.mjs refreshes both from
 * the Places API before every build. Only the quotes are manual, because they
 * are hand-translated into five languages and hand-picked, which is worth more
 * than freshness for three paragraphs of copy. New arrivals show up in
 * latestReviews in data/google-reviews.json as a prompt to transcribe them.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    /*
     * The most useful review on the profile, and the reason it leads: it is the
     * only one that answers the objections a stranger actually has before
     * booking — is it worth the money, is it safe, will I be looked after, how
     * do I get there. It also names the photographer and the hostel pickup,
     * which are the two things this operator does that the competition does
     * not. Quoted in full and verbatim; trimming a real customer's words to
     * make the card tidier is not a trade worth making.
     */
    name: "Salma Alhsni",
    rating: 5,
    activity: "quad",
    quote: {
      en: "I rented an ATV for one hour and the experience was great! The prices are better than other places and so is the service! They send a professional photographer out with you, thank you to both my guide and photographer for being awesome. They also picked me up from my hostel and dropped me off at a location I requested. They cared about my safety and comfort and were very kind. They also have a variety of activities to choose from. Highly recommend the views were great and the ATVs they have are so much fun.",
      fr: "J'ai loué un quad pour une heure et l'expérience était géniale ! Les prix sont meilleurs qu'ailleurs, et le service aussi ! Ils envoient un photographe professionnel avec vous — merci à mon guide et à mon photographe, tous les deux au top. Ils sont aussi venus me chercher à mon auberge et m'ont déposée là où je le souhaitais. Ils ont veillé à ma sécurité et à mon confort, et ils ont été très gentils. Ils proposent aussi tout un choix d'activités. Je recommande vivement : les vues étaient superbes et leurs quads sont vraiment amusants.",
      es: "Alquilé un quad durante una hora ¡y la experiencia fue genial! Los precios son mejores que en otros sitios, ¡y el servicio también! Envían a un fotógrafo profesional contigo; gracias a mi guía y a mi fotógrafo, los dos estupendos. También me recogieron en el hostal y me dejaron donde pedí. Se preocuparon por mi seguridad y mi comodidad, y fueron muy amables. Además tienen muchas actividades para elegir. Muy recomendable: las vistas eran preciosas y sus quads son divertidísimos.",
      de: "Ich habe ein Quad für eine Stunde gemietet und das Erlebnis war großartig! Die Preise sind besser als anderswo — und der Service auch! Sie schicken einen professionellen Fotografen mit, vielen Dank an meinen Guide und meinen Fotografen, beide klasse. Sie haben mich außerdem an meinem Hostel abgeholt und dort abgesetzt, wo ich es wollte. Sie haben auf meine Sicherheit und mein Wohlbefinden geachtet und waren sehr freundlich. Es gibt auch eine große Auswahl an Aktivitäten. Absolute Empfehlung: die Aussichten waren toll und ihre Quads machen richtig Spaß.",
      ar: "كريت كواد لمدة ساعة وكانت التجربة رائعة! الأسعار أحسن من أماكن أخرى، والخدمة كذلك! كيرسلو معاك مصور محترف، شكراً للمرشد وللمصور، بجوج كانوا ممتازين. زيادة على ذلك جاو خداوني من دار الشباب وردوني للمكان اللي طلبت. اهتموا بسلامتي وراحتي وكانوا لطفاء بزاف. عندهم أيضاً تشكيلة كبيرة من الأنشطة. ننصح بهم بشدة: المناظر كانت خلابة والكوادات ديالهم ممتعة بزاف.",
    },
    origin: {
      en: "Google review",
      fr: "Avis Google",
      es: "Reseña de Google",
      de: "Google-Bewertung",
      ar: "تقييم على غوغل",
    },
  },
  {
    name: "Abdessamad Ichtoutel",
    rating: 5,
    activity: "quad",
    quote: {
      en: "What an amazing experience with Mogador Adventures — the service was amazing and the quads are brand new. Highly recommend this place!",
      fr: "Une expérience incroyable avec Mogador Adventures — le service était excellent et les quads sont flambant neufs. Je recommande vivement !",
      es: "Una experiencia increíble con Mogador Adventures: el servicio fue excelente y los quads están totalmente nuevos. ¡Muy recomendable!",
      de: "Ein unglaubliches Erlebnis mit Mogador Adventures — der Service war hervorragend und die Quads sind nagelneu. Absolute Empfehlung!",
      ar: "تجربة رائعة مع Mogador Adventures — الخدمة ممتازة والدراجات جديدة تماماً. أنصح بهذا المكان بشدة!",
    },
    origin: {
      en: "Google review · Local Guide",
      fr: "Avis Google · Local Guide",
      es: "Reseña de Google · Local Guide",
      de: "Google-Bewertung · Local Guide",
      ar: "تقييم على غوغل · مرشد محلي",
    },
  },
  {
    name: "Soukaina",
    rating: 5,
    activity: "quad",
    quote: {
      en: "Me and my son had a phenomenal quad biking experience with Mogador Adventures. The team was professional, friendly and attentive, making sure we had an amazing time from start to finish.",
      fr: "Mon fils et moi avons vécu une expérience de quad phénoménale avec Mogador Adventures. L'équipe était professionnelle, sympathique et attentive, veillant à ce que nous passions un excellent moment du début à la fin.",
      es: "Mi hijo y yo vivimos una experiencia de quad fenomenal con Mogador Adventures. El equipo fue profesional, amable y atento, y se aseguró de que lo pasáramos genial de principio a fin.",
      de: "Mein Sohn und ich hatten ein phänomenales Quad-Erlebnis mit Mogador Adventures. Das Team war professionell, freundlich und aufmerksam und hat dafür gesorgt, dass wir von Anfang bis Ende eine großartige Zeit hatten.",
      ar: "أنا وابني عشنا تجربة كواد رائعة مع Mogador Adventures. كان الفريق محترفاً ولطيفاً ومهتماً، وحرص على أن نقضي وقتاً ممتازاً من البداية إلى النهاية.",
    },
    origin: {
      en: "Google review",
      fr: "Avis Google",
      es: "Reseña de Google",
      de: "Google-Bewertung",
      ar: "تقييم على غوغل",
    },
  },
  {
    name: "essa sports",
    rating: 5,
    activity: "quad",
    quote: {
      en: "One epic Activities in Essaouira i highly recommande it ❤️❤️❤️",
      fr: "Une activité épique à Essaouira, je la recommande vivement ❤️❤️❤️",
      es: "Una actividad épica en Essaouira, la recomiendo muchísimo ❤️❤️❤️",
      de: "Eine legendäre Aktivität in Essaouira, ich empfehle sie sehr ❤️❤️❤️",
      ar: "نشاط ملحمي في الصويرة، أنصح به بشدة ❤️❤️❤️",
    },
    origin: {
      en: "Google review",
      fr: "Avis Google",
      es: "Reseña de Google",
      de: "Google-Bewertung",
      ar: "تقييم على غوغل",
    },
  },
  {
    name: "Anas Bouak",
    rating: 5,
    activity: "quad",
    quote: {
      en: "One of my favourite agencies in Essaouira.",
      fr: "L'une de mes agences préférées à Essaouira.",
      es: "Una de mis agencias favoritas en Essaouira.",
      de: "Eine meiner Lieblingsagenturen in Essaouira.",
      ar: "واحدة من وكالاتي المفضلة في الصويرة.",
    },
    origin: {
      en: "Google review",
      fr: "Avis Google",
      es: "Reseña de Google",
      de: "Google-Bewertung",
      ar: "تقييم على غوغل",
    },
  },
  {
    name: "Sara Belhou",
    rating: 5,
    activity: "quad",
    quote: {
      en: "Amazing energy, an incredible team. Highly recommend if you're looking for something unique.",
      fr: "Une énergie incroyable, une équipe formidable. Je recommande vivement si vous cherchez quelque chose d'unique.",
      es: "Energía increíble, un equipo excepcional. Muy recomendable si buscas algo único.",
      de: "Unglaubliche Energie, ein großartiges Team. Sehr zu empfehlen, wenn du etwas Besonderes suchst.",
      ar: "طاقة رائعة وفريق مذهل. أنصح به بشدة إن كنت تبحث عن شيء مميز.",
    },
    origin: {
      en: "Google review",
      fr: "Avis Google",
      es: "Reseña de Google",
      de: "Google-Bewertung",
      ar: "تقييم على غوغل",
    },
  },
  {
    /*
     * The only new arrival with real length to it — written in Spanish, so
     * that's the verbatim language here rather than English (see the module
     * comment: keep the ORIGINAL language verbatim, translate the rest).
     */
    name: "Dalila Chanbat",
    rating: 5,
    activity: "quad",
    quote: {
      en: "We just did the dune tour with Mogador Adventures and it was spectacular. The facilities are really well kept and organised. The vehicles are in perfect condition, which gives you a lot of confidence and makes the ride a blast. But without a doubt, the best part of the experience is the team. The guys are super friendly, warm and attentive the whole time to make sure you enjoy it to the fullest and want for nothing. Absolutely top-notch service!",
      fr: "Nous venons de faire le tour des dunes avec Mogador Adventures et c'était spectaculaire. Les installations sont impeccables, très soignées et bien organisées. Les véhicules sont en parfait état, ce qui donne beaucoup de sécurité et rend la balade grisante. Mais sans aucun doute, le meilleur de l'expérience, c'est l'équipe. Les gars sont super sympas, chaleureux et attentifs à chaque instant pour que vous profitiez au maximum et ne manquiez de rien. Un service parfait !",
      es: "Acabamos de hacer el tour por las dunas con Mogador Adventures y ha sido espectacular. Las instalaciones están súper bien, muy cuidadas y organizadas. Los vehículos están en perfectas condiciones, lo que te da muchísima seguridad y hace que la ruta sea una pasada. Pero sin duda, lo mejor de la experiencia es el equipo. Los chicos son súper amables, cercanos y están súper atentos en todo momento para asegurarse de que disfrutes al máximo y no te falte de nada. ¡Un trato de 10!",
      de: "Wir haben gerade die Dünentour mit Mogador Adventures gemacht und es war spektakulär. Die Ausstattung ist top gepflegt und organisiert. Die Fahrzeuge sind in einwandfreiem Zustand, was viel Sicherheit gibt und die Fahrt zu einem Erlebnis macht. Aber das Beste an der Erfahrung ist zweifellos das Team. Die Jungs sind super freundlich, herzlich und die ganze Zeit aufmerksam, damit du es in vollen Zügen genießst und dir nichts fehlt. Absolut erstklassiger Service!",
      ar: "قمنا للتو بجولة الكثبان مع Mogador Adventures وكانت رائعة. المرافق في حالة ممتازة، معتنى بها ومنظمة جداً. المركبات في حالة ممتازة، ما يمنحك أماناً كبيراً ويجعل الجولة مثيرة. لكن بلا شك، أفضل ما في التجربة هو الفريق. الشباب لطفاء جداً، ودودون ومهتمون طوال الوقت للتأكد من أنك تستمتع إلى أقصى حد ولا ينقصك شيء. خدمة ممتازة بامتياز!",
    },
    origin: {
      en: "Google review",
      fr: "Avis Google",
      es: "Reseña de Google",
      de: "Google-Bewertung",
      ar: "تقييم على غوغل",
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
      fr: "Comment réserver ?",
      es: "¿Cómo reservo?",
      de: "Wie buche ich?",
      ar: "كيف أحجز؟",
    },
    a: {
      en: "Message us on WhatsApp or Instagram and tell us what you'd like to do and roughly when. We confirm availability, agree a time and pickup point, and that's it. The booking form on this site simply builds that WhatsApp message for you.",
      fr: "Écrivez-nous sur WhatsApp ou Instagram en nous disant ce qui vous tente et à peu près quand. Nous confirmons les disponibilités, convenons d'une heure et d'un point de rendez-vous, et c'est réglé. Le formulaire de ce site rédige simplement ce message WhatsApp pour vous.",
      es: "Escríbenos por WhatsApp o Instagram diciéndonos qué te apetece hacer y más o menos cuándo. Confirmamos disponibilidad, acordamos hora y punto de recogida, y ya está. El formulario de esta web simplemente te redacta ese mensaje.",
      de: "Schreib uns auf WhatsApp oder Instagram, was du machen möchtest und ungefähr wann. Wir bestätigen die Verfügbarkeit, vereinbaren Uhrzeit und Abholpunkt, fertig. Das Formular auf dieser Seite schreibt dir diese WhatsApp-Nachricht einfach vor.",
      ar: "راسلنا على واتساب أو إنستغرام وأخبرنا بما تودّ فعله ومتى تقريباً. نؤكد التوفر ونتفق على الوقت ونقطة الالتقاء، وهذا كل شيء. نموذج الحجز في هذا الموقع يكتب لك رسالة الواتساب فقط.",
    },
  },
  {
    q: {
      en: "Can I book same-day or just walk in?",
      fr: "Peut-on réserver le jour même ou venir sans réserver ?",
      es: "¿Puedo reservar el mismo día o presentarme sin más?",
      de: "Kann ich am selben Tag buchen oder einfach vorbeikommen?",
      ar: "هل يمكن الحجز في اليوم نفسه أو الحضور مباشرة؟",
    },
    a: {
      en: "Often yes, especially outside July and August. Message us and we'll tell you straight away what's free today. Sunset departures are the ones that fill first, so for those give us a day's notice if you can.",
      fr: "Souvent oui, surtout hors juillet et août. Écrivez-nous et nous vous dirons tout de suite ce qui est libre aujourd'hui. Les départs au coucher du soleil partent en premier : prévenez-nous idéalement la veille.",
      es: "A menudo sí, sobre todo fuera de julio y agosto. Escríbenos y te decimos al momento qué hay libre hoy. Las salidas de atardecer se llenan primero, así que para esas avisa con un día si puedes.",
      de: "Oft ja, besonders außerhalb von Juli und August. Schreib uns und wir sagen dir sofort, was heute frei ist. Sonnenuntergangstouren sind zuerst ausgebucht — dafür am besten einen Tag vorher Bescheid geben.",
      ar: "غالباً نعم، خصوصاً خارج يوليوز وغشت. راسلنا وسنخبرك فوراً بما هو متاح اليوم. جولات الغروب تُحجز أولاً، فيُفضّل إخبارنا قبل يوم.",
    },
  },
  {
    q: {
      en: "Do I need to pay a deposit?",
      fr: "Faut-il verser un acompte ?",
      es: "¿Hay que pagar depósito?",
      de: "Muss ich eine Anzahlung leisten?",
      ar: "هل يجب دفع عربون؟",
    },
    a: {
      en: "No. For almost every booking you pay on the day, in cash or by card. Larger groups (eight people or more) and multi-day packages may need a small deposit, and we'll say so clearly when you book — never as a surprise.",
      fr: "Non. Pour presque toutes les réservations, vous payez le jour même, en espèces ou par carte. Les grands groupes (huit personnes et plus) et les forfaits sur plusieurs jours peuvent demander un petit acompte, et nous vous le dirons clairement à la réservation — jamais en surprise.",
      es: "No. En casi todas las reservas pagas el mismo día, en efectivo o con tarjeta. Los grupos grandes (ocho personas o más) y los paquetes de varios días pueden requerir un pequeño depósito, y te lo diremos claramente al reservar.",
      de: "Nein. Bei fast allen Buchungen zahlst du am Tag selbst, bar oder mit Karte. Größere Gruppen (ab acht Personen) und mehrtägige Pakete brauchen eventuell eine kleine Anzahlung — das sagen wir bei der Buchung klar, nie als Überraschung.",
      ar: "لا. في معظم الحجوزات تدفع يوم الجولة، نقداً أو بالبطاقة. المجموعات الكبيرة (ثمانية أشخاص فأكثر) والعروض متعددة الأيام قد تتطلب عربوناً صغيراً، وسنخبرك بذلك بوضوح عند الحجز.",
    },
  },
  {
    q: {
      en: "What should I bring?",
      fr: "Que dois-je apporter ?",
      es: "¿Qué debo llevar?",
      de: "Was soll ich mitbringen?",
      ar: "ماذا أحضر معي؟",
    },
    a: {
      en: "Comfortable clothes you don't mind getting sandy, closed shoes, sun protection and water. All the equipment — quads, boards, wetsuits, helmets, mats, cooking gear — is provided. Each activity page has its own specific list.",
      fr: "Des vêtements confortables que le sable ne gênera pas, des chaussures fermées, une protection solaire et de l'eau. Tout l'équipement — quads, planches, combinaisons, casques, tapis, matériel de cuisine — est fourni. Chaque page d'activité a sa liste précise.",
      es: "Ropa cómoda que no te importe que se llene de arena, calzado cerrado, protección solar y agua. Todo el equipo —quads, tablas, neoprenos, cascos, esterillas, utensilios— va incluido. Cada página de actividad tiene su lista concreta.",
      de: "Bequeme Kleidung, die sandig werden darf, geschlossene Schuhe, Sonnenschutz und Wasser. Die gesamte Ausrüstung — Quads, Boards, Neoprenanzüge, Helme, Matten, Kochutensilien — wird gestellt. Jede Aktivitätsseite hat ihre eigene Liste.",
      ar: "ملابس مريحة لا يضيرك أن يعلق بها الرمل، وحذاء مغلق، وواقي شمس، وماء. كل المعدات — الدراجات والألواح والبدلات والخوذات والحصائر وأدوات الطبخ — متوفرة لدينا. لكل صفحة نشاط قائمتها الخاصة.",
    },
  },
  {
    q: {
      en: "Are your activities suitable for beginners?",
      fr: "Vos activités conviennent-elles aux débutants ?",
      es: "¿Son adecuadas para principiantes?",
      de: "Sind eure Aktivitäten für Anfänger geeignet?",
      ar: "هل أنشطتكم مناسبة للمبتدئين؟",
    },
    a: {
      en: "Yes — all six are coached and every one of them runs regularly with complete beginners. Quads are automatic and need no licence, surf lessons start in whitewater, horses are matched to your riding, and yoga and cooking assume nothing at all.",
      fr: "Oui — les six activités sont encadrées et toutes accueillent régulièrement de grands débutants. Les quads sont automatiques et ne demandent aucun permis, les cours de surf commencent dans la mousse, les chevaux sont choisis selon votre niveau, et le yoga comme la cuisine ne supposent aucun prérequis.",
      es: "Sí — las seis son guiadas y todas se hacen habitualmente con principiantes totales. Los quads son automáticos y no requieren carnet, el surf empieza en la espuma, los caballos se asignan según cómo montes, y el yoga y la cocina no dan nada por supuesto.",
      de: "Ja — alle sechs werden betreut und laufen regelmäßig mit kompletten Anfängern. Quads sind Automatik und brauchen keinen Führerschein, Surfkurse starten im Weißwasser, Pferde werden nach Können zugeteilt, und Yoga und Kochen setzen gar nichts voraus.",
      ar: "نعم — الأنشطة الستة كلها مؤطَّرة وتُنظَّم بانتظام مع مبتدئين تماماً. الدراجات أوتوماتيكية ولا تحتاج رخصة، ودروس السيرف تبدأ في الزبد، والخيل تُختار حسب مستواك، واليوغا والطبخ لا يفترضان أي خبرة.",
    },
  },
  {
    q: {
      en: "Do you pick up from my hotel?",
      fr: "Venez-vous me chercher à mon hôtel ?",
      es: "¿Recogéis en el hotel?",
      de: "Holt ihr mich vom Hotel ab?",
      ar: "هل تأتون لأخذي من الفندق؟",
    },
    a: {
      en: "Yes, and it's included — anywhere in Essaouira or Diabat. Send us the riad, hotel or apartment address on WhatsApp when you book. If you're staying further out, tell us where and we'll quote the transfer.",
      fr: "Oui, et c'est inclus — partout à Essaouira ou à Diabat. Envoyez-nous l'adresse du riad, de l'hôtel ou de l'appartement sur WhatsApp au moment de réserver. Si vous logez plus loin, dites-nous où et nous vous chiffrons le transfert.",
      es: "Sí, y va incluido — en cualquier punto de Essaouira o Diabat. Mándanos por WhatsApp la dirección del riad, hotel o apartamento al reservar. Si te alojas más lejos, dinos dónde y te presupuestamos el traslado.",
      de: "Ja, und es ist inklusive — überall in Essaouira oder Diabat. Schick uns beim Buchen die Adresse von Riad, Hotel oder Apartment per WhatsApp. Wenn du weiter draußen wohnst, sag uns wo, dann nennen wir dir den Preis für den Transfer.",
      ar: "نعم، وهو مشمول — في أي مكان بالصويرة أو ديابات. أرسل لنا عنوان الرياض أو الفندق أو الشقة على واتساب عند الحجز. وإن كنت تقيم أبعد، أخبرنا بالمكان وسنحدد لك سعر النقل.",
    },
  },
  {
    q: {
      en: "What languages do your guides speak?",
      fr: "Quelles langues parlent vos guides ?",
      es: "¿Qué idiomas hablan los guías?",
      de: "Welche Sprachen sprechen eure Guides?",
      ar: "ما اللغات التي يتحدثها مرشدوكم؟",
    },
    a: {
      en: "Every guide speaks Arabic, French and English as a minimum. Several also speak Spanish or German, and Darija of course. Tell us your preferred language when you book and we'll match you.",
      fr: "Chaque guide parle au minimum arabe, français et anglais. Plusieurs parlent aussi espagnol ou allemand, et le darija bien sûr. Indiquez votre langue préférée à la réservation et nous vous attribuerons le bon guide.",
      es: "Todos los guías hablan como mínimo árabe, francés e inglés. Varios hablan también español o alemán, y dariya por supuesto. Dinos tu idioma preferido al reservar y te asignamos el adecuado.",
      de: "Jeder Guide spricht mindestens Arabisch, Französisch und Englisch. Mehrere sprechen außerdem Spanisch oder Deutsch, und natürlich Darija. Sag uns bei der Buchung deine Wunschsprache.",
      ar: "كل مرشد يتحدث العربية والفرنسية والإنجليزية كحد أدنى. وبعضهم يتحدث الإسبانية أو الألمانية، والدارجة بالطبع. أخبرنا بلغتك المفضلة عند الحجز وسنوفر لك المرشد المناسب.",
    },
  },
  {
    q: {
      en: "What's your cancellation policy?",
      fr: "Quelle est votre politique d'annulation ?",
      es: "¿Cuál es la política de cancelación?",
      de: "Wie ist eure Stornierungsregelung?",
      ar: "ما سياسة الإلغاء لديكم؟",
    },
    a: {
      en: "Free cancellation up to 24 hours before departure, no questions and no fee. If we cancel because of weather — rare, but it happens with surf and yoga — you reschedule free or pay nothing at all.",
      fr: "Annulation gratuite jusqu'à 24 heures avant le départ, sans justification et sans frais. Si c'est nous qui annulons pour cause de météo — rare, mais cela arrive pour le surf et le yoga — vous reprogrammez gratuitement ou ne payez rien.",
      es: "Cancelación gratuita hasta 24 horas antes de la salida, sin preguntas ni cargos. Si cancelamos nosotros por el tiempo —poco frecuente, pero pasa con surf y yoga— cambias de fecha gratis o no pagas nada.",
      de: "Kostenlose Stornierung bis 24 Stunden vor Abfahrt, ohne Nachfragen und ohne Gebühr. Wenn wir wetterbedingt absagen — selten, kommt aber bei Surfen und Yoga vor — verschiebst du kostenlos oder zahlst gar nichts.",
      ar: "الإلغاء مجاني حتى 24 ساعة قبل الانطلاق، بلا أسئلة وبلا رسوم. وإن ألغينا نحن بسبب الطقس — وهو نادر لكنه يحدث مع السيرف واليوغا — تعيد الجدولة مجاناً أو لا تدفع شيئاً إطلاقاً.",
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
    "Mogador Adventures started with a simple idea: show visitors the Essaouira we grew up in, not a postcard version of it. Our founders are locals — surfers, quad guides, and home cooks — who've spent years running these dunes, riding these waves and cooking in these kitchens for friends and family.",
    "Essaouira sits where three landscapes meet: the Sahara-fringed dunes to the south, the open Atlantic on its doorstep, and the argan forest just inland. Most trips only see one. We built Mogador Adventures to move between all three in a single visit — a quad run through the dunes at sunset, a surf lesson at sunrise, a horseback ride through the forest, a cooking class with a local family.",
    "Every guide on our team grew up here. We book almost entirely through Instagram DMs and WhatsApp because that's how our guests find us — through real photos and video from real trips, not stock imagery. Our team films and photographs every outing so you leave with more than a memory.",
  ],
  fr: [
    "Mogador Adventures est né d'une idée simple : montrer aux visiteurs l'Essaouira dans laquelle nous avons grandi, pas sa version carte postale. Nos fondateurs sont d'ici — surfeurs, guides quad et cuisiniers de famille — et ils passent leurs journées depuis des années sur ces dunes, sur ces vagues et dans ces cuisines, pour leurs proches d'abord.",
    "Essaouira se trouve à la rencontre de trois paysages : les dunes bordées de Sahara au sud, l'Atlantique ouvert à sa porte, et la forêt d'arganiers juste à l'intérieur des terres. La plupart des séjours n'en voient qu'un. Nous avons créé Mogador Adventures pour circuler entre les trois en une seule visite — une sortie quad dans les dunes au coucher du soleil, un cours de surf au lever du jour, une balade à cheval en forêt, un cours de cuisine chez une famille d'ici.",
    "Chaque guide de notre équipe a grandi ici. Nous réservons presque exclusivement par messages Instagram et WhatsApp, parce que c'est comme ça que nos clients nous trouvent — par de vraies photos et de vraies vidéos de vraies sorties, pas des images de banque. Notre équipe filme et photographie chaque excursion pour que vous repartiez avec plus qu'un souvenir.",
  ],
  es: [
    "Mogador Adventures nació de una idea sencilla: enseñar a los visitantes la Essaouira en la que crecimos, no su versión de postal. Nuestros fundadores son de aquí — surfistas, guías de quad y cocineros de casa — y llevan años recorriendo estas dunas, surfeando estas olas y cocinando en estas cocinas, primero para los suyos.",
    "Essaouira está donde se juntan tres paisajes: las dunas que anuncian el Sáhara al sur, el Atlántico abierto en su puerta y el bosque de argán justo tierra adentro. Casi todos los viajes ven solo uno. Creamos Mogador Adventures para movernos entre los tres en una sola visita.",
    "Todos los guías del equipo crecieron aquí. Reservamos casi todo por mensajes de Instagram y WhatsApp porque así es como nos encuentran nuestros huéspedes: con fotos y vídeos reales de salidas reales, no con imágenes de banco. Grabamos y fotografiamos cada excursión para que te lleves algo más que un recuerdo.",
  ],
  de: [
    "Mogador Adventures begann mit einer einfachen Idee: Besuchern das Essaouira zu zeigen, in dem wir aufgewachsen sind — nicht die Postkartenversion davon. Unsere Gründer sind von hier: Surfer, Quad-Guides und Hausköche, die seit Jahren diese Dünen fahren, diese Wellen reiten und in diesen Küchen für Freunde und Familie kochen.",
    "Essaouira liegt dort, wo drei Landschaften aufeinandertreffen: die von der Sahara gesäumten Dünen im Süden, der offene Atlantik vor der Tür und der Arganwald gleich im Landesinneren. Die meisten Reisen sehen nur eine davon. Wir haben Mogador Adventures gebaut, um in einem einzigen Aufenthalt zwischen allen dreien zu wechseln.",
    "Jeder Guide in unserem Team ist hier aufgewachsen. Wir buchen fast ausschließlich über Instagram-DMs und WhatsApp, weil unsere Gäste uns so finden — über echte Fotos und Videos von echten Touren, nicht über Stockmaterial. Wir filmen und fotografieren jede Ausfahrt, damit du mit mehr als einer Erinnerung nach Hause fährst.",
  ],
  ar: [
    "بدأت Mogador Adventures بفكرة بسيطة: أن نُري الزوار الصويرة التي نشأنا فيها، لا نسختها البريدية. مؤسسونا من أهل المدينة — راكبو أمواج ومرشدو كواد وطهاة بيوت — قضوا سنوات فوق هذه الكثبان وفوق هذه الأمواج وفي هذه المطابخ، لأهلهم وأصدقائهم أولاً.",
    "تقع الصويرة حيث تلتقي ثلاثة مشاهد: الكثبان المتاخمة للصحراء جنوباً، والأطلسي المفتوح عند بابها، وغابة الأركان في الداخل القريب. معظم الرحلات لا ترى إلا واحداً منها. أنشأنا Mogador Adventures للتنقل بين الثلاثة في زيارة واحدة.",
    "كل مرشد في فريقنا نشأ هنا. نحجز تقريباً بالكامل عبر رسائل إنستغرام وواتساب، لأن ضيوفنا يجدوننا هكذا — بصور وفيديوهات حقيقية من رحلات حقيقية، لا صور جاهزة. نصوّر كل خرجة لتعود بأكثر من مجرد ذكرى.",
  ],
};

export interface TeamMember {
  name: string;
  role: Partial<Record<Lang, string>>;
  bio: Partial<Record<Lang, string>>;
  /** Square-cropped portrait in src/assets/photos, or null for a placeholder. */
  photo: string | null;
}

/*
 * EMPTY ON PURPOSE.
 *
 * This held three named guides with photos and biographies — Youssef
 * (founder & quad guide), Salma (surf instructor) and Hassan (cooking host).
 * The operator has confirmed these are NOT real people: they came from the
 * design mockup, like the sample testimonials that were removed earlier.
 *
 * Presenting invented staff, by name and face, on a page that takes bookings
 * is not something to ship. The About page hides the team section entirely
 * while this is empty, so adding real colleagues here brings it straight back.
 */
export const TEAM: TeamMember[] = [];

/* ------------------------------------------------------------------ */
/* Gallery                                                             */
/* ------------------------------------------------------------------ */

export interface GallerySlot {
  /** Filename in src/assets/photos, or null while we await client photos. */
  photo: string | null;
  /** Alt text / placeholder brief — doubles as the shot list for the photographer. */
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
      es: "Pilotos viendo caer el sol en el Atlántico desde las dunas",
      de: "Fahrer sehen von den Dünen aus die Sonne im Atlantik versinken",
      ar: "سائقون يشاهدون الشمس تغيب في الأطلسي من فوق الكثبان",
    },
  },
  {
    photo: "quad-convoy-dunes-essaouira.jpg",
    label: {
      en: "Quad convoy lined up on the dune belt",
      fr: "Convoi de quads aligné sur le cordon dunaire",
      es: "Convoy de quads alineado en el cordón de dunas",
      de: "Quad-Konvoi auf dem Dünengürtel",
      ar: "قافلة كواد مصطفة على حزام الكثبان",
    },
  },
  {
    photo: "camel-train-beach-essaouira.jpg",
    label: {
      en: "Camel train crossing the beach at low tide",
      fr: "Caravane de chameaux traversant la plage à marée basse",
      es: "Caravana de camellos cruzando la playa con marea baja",
      de: "Kamelkarawane am Strand bei Ebbe",
      ar: "قافلة جمال تعبر الشاطئ عند الجزر",
    },
  },
  {
    photo: "quad-sunset-silhouette-dune-essaouira.jpg",
    label: {
      en: "Silhouette on the dune crest at sunset",
      fr: "Silhouette sur la crête d'une dune au coucher du soleil",
      es: "Silueta en la cresta de la duna al atardecer",
      de: "Silhouette auf dem Dünenkamm bei Sonnenuntergang",
      ar: "ظلّ على قمة الكثيب عند الغروب",
    },
  },
  {
    photo: "horseback-riding-beach-essaouira.jpg",
    portrait: true,
    label: {
      en: "Horseback riders on the beach south of Diabat",
      fr: "Cavaliers sur la plage au sud de Diabat",
      es: "Jinetes en la playa al sur de Diabat",
      de: "Reiter am Strand südlich von Diabat",
      ar: "فرسان على الشاطئ جنوب ديابات",
    },
  },
  {
    photo: "quad-argan-forest-track-essaouira.jpg",
    label: {
      en: "Threading the argan forest track inland",
      fr: "Sur la piste de la forêt d'arganiers, à l'intérieur des terres",
      es: "Por la pista del bosque de argán tierra adentro",
      de: "Auf dem Arganwald-Pfad im Landesinneren",
      ar: "على مسار غابة الأركان في الداخل",
    },
  },
  {
    photo: "group-quad-tour-beach-essaouira.jpg",
    label: {
      en: "A full group at the end of a beach run",
      fr: "Un groupe complet à la fin d'une sortie sur la plage",
      es: "Un grupo entero al final de una ruta por la playa",
      de: "Eine ganze Gruppe am Ende einer Strandtour",
      ar: "مجموعة كاملة في نهاية جولة شاطئية",
    },
  },
  {
    photo: "dune-belt-sunset-essaouira.jpg",
    label: {
      en: "The dune belt at last light",
      fr: "Le cordon dunaire aux dernières lueurs",
      es: "El cordón de dunas con la última luz",
      de: "Der Dünengürtel im letzten Licht",
      ar: "حزام الكثبان عند آخر الضوء",
    },
  },
  {
    photo: "quad-far-dunes-essaouira.jpg",
    label: {
      en: "Out on the far dunes, half-day route",
      fr: "Sur les dunes lointaines, parcours demi-journée",
      es: "En las dunas lejanas, ruta de medio día",
      de: "Auf den fernen Dünen, Halbtagesroute",
      ar: "في الكثبان البعيدة، مسار نصف يوم",
    },
  },
  {
    photo: "guide-youssef-quad-sunset-essaouira.jpg",
    portrait: true,
    label: {
      en: "One of our guides at the end of a sunset run",
      fr: "L'un de nos guides à la fin d'une sortie au coucher du soleil",
      es: "Uno de nuestros guías al final de una salida al atardecer",
      de: "Einer unserer Guides nach einer Sonnenuntergangstour",
      ar: "أحد مرشدينا في نهاية جولة الغروب",
    },
  },
  {
    photo: "atlantic-beach-sunrise-essaouira.jpg",
    label: {
      en: "Tyre tracks on the wet sand at first light",
      fr: "Traces de pneus sur le sable mouillé aux premières lueurs",
      es: "Huellas de neumáticos en la arena mojada al amanecer",
      de: "Reifenspuren im nassen Sand im ersten Licht",
      ar: "آثار العجلات على الرمل المبلل عند أول الضوء",
    },
  },
  {
    photo: "quad-fleet-beach-essaouira.jpg",
    label: {
      en: "Our fleet, cleaned and fuelled before a departure",
      fr: "Notre parc, nettoyé et plein fait avant un départ",
      es: "Nuestra flota, limpia y repostada antes de una salida",
      de: "Unsere Flotte, gereinigt und getankt vor der Abfahrt",
      ar: "أسطولنا، نظيف ومعبأ بالوقود قبل الانطلاق",
    },
  },
  {
    photo: "quad-cresting-dune-essaouira.jpg",
    portrait: true,
    label: {
      en: "Cresting the last ridge of the dune belt",
      fr: "En haut de la dernière crête du cordon dunaire",
      es: "Coronando la última cresta del cordón de dunas",
      de: "Über den letzten Kamm des Dünengürtels",
      ar: "عند اعتلاء آخر تلة في حزام الكثبان",
    },
  },
  {
    photo: "quad-pink-sunset-beach-essaouira.jpg",
    label: {
      en: "Pink light over the beach at the end of a ride",
      fr: "Lumière rose sur la plage en fin de sortie",
      es: "Luz rosada sobre la playa al final de una salida",
      de: "Rosa Licht über dem Strand am Ende einer Tour",
      ar: "ضوء وردي فوق الشاطئ في نهاية الجولة",
    },
  },
  {
    photo: "quad-rider-joy-beach-essaouira.jpg",
    label: {
      en: "A guest on the beach stretch, arms up",
      fr: "Une cliente sur la portion de plage, bras levés",
      es: "Una clienta en el tramo de playa, brazos en alto",
      de: "Ein Gast auf dem Strandabschnitt, Arme hoch",
      ar: "ضيفة على امتداد الشاطئ رافعة يديها",
    },
  },
  {
    photo: "quads-lined-up-turquoise-beach-essaouira.jpg",
    label: {
      en: "Quads lined up above the turquoise shallows",
      fr: "Quads alignés au-dessus des eaux turquoise",
      es: "Quads alineados sobre las aguas turquesas",
      de: "Quads aufgereiht über dem türkisfarbenen Wasser",
      ar: "دراجات مصطفة فوق المياه الفيروزية",
    },
  },
  {
    photo: "horses-and-quad-trail-essaouira.jpg",
    label: {
      en: "Sharing the trail with the horse riders",
      fr: "Le sentier partagé avec les cavaliers",
      es: "Compartiendo el sendero con los jinetes",
      de: "Der Weg, geteilt mit den Reitern",
      ar: "المسار مشترك مع الفرسان",
    },
  },
  {
    photo: "quad-buggy-fleet-beach-essaouira.jpg",
    portrait: true,
    label: {
      en: "Quads and a buggy waiting on the sand",
      fr: "Quads et buggy en attente sur le sable",
      es: "Quads y un buggy esperando en la arena",
      de: "Quads und ein Buggy warten im Sand",
      ar: "دراجات وعربة باغي في انتظارك على الرمل",
    },
  },
  {
    photo: "quad-rider-sunset-bird-essaouira.jpg",
    label: {
      en: "A gull crossing the sun on the way back in",
      fr: "Une mouette traversant le soleil au retour",
      es: "Una gaviota cruzando el sol en el regreso",
      de: "Eine Möwe vor der Sonne auf dem Rückweg",
      ar: "نورس يعبر أمام الشمس أثناء العودة",
    },
  },
];


/**
 * Photos that lead the gallery, and therefore also fill the six-tile teaser on
 * the home page.
 *
 * Ordering is deliberate: these are the frames with people and strong subjects.
 * Several of the client's photos are beautiful but sky-dominant (hazy Atlantic
 * horizons, sunset silhouettes) and read as near-empty at thumbnail size — fine
 * further down the grid, wrong as the first thing a visitor sees.
 */
const GALLERY_LEAD = [
  "quad-convoy-dunes-essaouira.jpg",
  "group-quad-tour-beach-essaouira.jpg",
  "quad-rider-joy-beach-essaouira.jpg",
  "quads-lined-up-turquoise-beach-essaouira.jpg",
  "camel-train-beach-essaouira.jpg",
  "horses-and-quad-trail-essaouira.jpg",
];

export const ORDERED_GALLERY: GallerySlot[] = [...GALLERY].sort((a, b) => {
  const rank = (s: GallerySlot) => {
    const i = s.photo ? GALLERY_LEAD.indexOf(s.photo) : -1;
    return i === -1 ? Number.MAX_SAFE_INTEGER : i;
  };
  return rank(a) - rank(b);
});

export function localised<T extends Partial<Record<Lang, string>>>(
  field: T,
  lang: Lang,
): string {
  return field[lang] ?? field[DEFAULT_LANG] ?? "";
}
