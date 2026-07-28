/**
 * Copy for standalone pages: the broad "things to do in Essaouira" landing
 * page (top-of-funnel keyword), the reviews page, and the legal pages.
 */

import type { Lang } from "../lib/i18n";
import { DEFAULT_LANG } from "../lib/i18n";

/* ------------------------------------------------------------------ */
/* Things to do in Essaouira — broad discovery page                    */
/* ------------------------------------------------------------------ */

export interface DiscoverCopy {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  seasonHeading: string;
  seasons: { period: string; text: string }[];
}

const DISCOVER: Partial<Record<Lang, DiscoverCopy>> = {
  en: {
    h1: "Things to Do in Essaouira — A Local's Guide",
    metaTitle: "Things to Do in Essaouira 2026 | Local's Guide",
    metaDescription:
      "What's actually worth doing in Essaouira, written by guides who live here: quad biking, surfing, camel rides, the medina, Diabat and Sidi Kaouki.",
    intro:
      "Essaouira is small enough to walk across in twenty minutes and varied enough to fill a week. Here's what we send our own friends to do, in the order we'd do it.",
    sections: [
      {
        heading: "The dunes, south of the medina",
        body: [
          "Cross the Oued Ksob to Diabat and the landscape changes completely — the flat town beach becomes a proper dune belt running south. It's the single most distinctive thing about Essaouira's geography and the reason quad biking and camel rides here are worth doing rather than just available.",
          "Go late afternoon. The sand firms up, the light turns, and the dunes face west so the sun sets straight down them.",
        ],
      },
      {
        heading: "The Atlantic, in the morning",
        body: [
          "The bay is protected by the headland and the Îles Purpuraires, which knocks the power out of the north-west swell before it reaches the beach. That makes Essaouira one of the gentler places in Morocco to learn to surf. Mornings are glassy; the wind builds through the afternoon, which is when the kitesurfers take over.",
          "If the bay goes flat, Sidi Kaouki is twenty-five minutes south and far more exposed.",
        ],
      },
      {
        heading: "The medina and the port",
        body: [
          "The medina is a UNESCO World Heritage site and, unusually for Morocco, laid out on a grid — so it's genuinely hard to get lost. Walk the ramparts at the Skala de la Ville in the late afternoon for the light.",
          "The fish market at the port is the real thing rather than a display. Pick something, hand it to one of the grills, and eat it twenty minutes later. It's the cheapest good meal in town.",
        ],
      },
      {
        heading: "The argan forest, inland",
        body: [
          "Argan trees grow almost nowhere else on earth. The groves start just behind the coast, and riding through them on horseback is the easiest way to see them properly. Yes, the goats really do climb the trees.",
        ],
      },
      {
        heading: "Eating, and cooking",
        body: [
          "Beyond the port grills, the thing worth doing is learning to make a tagine properly — which mostly means learning how little liquid goes in and why the conical lid does the work. A class with a local family costs about the same as dinner for two and lasts an afternoon.",
        ],
      },
    ],
    seasonHeading: "When to come",
    seasons: [
      {
        period: "April – June",
        text: "The best all-round window. Warm but not hot, smaller cleaner surf, everything running, and the town not yet full.",
      },
      {
        period: "July – August",
        text: "Busiest and windiest. Great for kitesurfing, harder for midday dune rides — go early morning or at sunset. Book activities a day or two ahead.",
      },
      {
        period: "September – November",
        text: "Our favourite. Clearest skies of the year, warm water, swell building, and the crowds gone.",
      },
      {
        period: "December – March",
        text: "Cooler and quieter, with the biggest and most consistent surf. Quads, horses and cooking classes all run normally; bring a jacket for sunset.",
      },
    ],
  },

  fr: {
    h1: "Que faire à Essaouira — le guide des gens d'ici",
    metaTitle: "Que faire à Essaouira 2026 | Guide local",
    metaDescription:
      "Ce qui vaut vraiment la peine à Essaouira, par des guides qui y vivent : quad, surf, balade à dos de chameau, médina, Diabat et Sidi Kaouki.",
    intro:
      "Essaouira se traverse à pied en vingt minutes et offre de quoi remplir une semaine. Voici ce que nous conseillons à nos propres amis, dans l'ordre où nous le ferions.",
    sections: [
      {
        heading: "Les dunes, au sud de la médina",
        body: [
          "Traversez l'oued Ksob vers Diabat et le paysage change du tout au tout — la plage plate de la ville devient un véritable cordon dunaire filant vers le sud. C'est ce qu'il y a de plus caractéristique dans la géographie d'Essaouira, et la raison pour laquelle le quad et les balades à dos de chameau y valent le détour, au lieu d'être simplement disponibles.",
          "Allez-y en fin d'après-midi. Le sable se raffermit, la lumière tourne, et les dunes sont orientées à l'ouest : le soleil se couche exactement dans leur axe.",
        ],
      },
      {
        heading: "L'Atlantique, le matin",
        body: [
          "La baie est protégée par le cap et les îles Purpuraires, qui cassent la puissance de la houle de nord-ouest avant qu'elle n'atteigne la plage. Cela fait d'Essaouira l'un des endroits les plus doux du Maroc pour apprendre à surfer. Les matinées sont lisses ; le vent monte l'après-midi, et les kitesurfeurs prennent le relais.",
          "Si la baie devient plate, Sidi Kaouki est à vingt-cinq minutes au sud et bien plus exposé.",
        ],
      },
      {
        heading: "La médina et le port",
        body: [
          "La médina est classée au patrimoine mondial de l'UNESCO et, chose rare au Maroc, tracée en damier — il est donc difficile de s'y perdre. Marchez sur les remparts de la Skala de la Ville en fin d'après-midi pour la lumière.",
          "Le marché aux poissons du port est authentique et non une vitrine. Choisissez, confiez votre poisson à l'un des grilleurs, et mangez-le vingt minutes plus tard. C'est le meilleur rapport qualité-prix de la ville.",
        ],
      },
      {
        heading: "La forêt d'arganiers, à l'intérieur",
        body: [
          "L'arganier ne pousse presque nulle part ailleurs sur terre. Les arganeraies commencent juste derrière la côte, et les traverser à cheval est la façon la plus simple de les voir vraiment. Et oui, les chèvres grimpent réellement dans les arbres.",
        ],
      },
      {
        heading: "Manger, et cuisiner",
        body: [
          "Au-delà des grillades du port, ce qui vaut la peine, c'est d'apprendre à faire un vrai tajine — ce qui revient surtout à comprendre le peu de liquide qu'on y met et pourquoi c'est le couvercle conique qui travaille. Un cours chez une famille d'ici coûte à peu près le prix d'un dîner pour deux et occupe un après-midi.",
        ],
      },
    ],
    seasonHeading: "Quand venir",
    seasons: [
      {
        period: "Avril – juin",
        text: "La meilleure fenêtre, tous critères confondus. Chaud sans excès, surf plus petit et plus propre, tout fonctionne, et la ville n'est pas encore pleine.",
      },
      {
        period: "Juillet – août",
        text: "Le plus fréquenté et le plus venteux. Idéal pour le kitesurf, plus difficile pour les dunes à midi — partez tôt le matin ou au coucher du soleil. Réservez un ou deux jours à l'avance.",
      },
      {
        period: "Septembre – novembre",
        text: "Notre période préférée. Le ciel le plus clair de l'année, une eau encore chaude, la houle qui revient, et les foules parties.",
      },
      {
        period: "Décembre – mars",
        text: "Plus frais et plus calme, avec la houle la plus grosse et la plus régulière. Quad, chevaux et cours de cuisine fonctionnent normalement ; prévoyez une veste pour le coucher du soleil.",
      },
    ],
  },

  es: {
    h1: "Qué hacer en Essaouira — la guía de los de aquí",
    metaTitle: "Qué hacer en Essaouira 2026 | Guía local",
    metaDescription:
      "Lo que de verdad merece la pena en Essaouira, escrito por guías que viven aquí: quad, surf, paseos en camello, la medina, Diabat y Sidi Kaouki.",
    intro:
      "Essaouira se cruza a pie en veinte minutos y da para llenar una semana. Esto es lo que recomendamos a nuestros propios amigos, en el orden en que lo haríamos.",
    sections: [
      {
        heading: "Las dunas, al sur de la medina",
        body: [
          "Cruza el río Ksob hacia Diabat y el paisaje cambia por completo: la playa plana del pueblo se convierte en un cordón de dunas de verdad que baja hacia el sur. Es lo más característico de la geografía de Essaouira y la razón por la que el quad y los paseos en camello aquí merecen la pena.",
          "Ve a última hora de la tarde. La arena se compacta, la luz cambia y las dunas miran al oeste, así que el sol se pone justo en su eje.",
        ],
      },
      {
        heading: "El Atlántico, por la mañana",
        body: [
          "La bahía está protegida por el cabo y las islas Purpurarias, que le quitan fuerza al oleaje del noroeste antes de llegar a la playa. Eso hace de Essaouira uno de los sitios más amables de Marruecos para aprender a surfear. Las mañanas son limpias; el viento sube por la tarde y toman el relevo los kitesurfistas.",
        ],
      },
      {
        heading: "La medina y el puerto",
        body: [
          "La medina es Patrimonio de la Humanidad y, algo poco común en Marruecos, tiene trazado en cuadrícula, así que cuesta perderse. Camina por las murallas de la Skala de la Ville a última hora de la tarde por la luz.",
          "La lonja del puerto es real, no un escaparate. Elige algo, dáselo a una de las parrillas y cómetelo veinte minutos después.",
        ],
      },
      {
        heading: "El bosque de argán, tierra adentro",
        body: [
          "El argán casi no crece en ningún otro lugar del mundo. Los bosques empiezan justo detrás de la costa, y recorrerlos a caballo es la forma más fácil de verlos bien. Y sí, las cabras se suben a los árboles.",
        ],
      },
    ],
    seasonHeading: "Cuándo venir",
    seasons: [
      {
        period: "Abril – junio",
        text: "La mejor ventana en conjunto. Cálido sin calor, surf pequeño y limpio, todo en marcha y el pueblo aún no lleno.",
      },
      {
        period: "Julio – agosto",
        text: "Lo más concurrido y ventoso. Ideal para kitesurf, más duro para las dunas al mediodía: ve temprano o al atardecer.",
      },
      {
        period: "Septiembre – noviembre",
        text: "Nuestra favorita. El cielo más limpio del año, agua templada, oleaje creciendo y sin multitudes.",
      },
      {
        period: "Diciembre – marzo",
        text: "Más fresco y tranquilo, con el mejor surf. Quad, caballos y cocina funcionan con normalidad; lleva chaqueta al atardecer.",
      },
    ],
  },

  de: {
    h1: "Was tun in Essaouira — der Guide der Einheimischen",
    metaTitle: "Was tun in Essaouira 2026 | Lokaler Guide",
    metaDescription:
      "Was sich in Essaouira wirklich lohnt, geschrieben von Guides, die hier leben: Quad, Surfen, Kamelritte, die Medina, Diabat und Sidi Kaouki.",
    intro:
      "Essaouira durchquert man in zwanzig Minuten zu Fuß und füllt trotzdem eine ganze Woche. Das hier schicken wir unseren eigenen Freunden — in der Reihenfolge, in der wir es machen würden.",
    sections: [
      {
        heading: "Die Dünen, südlich der Medina",
        body: [
          "Überquere den Oued Ksob nach Diabat, und die Landschaft ändert sich vollständig: Aus dem flachen Stadtstrand wird ein echter Dünengürtel, der nach Süden läuft. Das ist das Prägendste an Essaouiras Geografie und der Grund, warum Quad-Touren und Kamelritte hier wirklich lohnen.",
          "Geh am späten Nachmittag. Der Sand wird fester, das Licht dreht, und die Dünen zeigen nach Westen — die Sonne geht genau in ihrer Achse unter.",
        ],
      },
      {
        heading: "Der Atlantik, am Morgen",
        body: [
          "Die Bucht ist durch das Kap und die Îles Purpuraires geschützt, was dem Nordwestswell die Kraft nimmt, bevor er den Strand erreicht. Das macht Essaouira zu einem der sanfteren Orte in Marokko zum Surfenlernen. Morgens ist es glassy; der Wind baut sich nachmittags auf, dann übernehmen die Kitesurfer.",
        ],
      },
      {
        heading: "Medina und Hafen",
        body: [
          "Die Medina ist UNESCO-Welterbe und — ungewöhnlich für Marokko — schachbrettartig angelegt, man verläuft sich also kaum. Geh am späten Nachmittag wegen des Lichts über die Mauern der Skala de la Ville.",
          "Der Fischmarkt am Hafen ist echt und keine Kulisse. Aussuchen, an einen der Grills geben, zwanzig Minuten später essen.",
        ],
      },
      {
        heading: "Der Arganwald im Landesinneren",
        body: [
          "Arganbäume wachsen fast nirgendwo sonst auf der Welt. Die Haine beginnen direkt hinter der Küste, und zu Pferd hindurchzureiten ist der einfachste Weg, sie richtig zu sehen. Und ja, die Ziegen klettern tatsächlich in die Bäume.",
        ],
      },
    ],
    seasonHeading: "Wann kommen",
    seasons: [
      {
        period: "April – Juni",
        text: "Das beste Gesamtfenster. Warm, aber nicht heiß, kleinerer sauberer Surf, alles läuft, und die Stadt ist noch nicht voll.",
      },
      {
        period: "Juli – August",
        text: "Am vollsten und windigsten. Top zum Kitesurfen, schwieriger für Dünentouren mittags — früh morgens oder zum Sonnenuntergang.",
      },
      {
        period: "September – November",
        text: "Unsere Lieblingszeit. Klarster Himmel des Jahres, warmes Wasser, aufbauender Swell und keine Menschenmengen.",
      },
      {
        period: "Dezember – März",
        text: "Kühler und ruhiger, mit dem größten und beständigsten Surf. Quads, Pferde und Kochkurse laufen normal; Jacke für den Sonnenuntergang mitnehmen.",
      },
    ],
  },

  ar: {
    h1: "ماذا تفعل في الصويرة — دليل أهل المدينة",
    metaTitle: "ماذا تفعل في الصويرة 2026 | دليل محلي",
    metaDescription:
      "ما يستحق فعلاً في الصويرة، بقلم مرشدين يعيشون هنا: الكواد وركوب الأمواج والجمال والمدينة القديمة وديابات وسيدي كاوكي.",
    intro:
      "الصويرة تُقطع سيراً في عشرين دقيقة، ومع ذلك تكفي لملء أسبوع. هذا ما ننصح به أصدقاءنا، بالترتيب الذي نفعله نحن.",
    sections: [
      {
        heading: "الكثبان، جنوب المدينة القديمة",
        body: [
          "اعبر وادي القصب نحو ديابات ويتغير المشهد تماماً — يتحول شاطئ المدينة المسطح إلى حزام كثبان حقيقي يمتد جنوباً. هذا أبرز ما يميز جغرافية الصويرة، وهو سبب استحقاق جولات الكواد وركوب الجمال هنا.",
          "اذهب في نهاية العصر. يتماسك الرمل، وتتغير الإضاءة، والكثبان متجهة غرباً فتغيب الشمس في محورها تماماً.",
        ],
      },
      {
        heading: "الأطلسي، في الصباح",
        body: [
          "الخليج محمي بالرأس البحري وجزر بوربورير، ما يكسر قوة موج الشمال الغربي قبل وصوله إلى الشاطئ. لذلك تُعد الصويرة من أسهل أماكن المغرب لتعلّم ركوب الأمواج. الصباح هادئ وأملس؛ والرياح تشتد بعد الظهر فيتولى راكبو الطائرات الشراعية المشهد.",
        ],
      },
      {
        heading: "المدينة القديمة والميناء",
        body: [
          "المدينة القديمة مصنّفة ضمن التراث العالمي لليونسكو، وهي — على غير عادة المدن المغربية — مخططة بشكل شبكي، فيصعب أن تضيع فيها. امشِ على أسوار سقالة المدينة في نهاية العصر من أجل الضوء.",
          "سوق السمك في الميناء حقيقي لا واجهة سياحية. اختر سمكتك وسلّمها لأحد الشوّايين وكُلها بعد عشرين دقيقة.",
        ],
      },
      {
        heading: "غابة الأركان في الداخل",
        body: [
          "شجر الأركان لا ينبت تقريباً في أي مكان آخر في العالم. تبدأ الغابات خلف الساحل مباشرة، وعبورها على ظهر حصان أسهل طريقة لرؤيتها كما ينبغي. ونعم، الماعز يتسلق الأشجار فعلاً.",
        ],
      },
    ],
    seasonHeading: "متى تأتي",
    seasons: [
      {
        period: "أبريل – يونيو",
        text: "أفضل فترة على العموم. دافئة دون حرّ، وموج أصغر وأنظف، وكل شيء يعمل، والمدينة لم تمتلئ بعد.",
      },
      {
        period: "يوليوز – غشت",
        text: "الأكثر ازدحاماً ورياحاً. ممتاز للكايت سيرف، وأصعب للكثبان وقت الظهيرة — اخرج باكراً أو عند الغروب.",
      },
      {
        period: "شتنبر – نونبر",
        text: "فترتنا المفضلة. أصفى سماء في السنة، وماء دافئ، وموج يتصاعد، ولا ازدحام.",
      },
      {
        period: "دجنبر – مارس",
        text: "أبرد وأهدأ، مع أفضل موج وأكثره انتظاماً. الكواد والخيل ودروس الطبخ تعمل بشكل عادي؛ خذ سترة للغروب.",
      },
    ],
  },
};

