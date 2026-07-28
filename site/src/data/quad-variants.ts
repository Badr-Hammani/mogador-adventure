/**
 * THE QUAD SILO.
 *
 * Six dedicated pages beneath /activities/quad-biking-essaouira/, each
 * targeting one specific search intent. This is how a six-activity brand
 * out-depths the single-activity, exact-match-domain operators that currently
 * own this SERP — we can't beat "dianaquad-essaouira.com" on domain keyword
 * match, so we beat it on coverage.
 *
 * EN + FR only at launch.
 */

import type { Lang } from "../lib/i18n";
import { DEFAULT_LANG } from "../lib/i18n";
import type { QuadVariantKey } from "../lib/routes";

export interface QuadVariantCopy {
  /** Short label for nav chips and breadcrumbs. */
  label: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  body: string[];
  /** Optional bullet list rendered as key facts. */
  facts?: { label: string; value: string }[];
  /** Which price option in PRICING.quad this page is about, if any. */
  priceKey?: string;
}

/**
 * Hero photo per sub-page — language-independent, so it lives outside the copy.
 * Each is chosen to actually depict what the page is about rather than reusing
 * one generic quad shot six times.
 */
export const QUAD_VARIANT_PHOTOS: Record<QuadVariantKey, string> = {
  prices: "quad-fleet-beach-essaouira-wide.jpg",
  sunset: "quad-sunset-silhouette-dune-essaouira-wide.jpg",
  oneHour: "quad-single-dune-ride-essaouira-wide.jpg",
  twoHours: "quad-argan-forest-track-essaouira-wide.jpg",
  halfDay: "quad-far-dunes-essaouira-wide.jpg",
  diabat: "quad-diabat-borj-el-baroud-essaouira-wide.jpg",
};

