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
      fr: "Notre guide connaissait chaque dune et chaque vague. La meilleure journée de tout le séjour.",
      es: "Nuestro guía se conocía cada duna y cada ola. El mejor día de todo el viaje.",
      de: "Unser Guide kannte jede Düne und jede Welle. Der beste Tag der ganzen Reise.",
      ar: "كان مرشدنا يعرف كل كثيب وكل موجة. أفضل يوم في الرحلة كلها.",
    },
    origin: {
      en: "Berlin, Germany",
      fr: "Berlin, Allemagne",
      es: "Berlín, Alemania",
      de: "Berlin, Deutschland",
      ar: "برلين، ألمانيا",
    },
  },
  {
    name: "Marco R.",
    rating: 5,
    activity: "quad",
    quote: {
      en: "Booked through Instagram DM and it was seamless — quad biking then a home-cooked tagine.",
      fr: "Réservé par message Instagram, tout s'est fait sans accroc — quad puis tajine fait maison.",
      es: "Reservé por mensaje de Instagram y fue todo rodado: quad y luego un tajine casero.",
      de: "Per Instagram-DM gebucht, lief völlig reibungslos — Quad-Tour und danach eine selbstgekochte Tajine.",
      ar: "حجزت عبر رسالة إنستغرام وكان كل شيء سلساً — جولة كواد ثم طاجين منزلي.",
    },
    origin: {
      en: "Milan, Italy",
      fr: "Milan, Italie",
      es: "Milán, Italia",
      de: "Mailand, Italien",
      ar: "ميلانو، إيطاليا",
    },
  },
  {
    name: "Amara O.",
    rating: 5,
    activity: "surf",
    quote: {
      en: "Surf lesson in the morning, sunset yoga after. Felt like locals, not tourists.",
      fr: "Cours de surf le matin, yoga au coucher du soleil ensuite. On s'est sentis d'ici, pas touristes.",
      es: "Clase de surf por la mañana y yoga al atardecer. Nos sentimos locales, no turistas.",
      de: "Morgens Surfstunde, danach Yoga zum Sonnenuntergang. Man fühlte sich wie ein Einheimischer.",
      ar: "درس سيرف صباحاً ويوغا عند الغروب بعده. شعرنا أننا من أهل المكان لا سيّاح.",
    },
    origin: {
      en: "Lagos, Nigeria",
      fr: "Lagos, Nigeria",
      es: "Lagos, Nigeria",
      de: "Lagos, Nigeria",
      ar: "لاغوس، نيجيريا",
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

export const TEAM: TeamMember[] = [
  {
    name: "Youssef",
    photo: "guide-youssef-quad-sunset-essaouira.jpg",
    role: {
      en: "Founder & quad guide",
      fr: "Fondateur et guide quad",
      es: "Fundador y guía de quad",
      de: "Gründer und Quad-Guide",
      ar: "المؤسس ومرشد الكواد",
    },
    bio: {
      en: "Grew up in Diabat and has been riding the dune belt since he was a teenager. Leads most of the sunset quad tours and knows which line through the sand works on any given day.",
      fr: "A grandi à Diabat et roule sur le cordon dunaire depuis l'adolescence. Il mène la plupart des sorties quad au coucher du soleil et sait quelle trace tient le sable selon le jour.",
      es: "Creció en Diabat y lleva recorriendo el cordón de dunas desde adolescente. Guía casi todas las salidas de quad al atardecer y sabe qué trazada aguanta cada día.",
      de: "Ist in Diabat aufgewachsen und fährt den Dünengürtel seit seiner Jugend. Er führt die meisten Sonnenuntergangstouren und weiß, welche Linie durch den Sand an welchem Tag trägt.",
      ar: "نشأ في ديابات ويجوب حزام الكثبان منذ مراهقته. يقود معظم جولات الكواد عند الغروب ويعرف أي مسار في الرمل يصلح في كل يوم.",
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
      ar: "مدرّبة ركوب أمواج",
    },
    bio: {
      en: "Surfs Essaouira's break every day of the year and teaches beginners with more patience than anyone we know. Also runs the sunrise yoga sessions.",
      fr: "Surfe le spot d'Essaouira tous les jours de l'année et enseigne aux débutants avec une patience rare. Elle anime aussi les séances de yoga au lever du soleil.",
      es: "Surfea el pico de Essaouira todos los días del año y enseña a principiantes con una paciencia poco común. También lleva las sesiones de yoga al amanecer.",
      de: "Surft Essaouiras Break an jedem Tag des Jahres und unterrichtet Anfänger mit mehr Geduld als jede andere Person, die wir kennen. Leitet außerdem die Yoga-Sessions bei Sonnenaufgang.",
      ar: "تركب موج الصويرة كل يوم في السنة وتُعلّم المبتدئين بصبر نادر. تشرف أيضاً على حصص اليوغا عند الشروق.",
    },
  },
  {
    // No portrait supplied yet.
    name: "Hassan",
    photo: null,
    role: {
      en: "Cooking host",
      fr: "Hôte cuisine",
      es: "Anfitrión de cocina",
      de: "Koch-Gastgeber",
      ar: "مضيف الطبخ",
    },
    bio: {
      en: "Opens his family kitchen for the cooking classes and does the market run himself. His mother's tagine recipe is the one you'll be making.",
      fr: "Ouvre la cuisine familiale pour les cours et fait le marché lui-même. C'est la recette de tajine de sa mère que vous préparerez.",
      es: "Abre la cocina de su familia para las clases y hace él mismo la compra. La receta de tajine que prepararás es la de su madre.",
      de: "Öffnet seine Familienküche für die Kochkurse und geht selbst auf den Markt. Das Tajine-Rezept, das du kochst, ist das seiner Mutter.",
      ar: "يفتح مطبخ عائلته لدروس الطبخ ويتسوّق بنفسه من السوق. وصفة الطاجين التي ستُعدّها هي وصفة والدته.",
    },
  },
];

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
