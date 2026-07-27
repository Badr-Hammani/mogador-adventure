/**
 * Combination packages — the structural advantage a six-activity operator has
 * over the single-activity competitors that dominate this SERP.
 *
 * EN + FR only at launch (see FULL_LANGS in lib/routes.ts).
 */

import type { Lang } from "../lib/i18n";
import { DEFAULT_LANG } from "../lib/i18n";
import type { ActivityKey, PackageKey } from "../lib/routes";

export interface PackageCopy {
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  teaser: string;
  intro: string;
  body: string[];
  itinerary: { time: string; text: string }[];
  included: string[];
}

export interface PackageMeta {
  key: PackageKey;
  activities: ActivityKey[];
  order: number;
}

export const PACKAGE_META: Record<PackageKey, PackageMeta> = {
  quadCamel: { key: "quadCamel", activities: ["quad", "camel"], order: 1 },
  surfYoga: { key: "surfYoga", activities: ["surf", "yoga"], order: 2 },
  familyDay: { key: "familyDay", activities: ["camel", "cooking"], order: 3 },
  threeDay: {
    key: "threeDay",
    activities: ["quad", "surf", "camel", "cooking"],
    order: 4,
  },
};

const EN: Record<PackageKey, PackageCopy> = {
  quadCamel: {
    name: "Quad & Camel",
    h1: "Quad and Camel Combo in Essaouira — Half Day, Dunes to Sunset",
    metaTitle: "Quad & Camel Essaouira | Half-Day Combo €60",
    metaDescription:
      "Quad bike the dune belt, then ride a camel along the beach at sunset. Half-day combo in Essaouira, €60 per person — €10 less than booking separately.",
    teaser:
      "Ride the dunes fast, then come back slow along the beach as the sun drops.",
    intro:
      "The one we sell most. Two hours on a quad through the dune belt, then a camel back along the beach as the light goes — fast then slow, in the right order.",
    body: [
      "The order matters and we get asked about it a lot. Quad first, while there is still heat in the day and the sand is dry and fun. Camel second, because a camel ride is a wind-down and doing it the other way round leaves you wired at the end of a slow ride rather than calm at the end of a fast one.",
      "You cover the same dune belt on both, which sounds repetitive and isn't. On the quad you are reading the terrain, working the throttle and covering ground. On the camel, twenty minutes later at four kilometres an hour, you notice the things you rode straight past — the river mouth birds, the shape of the dunes from underneath, the fishing boats coming in.",
      "It finishes with mint tea on the sand while the sun goes into the Atlantic, and you are back at your riad by about eight in summer, six in winter.",
    ],
    itinerary: [
      { time: "15:30", text: "Pickup from your riad or hotel in Essaouira" },
      { time: "16:00", text: "Safety briefing and practice loop at Diabat" },
      { time: "16:15", text: "Two hours on the quads — beach, dunes, argan forest" },
      { time: "18:15", text: "Swap to camels at the dune camp" },
      { time: "18:30", text: "Camel ride along the beach toward sunset" },
      { time: "19:15", text: "Mint tea on the sand as the sun drops" },
      { time: "19:45", text: "Drop-off back at your accommodation" },
    ],
    included: [
      "2-hour guided quad tour with all safety gear",
      "1-hour camel ride with experienced handler",
      "Mint tea on the dunes",
      "Hotel pickup and drop-off",
      "Photos and video from both, sent the same evening",
    ],
  },

  surfYoga: {
    name: "Surf & Yoga",
    h1: "Surf and Yoga Day in Essaouira — Sunrise Flow, Morning Waves",
    metaTitle: "Surf & Yoga Essaouira | Full-Day Combo €45",
    metaDescription:
      "Sunrise yoga on the sand, then a small-group surf lesson in Essaouira's bay. Full-day combo, €45 per person, board and mat included. All levels welcome.",
    teaser: "Sunrise flow on the sand, then straight into the Atlantic.",
    intro:
      "An hour of yoga on the beach as the light comes up, then a surf lesson in the bay while the morning is still glassy. All levels, everything included.",
    body: [
      "There is a practical reason this pairing works, not just an aesthetic one. Essaouira's wind almost always builds through the day, so the water is at its cleanest early. And forty-five minutes of mobility work before you paddle out is the difference between a surf lesson your shoulders enjoy and one they complain about the next day.",
      "You start on the sand just after first light — joint work, sun salutations, a standing sequence, and a long rest with the sound of the break in front of you. Then breakfast, then wetsuits on for a two-and-a-half hour lesson in small groups.",
      "It suits complete beginners at both, and it suits people with a daily yoga practice who have never surfed. Say where you are with each when you book and we place you accordingly.",
    ],
    itinerary: [
      { time: "06:45", text: "Pickup from your accommodation" },
      { time: "07:15", text: "60-minute sunrise yoga session on the beach" },
      { time: "08:30", text: "Moroccan breakfast — bread, olive oil, mint tea" },
      { time: "09:15", text: "Wetsuits, boards and beach safety briefing" },
      { time: "09:45", text: "2.5-hour surf lesson in small groups" },
      { time: "12:30", text: "Drop-off back at your accommodation" },
    ],
    included: [
      "60-minute beach yoga session, mat and props provided",
      "Moroccan breakfast between the two",
      "2.5-hour surf lesson, board and wetsuit included",
      "Qualified instructors for both",
      "Hotel pickup and drop-off",
      "Photos from the session",
    ],
  },

  familyDay: {
    name: "Family Day",
    h1: "Family Day in Essaouira — Camel Ride and Cooking Class",
    metaTitle: "Family Day Essaouira | Camel + Cooking Class €40",
    metaDescription:
      "A full day in Essaouira built for families: a gentle camel ride on the beach, then a hands-on Moroccan cooking class. €40 per person, kids welcome from 4.",
    teaser:
      "A gentle beach ride and a kitchen full of bread dough — the day that works for every age.",
    intro:
      "Built for families with children who are too young for quads: a calm camel ride along the beach in the morning, then an afternoon making bread and tagine in a family kitchen.",
    body: [
      "The honest problem with adventure activities and small children is that most of them have an age floor. Quads need a driver of sixteen. Surf lessons need a swimmer. This day is what we put together for the families who kept asking us what their six-year-old could actually do.",
      "The camel ride is the gentlest thing we run — a walk along the beach, children in front of a parent or led by the handler, no experience or fitness required at all. Then the cooking class, which turns out to be the part children remember, because kneading dough and shaping bread is exactly the kind of mess that is normally forbidden.",
      "Portions, pace and timing are adjusted for the group. If your children are very small, tell us their ages and we will shorten the ride and start the kitchen earlier.",
    ],
    itinerary: [
      { time: "09:30", text: "Pickup from your accommodation" },
      { time: "10:00", text: "Camel ride along the beach from Diabat" },
      { time: "11:15", text: "Mint tea and a stop on the dunes" },
      { time: "12:00", text: "Market walk through the medina with your host" },
      { time: "13:00", text: "Cooking class — bread, salads and tagine" },
      { time: "15:30", text: "Eat everything you made, family-style" },
      { time: "16:30", text: "Drop-off back at your accommodation" },
    ],
    included: [
      "1-hour camel ride with handler, suitable from age 4",
      "Guided market visit in the medina",
      "Hands-on cooking class with your own tagine",
      "Full lunch — salads, tagine, bread, mint tea",
      "Hotel pickup and drop-off",
      "Photos from the whole day",
    ],
  },

  threeDay: {
    name: "3-Day Adventure",
    h1: "3-Day Essaouira Adventure — Quad, Surf, Camel and Cooking",
    metaTitle: "3-Day Essaouira Adventure | Quad, Surf, Camel €195",
    metaDescription:
      "Three days, four activities: quad biking the dunes, surf lessons, a sunset camel ride and a Moroccan cooking class. €195 per person, all equipment included.",
    teaser:
      "Everything we do, spread across three days, in the order that actually works.",
    intro:
      "Four activities across three days, sequenced so nothing clashes and nothing leaves you too wrecked for the next thing. The complete Essaouira, booked once.",
    body: [
      "Most visitors to Essaouira have three days and end up doing one activity, because organising four separate bookings with four separate operators in a town where everything runs on WhatsApp is more effort than a holiday should be. This is the fix.",
      "The sequencing is deliberate. Surf goes on the first morning, when the water is cleanest and you are fresh, because it is the most physical thing on the list. Quads go on day two in the afternoon so the sand is firm and you finish at sunset. The camel ride and cooking class land on day three, when a slow morning and a long lunch is exactly what you want.",
      "It is per person and it is roughly forty euros less than booking the four separately. You can swap any activity for horseback riding or yoga at no extra cost — just tell us when you book.",
    ],
    itinerary: [
      { time: "Day 1, am", text: "Surf lesson, 2.5 hours in small groups" },
      { time: "Day 1, pm", text: "Free — we'll tell you where to eat" },
      { time: "Day 2, pm", text: "Quad tour, 3 hours through dunes and argan forest" },
      { time: "Day 2, sunset", text: "Finish on the dunes with mint tea" },
      { time: "Day 3, am", text: "Market walk and Moroccan cooking class" },
      { time: "Day 3, pm", text: "Sunset camel ride along the beach" },
    ],
    included: [
      "2.5-hour surf lesson with board and wetsuit",
      "3-hour guided quad tour with all safety gear",
      "1-hour sunset camel ride",
      "Moroccan cooking class with market visit and full meal",
      "Hotel pickup and drop-off for every activity",
      "Photos and video across all three days",
      "Free swap of any activity for horseback riding or yoga",
    ],
  },
};