const EN: Record<QuadVariantKey, QuadVariantCopy> = {
  prices: {
    label: "Prices",
    h1: "Quad Biking Essaouira — Prices for 2026",
    metaTitle: "Quad Essaouira Prices 2026 | From €30, No Deposit",
    metaDescription:
      "What quad biking costs in Essaouira: from €30 for an hour in Diabat up to €140 for a full day to the Sidi M'barek waterfall. Priced per quad, one or two riders.",
    intro:
      "Straight prices, no packages to decode and nothing added at the end. Here is what a quad tour in Essaouira costs with us, and what that price includes.",
    body: [
      "Most quad operators in Essaouira do not publish prices. You message them, they ask where you're staying, and the number arrives afterwards. We think that's a bad way to start, so ours are on this page and they are the prices you pay.",
      "Prices are per quad, not per person — that is the thing worth understanding before you compare us with anyone else. One machine costs the same whether you take the short Diabat loop or the full day to Sidi M'barek; what changes is whether one person rides it or two share it. A couple on the two-hour tour pays €70 for the pair, which works out at €35 each, so sharing is the cheaper way to ride if you're happy two-up.",
      "Every rate includes the quad and fuel, a guide, a helmet and the safety briefing before you set off. Closed shoes are required and reservation is required. Pickup from your hotel or riad in Essaouira or Diabat is available on request — ask when you book and we'll arrange it.",
      "The six options are genuinely different rides, not the same loop at different lengths. The hour stays on Diabat's beach and forest trails. Two hours adds the wild dunes and a natural freshwater spring. Three hours runs out to Cap Sim. The half day reaches the little fishing port of Taguenza. The two full days go further again — south along the shore to Sidi Kaouki, or out to the Sidi M'barek waterfall.",
      "Group rates: from six people we discount, and for larger groups we put a second guide on. Message us with numbers and dates and we'll quote properly.",
      "You pay on the day, in cash (dirham or euro) or by card. No deposit is required for standard bookings, and cancellation is free up to 24 hours before departure.",
    ],
    facts: [
      { label: "Priced per", value: "Quad — 1 or 2 riders, not per person" },
      { label: "Payment", value: "Cash or card, on the day" },
      { label: "Deposit", value: "None for standard bookings" },
      { label: "Pickup", value: "Available on request" },
      { label: "Required", value: "Closed shoes · advance reservation" },
      { label: "Included", value: "Guide, helmet, fuel, safety briefing" },
    ],
  },

  sunset: {
    label: "Sunset tour",
    h1: "Sunset Quad Tour in Essaouira — The Ride Locals Take",
    metaTitle: "Sunset Quad Tour Essaouira | Golden Hour Dunes €50",
    metaDescription:
      "The late-afternoon quad tour that finishes with the sun going into the Atlantic. Firmer sand, better light, cooler air. 2 hours — €50 for one rider, €70 for two sharing.",
    intro:
      "If you only do one quad ride in Essaouira, do this one. Firmer sand, long shadows across the dunes, and the sun going down over the Atlantic as you finish.",
    body: [
      "The sunset departure is not a marketing angle, it is genuinely the best conditions of the day. Sand that has been baking since morning firms up as the temperature drops, which makes the dunes easier and more fun to ride. The low sun throws long shadows that show you the shape of the terrain — at midday everything is flat white glare and you cannot read a ridge until you are on it.",
      "We leave about two and a half hours before sunset, which moves through the year: roughly 18:00 in June, 16:00 in December. We confirm your exact pickup time the day before, based on the real sunset for that date.",
      "The route runs the beach first while the light is still high, then climbs into the dune belt for the last hour so you finish on high ground facing west. We stop on the crest for mint tea and stay long enough to watch the whole thing go down.",
      "This is also the best ride for photographs by a wide margin, and since we film every tour and send you the footage the same evening, it is the one that ends up on people's feeds.",
      "It is the first slot to fill, especially May through September. Give us a day's notice if you can.",
    ],
    facts: [
      { label: "Departure", value: "About 2.5 hours before sunset" },
      { label: "Duration", value: "2 hours" },
      { label: "Best months", value: "All year — clearest skies Sept–Nov" },
      { label: "Book ahead", value: "1–2 days in summer" },
    ],
    priceKey: "quad-2h",
  },

  oneHour: {
    label: "1 hour",
    h1: "1-Hour Quad Tour in Essaouira — Short Beach & Dune Ride",
    metaTitle: "1 Hour Quad Essaouira | Diabat Beach & Forest €30",
    metaDescription:
      "The short quad tour in Essaouira: one hour on the beach and the first dunes. €30 for one rider, €45 for two sharing. Helmet and guide included.",
    intro:
      "The short one. An hour on the beach and the near dunes — enough to learn the machine and get the feeling, without committing your afternoon.",
    body: [
      "One hour is the right choice in three situations: you are not sure you will like quad biking and want to find out cheaply, you have children riding as passengers and an hour is genuinely their limit, or your day is already full and this is the gap you have.",
      "The route stays on the beach and the first line of dunes behind it. You still get the briefing, the practice loop and a guide to yourself, and you still ride real terrain rather than circuits in a yard — there is just less of it.",
      "What you miss compared with the two-hour tour is the argan forest section and the deep dune belt, which is where the ride gets properly interesting. If you are already fairly sure you'll enjoy it, take the two hours. Most people who book one hour tell us afterwards they wished they had.",
    ],
    facts: [
      { label: "Duration", value: "1 hour riding time" },
      { label: "Terrain", value: "Beach and near dunes" },
      { label: "Good for", value: "First try, kids as passengers, tight schedules" },
    ],
    priceKey: "quad-1h",
  },

  twoHours: {
    label: "2 hours",
    h1: "2-Hour Quad Tour in Essaouira — Beach, Dunes and Argan Forest",
    metaTitle: "2 Hour Quad Tour Essaouira | Dunes & Spring €50",
    metaDescription:
      "Our most-booked quad tour: two hours across beach, the full dune belt and the argan forest near Essaouira. €50 for one rider, €70 for two sharing.",
    intro:
      "The one most people book, and the one we recommend. Two hours gets you all three landscapes — beach, dune belt and argan forest — without rushing any of them.",
    body: [
      "Two hours is where the ride stops being a taster and becomes a proper tour. You have time to get comfortable on the machine in the first twenty minutes, which means the dune section afterwards is actually enjoyable rather than a test of nerve.",
      "The loop runs south along the hard-packed beach from Diabat, turns inland into the dune belt where you climb and descend real sand, then threads into the argan forest where the tracks narrow between the trees and the temperature drops noticeably. Then back along the beach.",
      "There is a stop roughly halfway for mint tea, water and photographs — usually on a high dune with a view down the coast. It also gives anyone who is finding the sand tiring a chance to reset.",
      "Booked as the late-afternoon slot, this is the sunset tour. Same route, same price, better light.",
    ],
    facts: [
      { label: "Duration", value: "2 hours riding, ~3 hours door to door" },
      { label: "Terrain", value: "Beach, dune belt and argan forest" },
      { label: "Stops", value: "Mint tea and photo stop halfway" },
      { label: "Popularity", value: "Our most-booked tour" },
    ],
    priceKey: "quad-2h",
  },

  halfDay: {
    label: "Half day",
    h1: "Half-Day Quad Tour in Essaouira — 4 Hours to the Far Dunes",
    metaTitle: "Half Day Quad Essaouira | Taguenza & Cap Sim €90",
    metaDescription:
      "Half a day by quad from Diabat: forest and dunes all the way to the little fishing port of Taguenza and Cap Sim. €90 for one rider, €110 for two.",
    intro:
      "Four hours and real distance. This is the tour that gets you past the dunes everyone rides and out to the country behind them.",
    body: [
      "The half day exists because the two-hour loop, good as it is, stays within sight of Essaouira. Four hours takes you south and inland to terrain most visitors never reach — bigger dunes, emptier beach, and tracks through the argan country where you'll pass more goats than people.",
      "We stop at a Berber village en route for tea, and there is a longer break with food around the two-hour mark. The pace is more relaxed than the shorter tours despite covering more ground, because there is time to actually stop and look at things.",
      "It is more demanding physically than people expect. Four hours of standing on the pegs over uneven sand works your legs and shoulders, and the sun is on you the whole time. If you have never ridden a quad before, this is not the one to start with — do the two hours first.",
      "Best booked to start early afternoon so you finish at sunset. In high summer we start earlier and take a longer midday break.",
    ],
    facts: [
      { label: "Duration", value: "4 hours riding, ~5 hours door to door" },
      { label: "Terrain", value: "Far dunes, argan country, remote beach" },
      { label: "Includes", value: "Berber village tea stop and a food break" },
      { label: "Fitness", value: "Moderate — some previous quad experience helps" },
    ],
    priceKey: "quad-half-day",
  },

  diabat: {
    label: "Diabat",
    h1: "Quad Biking from Diabat — Where Essaouira's Dune Rides Start",
    metaTitle: "Quad Diabat Essaouira | Dune Rides from the Village",
    metaDescription:
      "Diabat is where quad tours near Essaouira actually begin. The village, the Jimi Hendrix ruin, the Oued Ksob crossing and the dune belt behind it — explained.",
    intro:
      "Every quad tour worth taking near Essaouira starts in Diabat. Here is what the village is, how to get there, and why the sand behind it is the reason.",
    body: [
      "Diabat sits about five kilometres south of Essaouira, across the Oued Ksob river. It is a small Berber village that most visitors either skip entirely or hear about because of the Jimi Hendrix story — he stayed nearby in 1969, and the ruined Borj El Baroud fort on the beach below the village has been misattributed to him ever since. The fort is genuinely worth the walk; the Hendrix connection is mostly folklore.",
      "What makes Diabat matter for quad biking is what is behind it. The dune belt starts here and runs south — wide, high and continuous, in a way the flat town beach at Essaouira never is. You cannot ride that terrain from Essaouira itself without first crossing the river, which is why every serious quad operator in the area, us included, bases its departures at or near the village.",
      "Getting there takes about ten minutes by road from Essaouira, and our pickup is included, so in practice you do not need to think about it. If you want to go under your own steam, a petit taxi from Bab Doukkala is cheap and quick, or it is a walk of roughly an hour along the beach when the tide is out — check the tide first, the river crossing is not always passable.",
      "We recommend the late-afternoon departure from here specifically. The dunes behind Diabat face west, so the sun sets straight down the length of them.",
    ],
    facts: [
      { label: "Distance from Essaouira", value: "~5 km south, 10 min by road" },
      { label: "Getting there", value: "Pickup included, or petit taxi" },
      { label: "Also worth seeing", value: "Borj El Baroud ruin on the beach" },
      { label: "Terrain", value: "Start of the main dune belt" },
    ],
  },
};

