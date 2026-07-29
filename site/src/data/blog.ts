/**
 * Journal posts.
 *
 * Content-marketing pages that target discovery and mid-funnel keywords the
 * activity pages can't ("best time of day to ride the dunes", "do you need a
 * licence"). Each post links back to the activity it supports.
 *
 * EN + FR at launch. Adding a post = adding an entry here; routing, sitemap
 * and hreflang follow automatically.
 */

import type { Lang } from "../lib/i18n";
import type { ActivityKey } from "../lib/routes";

export interface PostBlock {
  type: "p" | "h2" | "list";
  text?: string;
  items?: string[];
}

export interface PostCopy {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  blocks: PostBlock[];
}

export interface Post {
  id: string;
  date: string;
  updated?: string;
  relatedActivity: ActivityKey;
  photo: string | null;
  copy: Partial<Record<Lang, PostCopy>>;
}

export const POSTS: Post[] = [
  {
    id: "best-time-to-ride-dunes",
    date: "2026-06-12",
    relatedActivity: "quad",
    photo: "quad-sunset-silhouette-dune-essaouira-wide.jpg",
    copy: {
      en: {
        slug: "best-time-of-day-to-ride-the-dunes-essaouira",
        title: "The best time of day to ride the dunes in Essaouira",
        metaTitle: "Best Time to Ride the Dunes in Essaouira | Guide",
        metaDescription:
          "Morning, midday or sunset? A guide who rides Essaouira's dune belt daily explains when the sand, light and temperature are actually best — and when to avoid.",
        excerpt:
          "Midday looks fine on paper and is the worst slot of the day. Here's why, from someone who rides this sand every afternoon.",
        category: "Desert",
        blocks: [
          {
            type: "p",
            text: "People book the midday slot because it fits neatly between breakfast and dinner. It is, reliably, the worst two hours of the day to be on a quad in the dune belt, and every guide here will tell you the same thing.",
          },
          { type: "h2", text: "Why midday is the weakest slot" },
          {
            type: "p",
            text: "Three things go wrong at once. The sand is at its driest and softest, so the quads dig in more and climbing is harder work. The sun is directly overhead, which flattens the light completely — you cannot see the shape of a dune until you are on it, which makes reading the terrain genuinely difficult. And in July and August it is simply hot, with no shade anywhere in the dune belt.",
          },
          {
            type: "p",
            text: "None of that makes it dangerous. It just makes it less fun than the same ride four hours later, for the same money.",
          },
          { type: "h2", text: "Late afternoon is the answer" },
          {
            type: "p",
            text: "As the temperature drops, moisture returns to the surface of the sand and it firms up. Firmer sand means better grip, easier climbs and more confidence. At the same time the sun drops toward the Atlantic and starts throwing long shadows across the dunes, which is what makes the terrain readable — you can suddenly see every ridge, bowl and face ahead of you.",
          },
          {
            type: "p",
            text: "Then there's the obvious part: you finish with the sun going into the ocean. The dunes behind Diabat face west, so the sunset happens straight down the length of them.",
          },
          { type: "h2", text: "When morning wins" },
          {
            type: "list",
            items: [
              "July and August, when even the late afternoon can be hot — a 10:00 start is the coolest ride we run",
              "If you're pairing the ride with something else and want your evening free",
              "If you want the dunes genuinely quiet — the crowds build through the afternoon, not the morning",
              "Windy days: Essaouira's wind builds through the afternoon, and while wind doesn't affect quads much, it does affect how much sand ends up in your face",
            ],
          },
          { type: "h2", text: "What this means for booking" },
          {
            type: "p",
            text: "Sunset slots fill first, especially May through September. If your dates are fixed, message us a day or two ahead rather than the morning of. If you're flexible, tell us and we'll put you on the best slot in your window rather than the first one that's free.",
          },
        ],
      },
      fr: {
        slug: "meilleur-moment-pour-rouler-dans-les-dunes-essaouira",
        title: "Le meilleur moment de la journée pour rouler dans les dunes à Essaouira",
        metaTitle: "Quand rouler dans les dunes d'Essaouira | Guide",
        metaDescription:
          "Matin, midi ou coucher de soleil ? Un guide qui roule chaque jour sur le cordon dunaire d'Essaouira explique quand le sable, la lumière et la température sont vraiment au mieux.",
        excerpt:
          "Le créneau de midi paraît pratique et c'est le pire de la journée. Voici pourquoi, par quelqu'un qui roule sur ce sable tous les après-midis.",
        category: "Désert",
        blocks: [
          {
            type: "p",
            text: "Les gens réservent le créneau de midi parce qu'il s'intercale bien entre le petit-déjeuner et le dîner. C'est pourtant, sans exception, la plus mauvaise tranche de la journée pour être en quad dans le cordon dunaire, et tous les guides d'ici vous diront la même chose.",
          },
          { type: "h2", text: "Pourquoi midi est le créneau le plus faible" },
          {
            type: "p",
            text: "Trois choses se dégradent en même temps. Le sable est au plus sec et au plus mou : les quads s'enfoncent davantage et les montées demandent plus d'effort. Le soleil est au zénith, ce qui aplatit complètement la lumière — on ne distingue plus la forme d'une dune avant d'être dessus, et lire le terrain devient réellement difficile. Et en juillet-août, il fait tout simplement chaud, sans la moindre ombre dans les dunes.",
          },
          {
            type: "p",
            text: "Rien de dangereux là-dedans. C'est juste moins agréable que la même sortie quatre heures plus tard, pour le même prix.",
          },
          { type: "h2", text: "La fin d'après-midi est la réponse" },
          {
            type: "p",
            text: "Quand la température baisse, l'humidité remonte en surface et le sable se raffermit. Un sable plus ferme, c'est plus d'accroche, des montées plus faciles et plus de confiance. Au même moment, le soleil descend vers l'Atlantique et projette de longues ombres sur les dunes : le relief redevient lisible, et vous voyez d'un coup chaque crête, chaque cuvette et chaque pente devant vous.",
          },
          {
            type: "p",
            text: "Et puis il y a l'évidence : vous terminez avec le soleil qui plonge dans l'océan. Les dunes derrière Diabat sont orientées à l'ouest, donc le coucher se produit exactement dans leur axe.",
          },
          { type: "h2", text: "Quand le matin l'emporte" },
          {
            type: "list",
            items: [
              "En juillet et août, quand même la fin d'après-midi peut être chaude — un départ à 10h est la sortie la plus fraîche que nous proposons",
              "Si vous enchaînez avec autre chose et voulez garder votre soirée libre",
              "Si vous voulez les dunes vraiment tranquilles — l'affluence monte l'après-midi, pas le matin",
              "Les jours de vent : le vent d'Essaouira monte au fil de l'après-midi, et s'il gêne peu les quads, il détermine la quantité de sable que vous prendrez au visage",
            ],
          },
          { type: "h2", text: "Ce que cela implique pour réserver" },
          {
            type: "p",
            text: "Les créneaux du coucher de soleil partent en premier, surtout de mai à septembre. Si vos dates sont fixes, écrivez-nous un ou deux jours avant plutôt que le matin même. Si vous êtes flexible, dites-le : nous vous placerons sur le meilleur créneau de votre fenêtre plutôt que sur le premier disponible.",
          },
        ],
      },
    },
  },

  {
    id: "quad-price-guide",
    date: "2026-06-02",
    relatedActivity: "quad",
    photo: "quad-fleet-beach-essaouira-wide.jpg",
    copy: {
      en: {
        slug: "quad-biking-essaouira-price-guide",
        title: "What quad biking in Essaouira should actually cost",
        metaTitle: "Quad Biking Essaouira: Real Price Guide 2026",
        metaDescription:
          "What you should expect to pay for a quad tour in Essaouira, what's usually included, what gets added later, and how to tell a fair quote from a bad one.",
        excerpt:
          "Almost nobody here publishes prices. Here's the real range, what's included, and the add-ons to watch for.",
        category: "Desert",
        blocks: [
          {
            type: "p",
            text: "If you search for quad tours in Essaouira you'll find a dozen operators and almost no prices. You message, you're asked where you're staying, and a number comes back. That's not necessarily dishonest — but it does make it hard to know whether you're being quoted well.",
          },
          { type: "h2", text: "The going rate" },
          {
            type: "list",
            items: [
              "1 hour: €25–35 per person",
              "2 hours: €40–50 per person",
              "3 hours: €55–70 per person",
              "Half day (4 hours): €75–90 per person",
            ],
          },
          {
            type: "p",
            text: "Below that range, ask what's been removed — usually the guide ratio, the pickup, or the quality of the machines. Above it, you should be getting something specific in return: a private guide, a longer route, or a genuinely better bike.",
          },
          { type: "h2", text: "What a fair price includes" },
          {
            type: "list",
            items: [
              "The quad and fuel — no separate fuel surcharge at the end",
              "A guide, with a small enough group that they can actually help you",
              "Helmet, goggles and protective clothing",
              "A safety briefing and a practice loop before you go out",
              "Hotel or riad pickup within Essaouira and Diabat",
            ],
          },
          { type: "h2", text: "Things that get added later" },
          {
            type: "p",
            text: "The three most common surprises are a fuel supplement, a charge for photos taken during your ride, and a pickup fee if you're staying outside the medina. None of these should exist. Ask before you book — the answer tells you a lot about how the rest of the experience will go.",
          },
          { type: "h2", text: "Two people, one quad" },
          {
            type: "p",
            text: "Two people can share one quad, and it is priced per machine rather than per head — so sharing is the cheaper way to ride. Our two-hour tour is €50 for one rider or €70 for two, which is €35 each. Only the driver needs to meet the minimum age.",
          },
          { type: "h2", text: "Deposits" },
          {
            type: "p",
            text: "For a standard booking of one to four people, you shouldn't need to pay a deposit at all. Deposits are reasonable for large groups or multi-day packages. If someone asks for a deposit by bank transfer for a two-hour ride, that's worth questioning.",
          },
        ],
      },
      fr: {
        slug: "quad-essaouira-guide-des-prix",
        title: "Ce que devrait vraiment coûter une sortie quad à Essaouira",
        metaTitle: "Quad Essaouira : le vrai guide des prix 2026",
        metaDescription:
          "Ce qu'il faut s'attendre à payer pour une sortie quad à Essaouira, ce qui est normalement inclus, ce qui s'ajoute après coup, et comment reconnaître un tarif correct.",
        excerpt:
          "Presque personne ici n'affiche ses prix. Voici la fourchette réelle, ce qui est inclus, et les suppléments à surveiller.",
        category: "Désert",
        blocks: [
          {
            type: "p",
            text: "Si vous cherchez une sortie quad à Essaouira, vous trouverez une douzaine de prestataires et presque aucun prix. Vous écrivez, on vous demande où vous logez, et un chiffre arrive. Ce n'est pas forcément malhonnête — mais cela rend difficile de savoir si l'offre est correcte.",
          },
          { type: "h2", text: "Les tarifs pratiqués" },
          {
            type: "list",
            items: [
              "1 heure : 25–35 € par personne",
              "2 heures : 40–50 € par personne",
              "3 heures : 55–70 € par personne",
              "Demi-journée (4 heures) : 75–90 € par personne",
            ],
          },
          {
            type: "p",
            text: "En dessous de cette fourchette, demandez ce qui a été retiré — en général le nombre de guides, le transfert, ou la qualité des machines. Au-dessus, vous devez recevoir quelque chose de précis en échange : un guide privé, un parcours plus long, ou une machine réellement meilleure.",
          },
          { type: "h2", text: "Ce qu'un prix correct comprend" },
          {
            type: "list",
            items: [
              "Le quad et le carburant — sans supplément carburant à la fin",
              "Un guide, avec un groupe assez petit pour qu'il puisse vraiment vous aider",
              "Casque, lunettes et vêtements de protection",
              "Un briefing sécurité et une boucle d'essai avant de partir",
              "Le transfert depuis votre hôtel ou riad à Essaouira et Diabat",
            ],
          },
          { type: "h2", text: "Ce qui s'ajoute après coup" },
          {
            type: "p",
            text: "Les trois surprises les plus fréquentes sont un supplément carburant, une facturation des photos prises pendant la sortie, et des frais de transfert si vous logez hors médina. Aucun de ces éléments ne devrait exister. Posez la question avant de réserver — la réponse en dit long sur la suite.",
          },
          { type: "h2", text: "Deux personnes, un quad" },
          {
            type: "p",
            text: "Deux personnes peuvent partager un quad, et le tarif est par machine et non par tête — partager revient donc moins cher. Notre sortie de deux heures coûte 50 € pour un pilote ou 70 € à deux, soit 35 € par personne. Seul le conducteur doit avoir l'âge minimum requis.",
          },
          { type: "h2", text: "Les acomptes" },
          {
            type: "p",
            text: "Pour une réservation standard d'une à quatre personnes, aucun acompte ne devrait être exigé. Un acompte se justifie pour les grands groupes ou les forfaits sur plusieurs jours. Si on vous demande un virement pour une sortie de deux heures, cela mérite une question.",
          },
        ],
      },
    },
  },

  {
    id: "quad-licence-morocco",
    date: "2026-05-20",
    relatedActivity: "quad",
    photo: "guide-quad-beach-essaouira.jpg",
    copy: {
      en: {
        slug: "do-you-need-a-licence-to-ride-a-quad-in-morocco",
        title: "Do you need a licence to ride a quad in Morocco?",
        metaTitle: "Quad Licence Morocco | What You Actually Need",
        metaDescription:
          "Short answer: no, not for guided tours on private land and beach in Essaouira. Here's the detail on age limits, insurance and what to bring.",
        excerpt:
          "The short answer is no. The longer answer covers age limits, insurance and the one situation where it does matter.",
        category: "Desert",
        blocks: [
          {
            type: "p",
            text: "This is the single most common question we get before a booking, and the answer is simpler than most people expect.",
          },
          { type: "h2", text: "For a guided tour: no licence needed" },
          {
            type: "p",
            text: "Guided quad tours in Essaouira run on private land, tracks and beach rather than public roads. No motorcycle or car licence is required. Our machines are automatic — no gears, no clutch — so the actual skill required is closer to riding a bicycle than driving a car.",
          },
          { type: "h2", text: "Age limits" },
          {
            type: "list",
            items: [
              "There is a minimum age to drive your own quad — ask us and we will confirm it",
              "Younger riders go as a passenger behind a guide or a parent",
              "Tell us the ages in your group when you book and we will say honestly what works",
            ],
          },
          {
            type: "p",
            text: "We don't bend the age rule. It isn't bureaucracy — a young teenager on soft sand with a throttle is a genuinely different proposition to an adult, and the insurance reflects that.",
          },
          { type: "h2", text: "Insurance" },
          {
            type: "p",
            text: "Reputable operators carry third-party liability cover for guided tours. Ask — a straight answer is a good sign. Your travel insurance may exclude quad biking or require a helmet to be worn for a claim to be valid; check your policy before you travel rather than after something happens. We provide helmets and ask everyone to wear them.",
          },
          { type: "h2", text: "When a licence does matter" },
          {
            type: "p",
            text: "If you rent a quad unaccompanied and intend to ride on public roads — through Diabat village, for example, or on the road toward Sidi Kaouki — then Moroccan road rules apply and you need an appropriate licence and registration. This is why we don't offer unaccompanied road rental. Everything we run is guided and off-road.",
          },
          { type: "h2", text: "What to bring" },
          {
            type: "p",
            text: "Nothing official. Closed shoes, sunglasses and something to cover your face against the sand. We supply the helmet, goggles and protective clothing.",
          },
        ],
      },
      fr: {
        slug: "faut-il-un-permis-pour-conduire-un-quad-au-maroc",
        title: "Faut-il un permis pour conduire un quad au Maroc ?",
        metaTitle: "Permis quad Maroc | Ce dont vous avez besoin",
        metaDescription:
          "Réponse courte : non, pas pour les sorties guidées sur terrain privé et plage à Essaouira. Voici le détail sur l'âge, l'assurance et ce qu'il faut prévoir.",
        excerpt:
          "La réponse courte est non. La réponse longue couvre l'âge minimum, l'assurance et le seul cas où cela compte vraiment.",
        category: "Désert",
        blocks: [
          {
            type: "p",
            text: "C'est de loin la question qu'on nous pose le plus avant une réservation, et la réponse est plus simple que ce que la plupart des gens imaginent.",
          },
          { type: "h2", text: "Pour une sortie guidée : aucun permis" },
          {
            type: "p",
            text: "Les sorties quad guidées à Essaouira se déroulent sur terrain privé, pistes et plage, pas sur la voie publique. Aucun permis moto ou voiture n'est exigé. Nos machines sont automatiques — sans vitesses ni embrayage — donc la compétence réellement nécessaire est plus proche du vélo que de la voiture.",
          },
          { type: "h2", text: "Âge minimum" },
          {
            type: "list",
            items: [
              "Un âge minimum est requis pour conduire son propre quad — demandez-nous et nous vous le confirmerons",
              "Les plus jeunes montent en passager derrière un guide ou un parent",
              "Indiquez-nous les âges de votre groupe à la réservation et nous vous dirons franchement ce qui fonctionne",
            ],
          },
          {
            type: "p",
            text: "Nous ne contournons pas la règle d'âge. Ce n'est pas de la bureaucratie : un jeune adolescent sur du sable mou avec une poignée de gaz, ce n'est pas la même chose qu'un adulte, et l'assurance en tient compte.",
          },
          { type: "h2", text: "Assurance" },
          {
            type: "p",
            text: "Les prestataires sérieux disposent d'une responsabilité civile pour les sorties guidées. Posez la question — une réponse franche est bon signe. Votre assurance voyage peut exclure le quad ou exiger le port du casque pour qu'une prise en charge soit valable : vérifiez votre contrat avant de partir, pas après. Nous fournissons les casques et demandons à chacun de les porter.",
          },
          { type: "h2", text: "Quand le permis compte vraiment" },
          {
            type: "p",
            text: "Si vous louez un quad sans accompagnement et comptez rouler sur la voie publique — dans le village de Diabat, ou sur la route de Sidi Kaouki — alors le code de la route marocain s'applique et un permis ainsi qu'une immatriculation adaptés sont nécessaires. C'est pour cela que nous ne proposons pas de location libre sur route. Tout ce que nous organisons est guidé et hors route.",
          },
          { type: "h2", text: "Que prévoir" },
          {
            type: "p",
            text: "Rien d'administratif. Des chaussures fermées, des lunettes de soleil et de quoi vous couvrir le visage contre le sable. Nous fournissons le casque, les lunettes de protection et les vêtements.",
          },
        ],
      },
    },
  },

  {
    id: "essaouira-swell-beginners",
    date: "2026-05-08",
    relatedActivity: "surf",
    photo: "atlantic-beach-sunrise-essaouira-wide.jpg",
    copy: {
      en: {
        slug: "beginners-guide-to-essaouira-swell",
        title: "A beginner's guide to Essaouira's swell",
        metaTitle: "Essaouira Surf Guide for Beginners | When & Where",
        metaDescription:
          "Why Essaouira's bay is one of the easiest places in Morocco to learn to surf, when to come, what the water temperature is, and when to go to Sidi Kaouki instead.",
        excerpt:
          "The bay does something specific to the swell that makes this an unusually forgiving place to learn. Here's what and why.",
        category: "Ocean",
        blocks: [
          {
            type: "p",
            text: "Essaouira has a reputation as a wind town, which puts some people off the idea of learning to surf here. That reputation is about kitesurfing and windsurfing in the afternoon. In the morning, the bay is one of the gentlest classrooms on this coast.",
          },
          { type: "h2", text: "What the bay does" },
          {
            type: "p",
            text: "The headland and the Îles Purpuraires sit directly in the path of the dominant north-west swell. By the time it reaches the town beach it has lost most of its power and picked up spacing. The result is waves that break slowly, roll rather than dump, and arrive with enough gap between them that you're not permanently getting pushed around.",
          },
          {
            type: "p",
            text: "The beach itself is sand, shallow and gently shelving, which matters more than beginners realise. Falling off in shallow sand is unremarkable; falling off over reef is not.",
          },
          { type: "h2", text: "When to come" },
          {
            type: "list",
            items: [
              "April to September: smaller, cleaner, warmer. Best for complete beginners.",
              "October to March: bigger and more consistent. Better if you can already surf.",
              "Mornings, year-round: the wind builds through the day, so early is glassy.",
            ],
          },
          { type: "h2", text: "Water temperature" },
          {
            type: "p",
            text: "Cooler than people expect: roughly 17–19°C in winter and 19–21°C in summer, because of the Canary Current running down this coast. A wetsuit is standard year-round and is included in any decent lesson. The wind means you'll often feel colder standing on the beach than sitting in the water — bring a warm layer for afterwards.",
          },
          { type: "h2", text: "When we move to Sidi Kaouki" },
          {
            type: "p",
            text: "The same bay protection that makes Essaouira friendly also means it can go flat. When that happens, Sidi Kaouki, twenty-five minutes south, is far more exposed and picks up swell the bay misses. Any instructor worth booking will make that call on the morning based on the actual forecast, and will move the lesson rather than run it in poor conditions.",
          },
          { type: "h2", text: "How long until you stand up?" },
          {
            type: "p",
            text: "Most people stand on a broken wave in their first two-and-a-half hour session. Riding an unbroken wave is a different milestone and usually takes three or four sessions. If someone promises you the second one on day one, they're selling.",
          },
        ],
      },
      fr: {
        slug: "guide-du-debutant-houle-essaouira",
        title: "Guide du débutant : la houle d'Essaouira",
        metaTitle: "Surf Essaouira débutant | Quand et où",
        metaDescription:
          "Pourquoi la baie d'Essaouira est l'un des endroits les plus faciles du Maroc pour apprendre à surfer, quand venir, la température de l'eau, et quand filer à Sidi Kaouki.",
        excerpt:
          "La baie fait quelque chose de précis à la houle qui rend cet endroit particulièrement indulgent pour apprendre. Voici quoi et pourquoi.",
        category: "Océan",
        blocks: [
          {
            type: "p",
            text: "Essaouira a une réputation de ville venteuse, ce qui décourage certains d'y apprendre le surf. Cette réputation concerne le kitesurf et la planche à voile l'après-midi. Le matin, la baie est l'une des salles de classe les plus douces de cette côte.",
          },
          { type: "h2", text: "Ce que fait la baie" },
          {
            type: "p",
            text: "Le cap et les îles Purpuraires se trouvent exactement sur la trajectoire de la houle dominante de nord-ouest. Quand elle atteint la plage de ville, elle a perdu l'essentiel de sa puissance et gagné en espacement. Résultat : des vagues qui cassent lentement, qui déroulent au lieu de s'écrouler, et qui arrivent avec assez d'intervalle pour ne pas vous bousculer en permanence.",
          },
          {
            type: "p",
            text: "La plage elle-même est de sable, peu profonde et en pente douce, ce qui compte plus que les débutants ne l'imaginent. Tomber sur du sable peu profond n'a aucune conséquence ; tomber sur du récif, si.",
          },
          { type: "h2", text: "Quand venir" },
          {
            type: "list",
            items: [
              "D'avril à septembre : plus petit, plus propre, plus chaud. Idéal pour les grands débutants.",
              "D'octobre à mars : plus gros et plus régulier. Mieux si vous surfez déjà.",
              "Le matin, toute l'année : le vent monte au fil de la journée, donc tôt c'est lisse.",
            ],
          },
          { type: "h2", text: "Température de l'eau" },
          {
            type: "p",
            text: "Plus fraîche qu'on ne le croit : environ 17 à 19 °C en hiver et 19 à 21 °C en été, à cause du courant des Canaries qui descend cette côte. La combinaison est la norme toute l'année et incluse dans tout cours correct. Avec le vent, on a souvent plus froid debout sur la plage que dans l'eau — prévoyez une couche chaude pour après.",
          },
          { type: "h2", text: "Quand nous filons à Sidi Kaouki" },
          {
            type: "p",
            text: "La protection de la baie qui rend Essaouira accueillante fait aussi qu'elle peut devenir plate. Dans ce cas, Sidi Kaouki, à vingt-cinq minutes au sud, est bien plus exposé et capte la houle que la baie manque. Tout moniteur qui vaut la peine prendra cette décision le matin même selon les vraies conditions, et déplacera le cours plutôt que de le maintenir dans du mauvais.",
          },
          { type: "h2", text: "Combien de temps avant de se mettre debout ?" },
          {
            type: "p",
            text: "La plupart des gens se mettent debout sur une vague cassée dès leur première séance de deux heures et demie. Prendre une vague avant qu'elle ne casse est une autre étape, qui demande généralement trois ou quatre séances. Si on vous promet la seconde dès le premier jour, on vous vend quelque chose.",
          },
        ],
      },
    },
  },

  {
    id: "what-we-cook",
    date: "2026-04-24",
    relatedActivity: "cooking",
    photo: null,
    copy: {
      en: {
        slug: "what-we-actually-cook-in-our-classes",
        title: "What we actually cook in our Moroccan cooking classes",
        metaTitle: "Moroccan Cooking Class Essaouira | What You'll Cook",
        metaDescription:
          "The full menu of an Essaouira cooking class: market shopping, Moroccan salads, a chicken, fish or vegetable tagine, khobz bread from scratch and mint tea.",
        excerpt:
          "Not a demonstration and not a buffet. Here's the actual menu, start to finish, and why the tagine lid does the work.",
        category: "Food",
        blocks: [
          {
            type: "p",
            text: "People book a cooking class not quite knowing what they'll get. Sometimes it's a chef demonstrating while you watch. Sometimes it's assembling pre-chopped ingredients. Here's exactly what happens in ours.",
          },
          { type: "h2", text: "It starts at the market" },
          {
            type: "p",
            text: "Before any cooking, you walk the medina market with your host and buy what you're about to use — vegetables, herbs, the spice blend, and if you want a fish tagine, the fish itself from the port market. This part matters because it's where you learn what things are actually called and what a fair price looks like.",
          },
          { type: "h2", text: "Moroccan salads" },
          {
            type: "p",
            text: "The small plates that come before the main dish — usually a cooked tomato and pepper zaalouk, a carrot salad with cumin, and a raw tomato and onion salad. They're simpler than they look and they're the thing most guests actually go home and make again.",
          },
          { type: "h2", text: "The tagine" },
          {
            type: "p",
            text: "Chicken with preserved lemon and olives, fish with chermoula, or a vegetable tagine — you choose. You make yours from the start in your own pot. The two things people find surprising: the vegetables are stacked in a cone rather than stirred together, and far less liquid goes in than any recipe you've read at home suggests. The conical lid condenses steam and returns it to the dish, so it effectively cooks in its own moisture. Adding water is the most common mistake.",
          },
          { type: "h2", text: "Khobz" },
          {
            type: "p",
            text: "The round Moroccan bread, from flour and yeast, kneaded and proved while the tagine cooks. This is the part children love and the part most adults have never done. It's also what you eat the tagine with — bread instead of cutlery.",
          },
          { type: "h2", text: "Mint tea" },
          {
            type: "p",
            text: "Poured from height, and your host will make you do it again until it foams properly. There's a technique and it takes about four attempts.",
          },
          { type: "h2", text: "Then you eat it" },
          {
            type: "p",
            text: "Around a shared table, family-style, which takes about an hour. Most people don't need dinner afterwards. We send the recipes the next day. Vegetarian and vegan are straightforward; gluten-free needs a day's notice.",
          },
        ],
      },
      fr: {
        slug: "ce-que-nous-cuisinons-vraiment-en-cours",
        title: "Ce que nous cuisinons vraiment dans nos cours de cuisine marocaine",
        metaTitle: "Cours de cuisine Essaouira | Ce que vous cuisinerez",
        metaDescription:
          "Le menu complet d'un cours de cuisine à Essaouira : marché, salades marocaines, tajine au poulet, au poisson ou aux légumes, pain khobz maison et thé à la menthe.",
        excerpt:
          "Ni une démonstration ni un buffet. Voici le menu réel, du début à la fin, et pourquoi c'est le couvercle du tajine qui travaille.",
        category: "Cuisine",
        blocks: [
          {
            type: "p",
            text: "On réserve un cours de cuisine sans trop savoir ce qu'on va y trouver. Parfois c'est un chef qui fait une démonstration pendant que vous regardez. Parfois c'est assembler des ingrédients déjà découpés. Voici exactement ce qui se passe chez nous.",
          },
          { type: "h2", text: "Ça commence au marché" },
          {
            type: "p",
            text: "Avant toute cuisine, vous parcourez le marché de la médina avec votre hôte et achetez ce que vous allez utiliser — légumes, herbes, mélange d'épices, et si vous voulez un tajine de poisson, le poisson lui-même au marché du port. Cette étape compte : c'est là qu'on apprend les vrais noms des choses et ce qu'est un prix correct.",
          },
          { type: "h2", text: "Les salades marocaines" },
          {
            type: "p",
            text: "Les petites assiettes qui précèdent le plat principal — en général un zaalouk de tomates et poivrons cuits, une salade de carottes au cumin, et une salade crue tomate-oignon. Elles sont plus simples qu'elles n'en ont l'air et ce sont celles que la plupart des invités refont chez eux.",
          },
          { type: "h2", text: "Le tajine" },
          {
            type: "p",
            text: "Poulet au citron confit et olives, poisson à la chermoula, ou tajine de légumes — vous choisissez. Vous préparez le vôtre depuis le début, dans votre propre plat. Deux choses surprennent : les légumes se dressent en cône plutôt que d'être mélangés, et il entre bien moins de liquide que ne le suggère n'importe quelle recette lue chez soi. Le couvercle conique condense la vapeur et la renvoie dans le plat : il cuit donc dans sa propre humidité. Ajouter de l'eau est l'erreur la plus fréquente.",
          },
          { type: "h2", text: "Le khobz" },
          {
            type: "p",
            text: "Le pain rond marocain, à partir de farine et de levure, pétri et laissé lever pendant que le tajine cuit. C'est la partie que les enfants adorent et que la plupart des adultes n'ont jamais faite. C'est aussi avec lui qu'on mange le tajine — du pain à la place des couverts.",
          },
          { type: "h2", text: "Le thé à la menthe" },
          {
            type: "p",
            text: "Versé de haut, et votre hôte vous fera recommencer jusqu'à ce qu'il mousse correctement. Il y a une technique et il faut environ quatre essais.",
          },
          { type: "h2", text: "Puis vous mangez" },
          {
            type: "p",
            text: "Autour d'une table partagée, à la marocaine, ce qui prend environ une heure. La plupart des gens n'ont pas besoin de dîner après. Nous envoyons les recettes le lendemain. Végétarien et végane sans problème ; sans gluten avec un jour de préavis.",
          },
        ],
      },
    },
  },

  {
    id: "coast-or-forest",
    date: "2026-04-10",
    relatedActivity: "horse",
    photo: "argan-forest-camels-track-essaouira.jpg",
    copy: {
      en: {
        slug: "coast-or-forest-choosing-your-horseback-route",
        title: "Coast or forest: choosing your horseback route in Essaouira",
        metaTitle: "Horse Riding Essaouira: Beach or Argan Forest?",
        metaDescription:
          "The two horseback routes near Essaouira are genuinely different rides. Which suits beginners, which suits confident riders, and how to pick by season.",
        excerpt:
          "One is an open beach where you can canter. The other is a technical forest trail. They suit different riders and different weeks of the year.",
        category: "Trails",
        blocks: [
          {
            type: "p",
            text: "We ask everyone who books which route they want, and most people don't know there's a choice. There is, and it changes the ride completely.",
          },
          { type: "h2", text: "The coastal route" },
          {
            type: "p",
            text: "South from Diabat along open beach. The sand near the waterline is firm enough to canter properly, and there's nothing between you and the Atlantic for the whole stretch. It's the classic Essaouira ride and the one that ends up in photographs.",
          },
          {
            type: "p",
            text: "It suits complete beginners because it's flat, wide and predictable — there's nothing technical to negotiate, so you can spend the whole time learning to sit and steer. It also suits confident riders, for the opposite reason: it's the only place around here you can safely open up.",
          },
          { type: "h2", text: "The argan forest route" },
          {
            type: "p",
            text: "Inland into the argan groves. Shaded, quiet, and technical in places — narrow tracks, uneven ground, and trees to steer around. You'll pass goats, occasionally in the trees, which is a real thing here and not a tourist arrangement.",
          },
          {
            type: "p",
            text: "This route needs more independent control, so we ask for some previous riding experience. In exchange you get shade, silence and a landscape almost nobody else on your flight will see.",
          },
          { type: "h2", text: "Choosing by season" },
          {
            type: "list",
            items: [
              "June to September: forest, if you can ride. The beach is hotter and busier.",
              "October to May: beach. Cooler, emptier, and the light is better.",
              "Windy days: forest. The trees block the worst of it.",
              "First time on a horse: beach, whatever the season.",
            ],
          },
          { type: "h2", text: "What we need to know from you" },
          {
            type: "p",
            text: "Be honest about your experience when you book. It isn't a test — it decides which horse you get and which group you ride with. Saying you can canter when you can't means either an uncomfortable hour for you or a slow one for everyone else.",
          },
        ],
      },
      fr: {
        slug: "cote-ou-foret-choisir-son-parcours-a-cheval",
        title: "Côte ou forêt : choisir son parcours à cheval à Essaouira",
        metaTitle: "Équitation Essaouira : plage ou forêt d'arganiers ?",
        metaDescription:
          "Les deux parcours à cheval près d'Essaouira sont vraiment différents. Lequel convient aux débutants, lequel aux cavaliers confirmés, et comment choisir selon la saison.",
        excerpt:
          "L'un est une plage ouverte où l'on peut galoper. L'autre un sentier forestier technique. Ils ne conviennent ni aux mêmes cavaliers ni aux mêmes semaines de l'année.",
        category: "Sentiers",
        blocks: [
          {
            type: "p",
            text: "Nous demandons à chaque personne qui réserve quel parcours elle souhaite, et la plupart ignorent qu'il y a un choix. Il y en a un, et il change complètement la balade.",
          },
          { type: "h2", text: "Le parcours côtier" },
          {
            type: "p",
            text: "Vers le sud depuis Diabat, le long de la plage ouverte. Le sable près de la laisse de mer est assez ferme pour galoper vraiment, et il n'y a rien entre vous et l'Atlantique sur toute la portion. C'est la balade classique d'Essaouira, celle qui finit en photo.",
          },
          {
            type: "p",
            text: "Elle convient aux grands débutants parce qu'elle est plate, large et prévisible — rien de technique à négocier, donc vous passez tout le temps à apprendre à vous asseoir et à diriger. Elle convient aussi aux cavaliers confirmés, pour la raison inverse : c'est le seul endroit du coin où l'on peut ouvrir en sécurité.",
          },
          { type: "h2", text: "Le parcours en forêt d'arganiers" },
          {
            type: "p",
            text: "Vers l'intérieur, dans les arganeraies. Ombragé, silencieux, technique par endroits — sentiers étroits, terrain irrégulier, arbres à contourner. Vous croiserez des chèvres, parfois dans les arbres, ce qui est bien réel ici et pas une mise en scène pour touristes.",
          },
          {
            type: "p",
            text: "Ce parcours demande plus d'autonomie, nous demandons donc une expérience préalable. En échange, vous avez l'ombre, le silence et un paysage que presque personne d'autre dans votre avion ne verra.",
          },
          { type: "h2", text: "Choisir selon la saison" },
          {
            type: "list",
            items: [
              "De juin à septembre : la forêt, si vous savez monter. La plage est plus chaude et plus fréquentée.",
              "D'octobre à mai : la plage. Plus frais, plus vide, et la lumière est meilleure.",
              "Les jours de vent : la forêt. Les arbres coupent le plus fort.",
              "Première fois à cheval : la plage, quelle que soit la saison.",
            ],
          },
          { type: "h2", text: "Ce que nous devons savoir" },
          {
            type: "p",
            text: "Soyez honnête sur votre niveau à la réservation. Ce n'est pas un examen : cela détermine quel cheval vous montez et avec quel groupe. Dire qu'on sait galoper quand ce n'est pas le cas, c'est soit une heure inconfortable pour vous, soit une heure lente pour tous les autres.",
          },
        ],
      },
    },
  },
];

export function postsFor(lang: Lang): { post: Post; copy: PostCopy }[] {
  return POSTS.filter((p) => p.copy[lang]).map((post) => ({
    post,
    copy: post.copy[lang]!,
  }));
}

export function postLangs(post: Post): Lang[] {
  return Object.keys(post.copy) as Lang[];
}

export function formatDate(date: string, lang: Lang): string {
  const locales: Record<Lang, string> = {
    en: "en-GB",
    fr: "fr-FR",
    es: "es-ES",
    de: "de-DE",
    ar: "ar-MA",
  };
  return new Intl.DateTimeFormat(locales[lang], {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}