const FR: Record<PackageKey, PackageCopy> = {
  quadCamel: {
    name: "Quad et chameau",
    h1: "Combiné quad et chameau à Essaouira — Demi-journée, des dunes au coucher du soleil",
    metaTitle: "Quad & chameau Essaouira | Demi-journée 60 €",
    metaDescription:
      "Quad sur le cordon dunaire, puis balade à dos de chameau sur la plage au coucher du soleil. Demi-journée à Essaouira, 60 € par personne au lieu de 70 €.",
    teaser:
      "Traversez les dunes à vive allure, puis rentrez lentement sur la plage quand le soleil descend.",
    intro:
      "Notre formule la plus demandée. Deux heures de quad dans le cordon dunaire, puis retour à dos de chameau sur la plage quand la lumière tombe — vite, puis lentement, dans le bon ordre.",
    body: [
      "L'ordre a son importance et on nous pose souvent la question. Le quad d'abord, tant qu'il reste de la chaleur dans la journée et que le sable est sec et joueur. Le chameau ensuite, parce qu'une balade à dos de chameau est une décompression : dans l'autre sens, vous finissez excité au terme d'une balade lente plutôt qu'apaisé au terme d'une sortie rapide.",
      "Vous parcourez le même cordon dunaire dans les deux cas, ce qui semble répétitif et ne l'est pas. Sur le quad, vous lisez le terrain, vous gérez les gaz, vous avalez du kilomètre. Sur le chameau, vingt minutes plus tard à quatre kilomètres à l'heure, vous remarquez tout ce que vous aviez dépassé sans le voir — les oiseaux de l'embouchure, la forme des dunes vue d'en bas, les barques qui rentrent.",
      "Ça se termine par un thé à la menthe sur le sable pendant que le soleil plonge dans l'Atlantique, et vous êtes rentré vers 20h en été, 18h en hiver.",
    ],
    itinerary: [
      { time: "15h30", text: "Prise en charge à votre riad ou hôtel à Essaouira" },
      { time: "16h00", text: "Briefing sécurité et boucle d'essai à Diabat" },
      { time: "16h15", text: "Deux heures de quad — plage, dunes, forêt d'arganiers" },
      { time: "18h15", text: "Passage aux chameaux au campement des dunes" },
      { time: "18h30", text: "Balade à dos de chameau sur la plage vers le couchant" },
      { time: "19h15", text: "Thé à la menthe sur le sable au coucher du soleil" },
      { time: "19h45", text: "Retour à votre hébergement" },
    ],
    included: [
      "Sortie quad guidée de 2 heures avec tout l'équipement de sécurité",
      "Balade à dos de chameau d'1 heure avec chamelier expérimenté",
      "Thé à la menthe dans les dunes",
      "Transfert aller-retour depuis votre hôtel",
      "Photos et vidéos des deux activités, envoyées le soir même",
    ],
  },

  surfYoga: {
    name: "Surf et yoga",
    h1: "Journée surf et yoga à Essaouira — Flow au lever du soleil, vagues du matin",
    metaTitle: "Surf & yoga Essaouira | Journée complète 45 €",
    metaDescription:
      "Yoga au lever du soleil sur le sable, puis cours de surf en petit groupe dans la baie d'Essaouira. Journée complète, 45 € par personne, planche et tapis inclus.",
    teaser: "Flow au lever du soleil sur le sable, puis droit dans l'Atlantique.",
    intro:
      "Une heure de yoga sur la plage pendant que le jour se lève, puis un cours de surf dans la baie tant que la matinée reste lisse. Tous niveaux, tout est inclus.",
    body: [
      "Il y a une vraie raison pratique à cette association, pas seulement esthétique. Le vent d'Essaouira monte presque toujours au fil de la journée, donc l'eau est au plus propre tôt le matin. Et quarante-cinq minutes de mobilité avant de ramer, c'est la différence entre un cours de surf que vos épaules apprécient et un cours dont elles se plaignent le lendemain.",
      "Vous commencez sur le sable juste après les premières lueurs — travail articulaire, salutations au soleil, une séquence debout, et une longue relaxation avec le bruit du ressac devant vous. Puis le petit-déjeuner, puis la combinaison pour deux heures et demie de cours en petit groupe.",
      "La formule convient aux grands débutants dans les deux disciplines, comme à ceux qui pratiquent le yoga quotidiennement sans avoir jamais surfé. Dites-nous où vous en êtes dans chacune et nous vous placerons en conséquence.",
    ],
    itinerary: [
      { time: "06h45", text: "Prise en charge à votre hébergement" },
      { time: "07h15", text: "Séance de yoga de 60 minutes au lever du soleil" },
      { time: "08h30", text: "Petit-déjeuner marocain — pain, huile d'olive, thé à la menthe" },
      { time: "09h15", text: "Combinaisons, planches et briefing sécurité" },
      { time: "09h45", text: "Cours de surf de 2h30 en petit groupe" },
      { time: "12h30", text: "Retour à votre hébergement" },
    ],
    included: [
      "Séance de yoga de 60 minutes sur la plage, tapis et accessoires fournis",
      "Petit-déjeuner marocain entre les deux",
      "Cours de surf de 2h30, planche et combinaison incluses",
      "Moniteurs diplômés pour les deux activités",
      "Transfert aller-retour depuis votre hôtel",
      "Photos de la session",
    ],
  },

  familyDay: {
    name: "Journée en famille",
    h1: "Journée en famille à Essaouira — Balade à dos de chameau et cours de cuisine",
    metaTitle: "Journée famille Essaouira | Chameau + cuisine 40 €",
    metaDescription:
      "Une journée à Essaouira pensée pour les familles : balade tranquille à dos de chameau sur la plage, puis cours de cuisine marocaine. 40 €, enfants dès 4 ans.",
    teaser:
      "Une balade douce sur la plage et une cuisine pleine de pâte à pain — la journée qui marche à tout âge.",
    intro:
      "Conçue pour les familles avec des enfants trop jeunes pour le quad : une balade calme à dos de chameau sur la plage le matin, puis un après-midi à faire du pain et un tajine dans une cuisine de famille.",
    body: [
      "Le vrai problème des activités d'aventure avec de jeunes enfants, c'est l'âge minimum. Le quad demande seize ans pour piloter. Le surf demande de savoir nager. Cette journée, c'est ce que nous avons monté pour toutes les familles qui nous demandaient ce que leur enfant de six ans pouvait réellement faire.",
      "La balade à dos de chameau est ce que nous proposons de plus doux — au pas sur la plage, les enfants devant un parent ou menés par le chamelier, sans aucune condition physique ni expérience. Puis le cours de cuisine, qui se révèle être la partie dont les enfants se souviennent, parce que pétrir la pâte et façonner le pain est exactement le genre de désordre normalement interdit.",
      "Les portions, le rythme et les horaires sont adaptés au groupe. Si vos enfants sont très petits, indiquez-nous leur âge et nous raccourcirons la balade pour commencer la cuisine plus tôt.",
    ],
    itinerary: [
      { time: "09h30", text: "Prise en charge à votre hébergement" },
      { time: "10h00", text: "Balade à dos de chameau sur la plage depuis Diabat" },
      { time: "11h15", text: "Thé à la menthe et pause dans les dunes" },
      { time: "12h00", text: "Marché dans la médina avec votre hôte" },
      { time: "13h00", text: "Cours de cuisine — pain, salades et tajine" },
      { time: "15h30", text: "Dégustation de tout ce que vous avez préparé" },
      { time: "16h30", text: "Retour à votre hébergement" },
    ],
    included: [
      "Balade à dos de chameau d'1 heure avec chamelier, dès 4 ans",
      "Visite guidée du marché de la médina",
      "Cours de cuisine pratique avec votre propre tajine",
      "Déjeuner complet — salades, tajine, pain, thé à la menthe",
      "Transfert aller-retour depuis votre hôtel",
      "Photos de toute la journée",
    ],
  },

  threeDay: {
    name: "Aventure 3 jours",
    h1: "Aventure 3 jours à Essaouira — Quad, surf, chameau et cuisine",
    metaTitle: "Aventure 3 jours Essaouira | Quad, surf, chameau 195 €",
    metaDescription:
      "Trois jours, quatre activités : quad dans les dunes, cours de surf, balade à dos de chameau au coucher du soleil et cours de cuisine. 195 € par personne.",
    teaser:
      "Tout ce que nous proposons, réparti sur trois jours, dans l'ordre qui fonctionne vraiment.",
    intro:
      "Quatre activités sur trois jours, agencées pour que rien ne se chevauche et que rien ne vous laisse trop épuisé pour la suite. Essaouira au complet, réservée en une fois.",
    body: [
      "La plupart des visiteurs disposent de trois jours à Essaouira et n'en font qu'une seule activité, parce qu'organiser quatre réservations distinctes avec quatre prestataires différents dans une ville où tout passe par WhatsApp demande plus d'énergie qu'on n'en a en vacances. Voilà la solution.",
      "L'agencement est réfléchi. Le surf le premier matin, quand l'eau est la plus propre et que vous êtes frais, parce que c'est le plus physique de la liste. Le quad le deuxième jour en après-midi, pour un sable ferme et une fin au coucher du soleil. Le chameau et la cuisine le troisième jour, quand une matinée lente et un long déjeuner sont exactement ce qu'il vous faut.",
      "Le tarif est par personne et représente environ quarante euros de moins que les quatre activités réservées séparément. Vous pouvez remplacer n'importe quelle activité par l'équitation ou le yoga sans supplément — dites-le simplement à la réservation.",
    ],
    itinerary: [
      { time: "J1, matin", text: "Cours de surf, 2h30 en petit groupe" },
      { time: "J1, après-midi", text: "Libre — on vous dira où manger" },
      { time: "J2, après-midi", text: "Sortie quad, 3 heures dans les dunes et la forêt d'arganiers" },
      { time: "J2, couchant", text: "Fin dans les dunes autour d'un thé à la menthe" },
      { time: "J3, matin", text: "Marché et cours de cuisine marocaine" },
      { time: "J3, soir", text: "Balade à dos de chameau au coucher du soleil" },
    ],
    included: [
      "Cours de surf de 2h30 avec planche et combinaison",
      "Sortie quad guidée de 3 heures avec tout l'équipement",
      "Balade à dos de chameau d'1 heure au coucher du soleil",
      "Cours de cuisine marocaine avec marché et repas complet",
      "Transferts hôtel pour chaque activité",
      "Photos et vidéos sur les trois jours",
      "Échange gratuit de toute activité contre l'équitation ou le yoga",
    ],
  },
};

const BY_LANG: Partial<Record<Lang, Record<PackageKey, PackageCopy>>> = {
  en: EN,
  fr: FR,
};

export function packageCopy(key: PackageKey, lang: Lang): PackageCopy {
  return BY_LANG[lang]?.[key] ?? BY_LANG[DEFAULT_LANG]![key];
}

export const ORDERED_PACKAGES = (
  Object.keys(PACKAGE_META) as PackageKey[]
).sort((a, b) => PACKAGE_META[a].order - PACKAGE_META[b].order);