const FR: Record<QuadVariantKey, QuadVariantCopy> = {
  prices: {
    label: "Prix",
    h1: "Quad Essaouira — Les prix 2026",
    metaTitle: "Quad Essaouira prix 2026 | Dès 30 €, sans acompte",
    metaDescription:
      "Ce que coûte le quad à Essaouira : de 30 € l'heure à Diabat jusqu'à 140 € la journée vers la cascade de Sidi M'barek. Tarif par quad, un ou deux pilotes.",
    intro:
      "Des prix clairs, pas de formules à décrypter et rien qui s'ajoute à la fin. Voici ce que coûte une sortie quad à Essaouira chez nous, et ce que ce prix comprend.",
    body: [
      "La plupart des loueurs de quad à Essaouira n'affichent pas leurs prix. Vous écrivez, on vous demande où vous logez, et le chiffre arrive ensuite. Nous trouvons que c'est une mauvaise façon de commencer : les nôtres sont sur cette page et ce sont ceux que vous payez.",
      "Les tarifs sont par quad, pas par personne — c'est ce qu'il faut comprendre avant de nous comparer à qui que ce soit. Une machine coûte le même prix que vous fassiez la petite boucle de Diabat ou la journée complète vers Sidi M'barek ; ce qui change, c'est qu'un seul pilote la monte ou que deux la partagent. Un couple sur la sortie de deux heures paie 70 € à deux, soit 35 € par personne : partager revient donc moins cher si le duo vous convient.",
      "Chaque tarif comprend le quad et le carburant, un guide, le casque et le briefing sécurité avant le départ. Les chaussures fermées sont obligatoires et la réservation est obligatoire. Le transfert depuis votre hôtel ou riad à Essaouira ou Diabat est possible sur demande — signalez-le à la réservation et nous l'organisons.",
      "Les six formules sont de vraies sorties différentes, pas la même boucle à des longueurs variables. L'heure reste sur la plage et les pistes forestières de Diabat. Deux heures ajoutent les dunes sauvages et une source d'eau douce naturelle. Trois heures poussent jusqu'au Cap Sim. La demi-journée atteint le petit port de pêche de Taguenza. Les deux journées complètes vont plus loin encore — vers le sud le long du rivage jusqu'à Sidi Kaouki, ou jusqu'à la cascade de Sidi M'barek.",
      "Tarifs groupes : à partir de six personnes nous appliquons une remise, et pour les groupes plus importants nous ajoutons un second guide. Écrivez-nous avec le nombre de participants et les dates pour un vrai devis.",
      "Vous payez le jour même, en espèces (dirhams ou euros) ou par carte. Aucun acompte n'est demandé pour les réservations standard, et l'annulation est gratuite jusqu'à 24 heures avant le départ.",
    ],
    facts: [
      { label: "Tarif", value: "Par quad — 1 ou 2 pilotes, pas par personne" },
      { label: "Paiement", value: "Espèces ou carte, le jour même" },
      { label: "Acompte", value: "Aucun pour les réservations standard" },
      { label: "Transfert", value: "Possible sur demande" },
      { label: "Obligatoire", value: "Chaussures fermées · réservation" },
      { label: "Inclus", value: "Guide, casque, carburant, briefing" },
    ],
  },

  sunset: {
    label: "Coucher de soleil",
    h1: "Quad au coucher du soleil à Essaouira — La sortie que font les locaux",
    metaTitle: "Quad coucher de soleil Essaouira | Heure dorée 50 €",
    metaDescription:
      "La sortie quad de fin d'après-midi qui se termine avec le soleil dans l'Atlantique. Sable plus ferme, meilleure lumière, air plus frais. 2 heures — 50 € pour un pilote, 70 € à deux.",
    intro:
      "Si vous ne faites qu'une sortie quad à Essaouira, faites celle-là. Sable plus ferme, longues ombres sur les dunes, et le soleil qui descend sur l'Atlantique au moment où vous terminez.",
    body: [
      "Le départ au coucher du soleil n'est pas un argument marketing : ce sont réellement les meilleures conditions de la journée. Le sable qui a cuit depuis le matin se raffermit quand la température baisse, ce qui rend les dunes plus faciles et plus amusantes. Le soleil rasant projette de longues ombres qui révèlent le relief — en milieu de journée, tout n'est qu'un éblouissement blanc et plat, et vous ne lisez une crête qu'une fois dessus.",
      "Nous partons environ deux heures et demie avant le coucher, qui se décale au fil de l'année : vers 18h en juin, 16h en décembre. Nous confirmons l'heure exacte de prise en charge la veille, en fonction du coucher réel de la date.",
      "Le parcours suit d'abord la plage tant que la lumière est haute, puis grimpe dans le cordon dunaire la dernière heure pour terminer en hauteur, face à l'ouest. On s'arrête sur la crête pour le thé à la menthe et on reste assez longtemps pour voir le soleil descendre entièrement.",
      "C'est aussi, de loin, la meilleure sortie pour les photos — et comme nous filmons chaque sortie et vous envoyons les images le soir même, c'est celle qui finit sur les réseaux.",
      "C'est le créneau qui se remplit en premier, surtout de mai à septembre. Prévenez-nous la veille si vous le pouvez.",
    ],
    facts: [
      { label: "Départ", value: "Environ 2h30 avant le coucher du soleil" },
      { label: "Durée", value: "2 heures" },
      { label: "Meilleurs mois", value: "Toute l'année — ciel le plus clair sept.–nov." },
      { label: "Réservation", value: "1 à 2 jours à l'avance en été" },
    ],
    priceKey: "quad-2h",
  },

  oneHour: {
    label: "1 heure",
    h1: "Sortie quad d'1 heure à Essaouira — Plage et premières dunes",
    metaTitle: "Quad 1 heure Essaouira | Plage et forêt de Diabat 30 €",
    metaDescription:
      "La sortie quad courte à Essaouira : une heure sur la plage et les premières dunes. 30 € pour un pilote, 45 € à deux. Casque et guide inclus.",
    intro:
      "La formule courte. Une heure sur la plage et les dunes proches — de quoi prendre en main la machine et attraper la sensation, sans y consacrer votre après-midi.",
    body: [
      "Une heure est le bon choix dans trois cas : vous n'êtes pas sûr d'aimer le quad et voulez tester sans trop dépenser, vous avez des enfants passagers pour qui une heure est la vraie limite, ou votre journée est déjà pleine et c'est le créneau dont vous disposez.",
      "Le parcours reste sur la plage et la première ligne de dunes derrière. Vous avez quand même le briefing, la boucle d'essai et un guide pour vous, et vous roulez sur du vrai terrain plutôt que sur un circuit fermé — il y en a simplement moins.",
      "Ce que vous manquez par rapport à la sortie de deux heures, c'est la partie forêt d'arganiers et le cœur du cordon dunaire, là où la sortie devient vraiment intéressante. Si vous êtes déjà à peu près sûr que ça va vous plaire, prenez les deux heures. La plupart de ceux qui réservent une heure nous disent après coup qu'ils auraient dû.",
    ],
    facts: [
      { label: "Durée", value: "1 heure de pilotage" },
      { label: "Terrain", value: "Plage et dunes proches" },
      { label: "Idéal pour", value: "Premier essai, enfants passagers, emploi du temps serré" },
    ],
    priceKey: "quad-1h",
  },

  twoHours: {
    label: "2 heures",
    h1: "Sortie quad de 2 heures à Essaouira — Plage, dunes et forêt d'arganiers",
    metaTitle: "Quad 2 heures Essaouira | Dunes et source 50 €",
    metaDescription:
      "Notre sortie quad la plus réservée : deux heures entre plage, cordon dunaire complet et forêt d'arganiers près d'Essaouira. 50 € pour un pilote, 70 € à deux.",
    intro:
      "Celle que la plupart des gens réservent, et celle que nous recommandons. Deux heures pour parcourir les trois paysages — plage, cordon dunaire et forêt d'arganiers — sans en bâcler aucun.",
    body: [
      "Deux heures, c'est le moment où la sortie cesse d'être une mise en bouche pour devenir une vraie excursion. Vous avez le temps de prendre vos marques sur la machine dans les vingt premières minutes, ce qui rend la partie dunes réellement plaisante ensuite plutôt qu'une épreuve de sang-froid.",
      "La boucle descend vers le sud sur la plage compacte depuis Diabat, bifurque vers l'intérieur dans le cordon dunaire où l'on grimpe et redescend du vrai sable, puis se faufile dans la forêt d'arganiers où les pistes se resserrent entre les arbres et la température baisse nettement. Puis retour par la plage.",
      "Une pause est prévue à peu près à mi-parcours pour le thé à la menthe, l'eau et les photos — généralement sur une dune haute avec vue sur la côte. Elle permet aussi à ceux que le sable fatigue de souffler.",
      "Réservée sur le créneau de fin d'après-midi, c'est la sortie coucher de soleil. Même parcours, même prix, meilleure lumière.",
    ],
    facts: [
      { label: "Durée", value: "2 h de pilotage, ~3 h porte à porte" },
      { label: "Terrain", value: "Plage, cordon dunaire et forêt d'arganiers" },
      { label: "Pauses", value: "Thé à la menthe et arrêt photo à mi-parcours" },
      { label: "Popularité", value: "Notre sortie la plus réservée" },
    ],
    priceKey: "quad-2h",
  },

  halfDay: {
    label: "Demi-journée",
    h1: "Quad demi-journée à Essaouira — 4 heures vers les dunes lointaines",
    metaTitle: "Quad demi-journée Essaouira | Taguenza et Cap Sim 90 €",
    metaDescription:
      "Une demi-journée de quad depuis Diabat : forêt et dunes jusqu'au petit port de pêche de Taguenza et au Cap Sim. 90 € pour un pilote, 110 € à deux.",
    intro:
      "Quatre heures et de la vraie distance. C'est la sortie qui vous emmène au-delà des dunes que tout le monde parcourt, jusqu'à l'arrière-pays.",
    body: [
      "La demi-journée existe parce que la boucle de deux heures, aussi bonne soit-elle, reste en vue d'Essaouira. Quatre heures vous emmènent au sud et vers l'intérieur, sur un terrain que la plupart des visiteurs n'atteignent jamais — des dunes plus hautes, une plage plus vide, et des pistes à travers l'arganeraie où vous croiserez plus de chèvres que de gens.",
      "Nous nous arrêtons en chemin dans un village berbère pour le thé, et une pause plus longue avec de quoi manger intervient vers la deuxième heure. Le rythme est plus détendu que sur les sorties courtes malgré la distance, parce qu'on a le temps de s'arrêter et de regarder.",
      "C'est plus exigeant physiquement qu'on ne l'imagine. Quatre heures debout sur les cale-pieds sur du sable irrégulier sollicitent les jambes et les épaules, et le soleil vous accompagne tout du long. Si vous n'avez jamais fait de quad, ce n'est pas par là qu'il faut commencer : faites d'abord les deux heures.",
      "À réserver de préférence en début d'après-midi pour terminer au coucher du soleil. En plein été, nous partons plus tôt avec une pause de midi allongée.",
    ],
    facts: [
      { label: "Durée", value: "4 h de pilotage, ~5 h porte à porte" },
      { label: "Terrain", value: "Dunes lointaines, arganeraie, plage isolée" },
      { label: "Comprend", value: "Thé dans un village berbère et pause repas" },
      { label: "Condition physique", value: "Modérée — une première expérience aide" },
    ],
    priceKey: "quad-half-day",
  },

  diabat: {
    label: "Diabat",
    h1: "Quad à Diabat — Là où commencent les sorties dans les dunes d'Essaouira",
    metaTitle: "Quad Diabat Essaouira | Sorties dunes depuis le village",
    metaDescription:
      "Diabat est le point de départ réel des sorties quad près d'Essaouira. Le village, la ruine dite de Jimi Hendrix, la traversée de l'oued Ksob et le cordon dunaire.",
    intro:
      "Toute sortie quad qui vaut la peine près d'Essaouira démarre à Diabat. Voici ce qu'est ce village, comment s'y rendre, et pourquoi le sable derrière lui fait toute la différence.",
    body: [
      "Diabat se trouve à environ cinq kilomètres au sud d'Essaouira, de l'autre côté de l'oued Ksob. C'est un petit village berbère que la plupart des visiteurs ignorent, ou dont ils entendent parler à cause de l'histoire de Jimi Hendrix — il a séjourné dans les environs en 1969, et la ruine du Borj El Baroud sur la plage en contrebas lui est attribuée à tort depuis. Le fort vaut vraiment la marche ; le lien avec Hendrix relève surtout du folklore.",
      "Ce qui rend Diabat essentiel pour le quad, c'est ce qui se trouve derrière. Le cordon dunaire commence ici et file vers le sud — large, haut et continu, ce que la plage plate d'Essaouira n'est jamais. On ne peut pas rouler sur ce terrain depuis Essaouira même sans traverser l'oued, et c'est pourquoi tous les loueurs sérieux du secteur, nous compris, basent leurs départs au village ou à proximité.",
      "Il faut une dizaine de minutes par la route depuis Essaouira, et notre transfert est inclus : en pratique, vous n'avez pas à y penser. Si vous voulez y aller par vos propres moyens, un petit taxi depuis Bab Doukkala est rapide et bon marché, ou comptez environ une heure de marche par la plage à marée basse — vérifiez la marée d'abord, la traversée de l'oued n'est pas toujours praticable.",
      "Nous recommandons particulièrement le départ de fin d'après-midi depuis ici. Les dunes derrière Diabat sont orientées à l'ouest : le soleil se couche donc dans leur axe.",
    ],
    facts: [
      { label: "Distance d'Essaouira", value: "~5 km au sud, 10 min par la route" },
      { label: "S'y rendre", value: "Transfert inclus, ou petit taxi" },
      { label: "À voir aussi", value: "La ruine du Borj El Baroud sur la plage" },
      { label: "Terrain", value: "Début du cordon dunaire principal" },
    ],
  },
};

const BY_LANG: Partial<Record<Lang, Record<QuadVariantKey, QuadVariantCopy>>> = {
  en: EN,
  fr: FR,
};

export function quadVariantCopy(
  key: QuadVariantKey,
  lang: Lang,
): QuadVariantCopy {
  return BY_LANG[lang]?.[key] ?? BY_LANG[DEFAULT_LANG]![key];
}

/** Display order for the silo nav chips on the main quad page. */
export const QUAD_VARIANT_ORDER: QuadVariantKey[] = [
  "prices",
  "sunset",
  "oneHour",
  "twoHours",
  "halfDay",
  "diabat",
];