export function discoverCopy(lang: Lang): DiscoverCopy {
  return DISCOVER[lang] ?? DISCOVER[DEFAULT_LANG]!;
}

/* ------------------------------------------------------------------ */
/* Legal pages                                                         */
/* ------------------------------------------------------------------ */

export type LegalKey = "privacy" | "terms" | "cancellation";

export interface LegalCopy {
  title: string;
  metaTitle: string;
  metaDescription: string;
  sections: { heading: string; body: string[] }[];
}

const LEGAL: Partial<Record<Lang, Record<LegalKey, LegalCopy>>> = {
  en: {
    privacy: {
      title: "Privacy Policy",
      metaTitle: "Privacy Policy | Mogador Adventures",
      metaDescription:
        "How Mogador Adventures handles the personal information you send us when booking an activity in Essaouira.",
      sections: [
        {
          heading: "What we collect",
          body: [
            "When you use the booking form on this site, the details you enter (name, email, chosen activity, date, number of people and your message) are used to build a WhatsApp or email message that you then choose to send. If a form backend is configured, a copy of those details is also emailed to us so an enquiry is not lost.",
            "We do not collect payment information on this website. Payment happens in person on the day of your activity.",
          ],
        },
        {
          heading: "Analytics",
          body: [
            "If website analytics is enabled, we use Google Analytics with IP anonymisation to understand which pages people find useful. We record when someone clicks a WhatsApp, phone or email link, but not what is said in any conversation that follows.",
          ],
        },
        {
          heading: "What we do with it",
          body: [
            "We use your details only to answer your enquiry and organise your activity. We do not sell your data, and we do not add you to a mailing list without you asking.",
          ],
        },
        {
          heading: "Photos and video",
          body: [
            "We film and photograph our tours and share the results with the guests on that tour. If you would prefer not to appear in anything we post publicly, tell your guide on the day and we will respect that without discussion.",
          ],
        },
        {
          heading: "Your rights and contact",
          body: [
            "You can ask us at any time what information we hold about you, and ask us to delete it. Write to the email address below and we will action it.",
          ],
        },
      ],
    },
    terms: {
      title: "Booking Terms",
      metaTitle: "Booking Terms | Mogador Adventures",
      metaDescription:
        "Booking terms for Mogador Adventures activities in Essaouira: confirmation, payment, safety requirements, age limits and liability.",
      sections: [
        {
          heading: "Making a booking",
          body: [
            "A booking is confirmed when we have replied to you on WhatsApp, Instagram, email or by phone agreeing a date, time and pickup point. A form submission on its own is an enquiry, not a confirmed booking.",
          ],
        },
        {
          heading: "Payment",
          body: [
            "Payment is due on the day of the activity, in cash (dirham or euro) or by card. No deposit is required for standard bookings. Groups of eight or more and multi-day packages may require a deposit, which we will state clearly before you commit.",
            "Prices published on this site are per person and include the equipment, guide and hotel pickup listed on each activity page.",
          ],
        },
        {
          heading: "Safety and suitability",
          body: [
            "You must follow your guide's instructions at all times. Helmets are provided for quad biking and horseback riding and must be worn.",
            "Quad drivers must meet our minimum age, which we confirm when you book; younger riders may travel as passengers. There is a weight limit of approximately 95 kg for horseback riding, for the welfare of the animals.",
            "You must tell us in advance about any medical condition, injury or pregnancy that could affect your participation. We may decline to run an activity if we believe it is unsafe for you or others, and in that case you pay nothing.",
            "Anyone under the influence of alcohol or drugs will not be permitted to drive a quad or ride a horse, and no refund is given in that case.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "We carry third-party liability cover for guided activities. Adventure activities carry inherent risk, and you take part at your own risk. We strongly recommend you hold travel insurance that covers the activities you are booking — check that quad biking in particular is not excluded from your policy.",
          ],
        },
        {
          heading: "Photos",
          body: [
            "We photograph and film our tours and may use the results to promote our activities. Tell your guide on the day if you would rather not appear.",
          ],
        },
      ],
    },
    cancellation: {
      title: "Cancellation Policy",
      metaTitle: "Cancellation Policy | Mogador Adventures",
      metaDescription:
        "Free cancellation up to 24 hours before departure. What happens if you cancel late, if you don't turn up, or if we cancel because of weather.",
      sections: [
        {
          heading: "Cancelling your booking",
          body: [
            "Cancellation is free up to 24 hours before your scheduled departure. Message us on WhatsApp — no explanation is needed and there is no fee.",
            "Because we do not take deposits on standard bookings, cancelling in good time costs you nothing at all.",
          ],
        },
        {
          heading: "Late cancellation and no-shows",
          body: [
            "If you cancel less than 24 hours before departure, or do not appear at the agreed pickup point, we may ask for a contribution toward the cost of holding the equipment and guide. In practice we are reasonable about genuine problems — a delayed flight or an unwell traveller is not a no-show.",
          ],
        },
        {
          heading: "If we cancel",
          body: [
            "Some activities depend on conditions. Surf lessons and beach yoga can be affected by weather and sea state; quad biking and horseback riding rarely are, since wind is not a problem for either.",
            "If we cancel for safety reasons, you can reschedule for free or pay nothing at all. We will always tell you as far in advance as we can rather than let you turn up.",
          ],
        },
        {
          heading: "Rescheduling",
          body: [
            "You can move a booking to another date at no cost, subject to availability. In July and August availability is tight, so tell us as early as you can.",
          ],
        },
      ],
    },
  },

  fr: {
    privacy: {
      title: "Politique de confidentialité",
      metaTitle: "Confidentialité | Mogador Adventures",
      metaDescription:
        "Comment Mogador Adventures traite les informations personnelles que vous nous transmettez lors d'une réservation à Essaouira.",
      sections: [
        {
          heading: "Ce que nous collectons",
          body: [
            "Lorsque vous utilisez le formulaire de réservation de ce site, les informations saisies (nom, email, activité choisie, date, nombre de personnes et votre message) servent à composer un message WhatsApp ou email que vous choisissez ensuite d'envoyer. Si un service de formulaire est configuré, une copie de ces informations nous est également envoyée par email afin qu'aucune demande ne se perde.",
            "Nous ne collectons aucune information de paiement sur ce site. Le paiement se fait sur place, le jour de l'activité.",
          ],
        },
        {
          heading: "Mesure d'audience",
          body: [
            "Si la mesure d'audience est activée, nous utilisons Google Analytics avec anonymisation de l'adresse IP pour comprendre quelles pages sont utiles. Nous enregistrons les clics sur les liens WhatsApp, téléphone ou email, mais pas le contenu des conversations qui suivent.",
          ],
        },
        {
          heading: "Ce que nous en faisons",
          body: [
            "Vos informations servent uniquement à répondre à votre demande et à organiser votre activité. Nous ne vendons pas vos données et ne vous inscrivons à aucune liste de diffusion sans votre demande.",
          ],
        },
        {
          heading: "Photos et vidéos",
          body: [
            "Nous filmons et photographions nos sorties et partageons les images avec les participants. Si vous préférez ne pas apparaître dans nos publications, dites-le à votre guide le jour même : nous le respecterons sans discussion.",
          ],
        },
        {
          heading: "Vos droits et contact",
          body: [
            "Vous pouvez à tout moment nous demander quelles informations nous détenons à votre sujet et en demander la suppression. Écrivez à l'adresse email ci-dessous et nous y donnerons suite.",
          ],
        },
      ],
    },
    terms: {
      title: "Conditions de réservation",
      metaTitle: "Conditions de réservation | Mogador Adventures",
      metaDescription:
        "Conditions de réservation des activités Mogador Adventures à Essaouira : confirmation, paiement, sécurité, âge minimum et responsabilité.",
      sections: [
        {
          heading: "Réserver",
          body: [
            "Une réservation est confirmée lorsque nous vous avons répondu sur WhatsApp, Instagram, par email ou par téléphone en convenant d'une date, d'une heure et d'un point de rendez-vous. L'envoi du formulaire seul constitue une demande, pas une réservation confirmée.",
          ],
        },
        {
          heading: "Paiement",
          body: [
            "Le paiement s'effectue le jour de l'activité, en espèces (dirhams ou euros) ou par carte. Aucun acompte n'est demandé pour les réservations standard. Les groupes de huit personnes et plus ainsi que les forfaits sur plusieurs jours peuvent nécessiter un acompte, que nous indiquerons clairement avant tout engagement.",
            "Les prix publiés sur ce site sont par personne et comprennent l'équipement, le guide et le transfert depuis l'hôtel mentionnés sur chaque page d'activité.",
          ],
        },
        {
          heading: "Sécurité et aptitude",
          body: [
            "Vous devez suivre les instructions de votre guide à tout moment. Les casques sont fournis pour le quad et l'équitation et leur port est obligatoire.",
            "Les conducteurs de quad doivent avoir l'âge minimum requis, que nous confirmons au moment de la réservation ; les plus jeunes peuvent monter en passager. Une limite de poids d'environ 95 kg s'applique à l'équitation, pour le bien-être des animaux.",
            "Vous devez nous signaler à l'avance toute condition médicale, blessure ou grossesse pouvant affecter votre participation. Nous pouvons refuser de réaliser une activité si nous l'estimons dangereuse pour vous ou pour autrui ; dans ce cas, vous ne payez rien.",
            "Toute personne sous l'influence de l'alcool ou de stupéfiants ne sera pas autorisée à conduire un quad ni à monter à cheval, sans remboursement.",
          ],
        },
        {
          heading: "Responsabilité",
          body: [
            "Nous disposons d'une couverture en responsabilité civile pour les activités guidées. Les activités d'aventure comportent un risque inhérent et vous y participez à vos propres risques. Nous recommandons vivement de souscrire une assurance voyage couvrant les activités réservées — vérifiez en particulier que le quad n'est pas exclu de votre contrat.",
          ],
        },
        {
          heading: "Photos",
          body: [
            "Nous photographions et filmons nos sorties et pouvons utiliser les images pour promouvoir nos activités. Signalez-le à votre guide le jour même si vous préférez ne pas apparaître.",
          ],
        },
      ],
    },
    cancellation: {
      title: "Politique d'annulation",
      metaTitle: "Politique d'annulation | Mogador Adventures",
      metaDescription:
        "Annulation gratuite jusqu'à 24 heures avant le départ. Que se passe-t-il en cas d'annulation tardive, d'absence, ou si nous annulons pour météo.",
      sections: [
        {
          heading: "Annuler votre réservation",
          body: [
            "L'annulation est gratuite jusqu'à 24 heures avant l'heure de départ prévue. Écrivez-nous sur WhatsApp — aucune justification n'est nécessaire et aucun frais n'est appliqué.",
            "Comme nous ne prenons pas d'acompte sur les réservations standard, annuler dans les délais ne vous coûte strictement rien.",
          ],
        },
        {
          heading: "Annulation tardive et absences",
          body: [
            "En cas d'annulation moins de 24 heures avant le départ, ou d'absence au point de rendez-vous convenu, nous pouvons demander une participation aux frais de mobilisation du matériel et du guide. Dans les faits, nous restons compréhensifs face aux vrais imprévus : un vol retardé ou un voyageur malade n'est pas une absence.",
          ],
        },
        {
          heading: "Si c'est nous qui annulons",
          body: [
            "Certaines activités dépendent des conditions. Les cours de surf et le yoga sur la plage peuvent être affectés par la météo et l'état de la mer ; le quad et l'équitation le sont rarement, le vent ne posant de problème ni à l'un ni à l'autre.",
            "Si nous annulons pour des raisons de sécurité, vous pouvez reprogrammer gratuitement ou ne rien payer du tout. Nous vous prévenons toujours le plus tôt possible plutôt que de vous laisser venir.",
          ],
        },
        {
          heading: "Reporter",
          body: [
            "Vous pouvez déplacer une réservation à une autre date sans frais, sous réserve de disponibilité. En juillet et août les disponibilités sont tendues : prévenez-nous le plus tôt possible.",
          ],
        },
      ],
    },
  },
};

export function legalCopy(key: LegalKey, lang: Lang): LegalCopy {
  return LEGAL[lang]?.[key] ?? LEGAL[DEFAULT_LANG]![key];
}
