/**
 * One-off: remove unverified minimum-age claims.
 *
 * The site stated "16 to drive, 6 as a passenger" (and "from about four" for
 * camels) in five languages, in the activity FAQs, a blog post and the booking
 * terms. Those numbers came from the design mockup and the operator has
 * confirmed they are NOT correct.
 *
 * A minimum age is a safety claim a parent may book on, so the numbers are
 * removed rather than guessed. The copy now points people at us to confirm.
 * Put the real figures back once they're known.
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DATA = "C:/Users/zoro/Desktop/mogadure adventure project/site/src/data";

const EDITS = {
  "activities.en.ts": [
    [
      "You do need to be 16 or over to drive your own quad. Under-16s ride as a passenger with a guide or a parent.",
      "There is a minimum age to drive your own quad — tell us the ages in your group and we will confirm it. Younger riders go as a passenger with a guide or a parent.",
    ],
    [
      "16 to drive solo, 6 to ride as a passenger behind a guide or parent. For families with younger children we usually recommend the camel ride or a shorter beach loop instead — message us and we will tell you honestly what will work.",
      "Message us with the ages in your group and we will tell you exactly what is possible. Younger children ride as a passenger behind a guide or a parent, and for families with small children the camel ride or a shorter beach loop is often the better call — we will say so honestly.",
    ],
    [
      "Yes. Children from about four can ride in front of a parent, and from around eight most are fine on their own camel with the handler leading.",
      "Yes — it is the gentlest thing we run. Tell us your children's ages when you book and we will confirm what works: younger ones ride in front of a parent, older ones are usually fine on their own camel with the handler leading.",
    ],
  ],
  "activities.fr.ts": [
    [
      "Il faut avoir 16 ans pour conduire son propre quad. Les moins de 16 ans montent en passager avec un guide ou un parent.",
      "Un âge minimum est requis pour conduire son propre quad — indiquez-nous les âges de votre groupe et nous vous le confirmerons. Les plus jeunes montent en passager avec un guide ou un parent.",
    ],
    [
      "16 ans pour piloter seul, 6 ans en passager derrière un guide ou un parent. Pour les familles avec de jeunes enfants, nous conseillons plutôt la balade à dos de chameau ou une boucle courte sur la plage — écrivez-nous et nous vous dirons franchement ce qui fonctionnera.",
      "Écrivez-nous avec les âges de votre groupe et nous vous dirons exactement ce qui est possible. Les plus jeunes montent en passager derrière un guide ou un parent, et pour les familles avec de petits enfants la balade à dos de chameau ou une boucle courte sur la plage est souvent le meilleur choix — nous vous le dirons franchement.",
    ],
    [
      "Oui. Les enfants à partir de quatre ans environ peuvent monter devant un parent, et à partir de huit ans la plupart sont à l'aise seuls sur leur chameau, mené par le chamelier.",
      "Oui — c'est ce que nous proposons de plus doux. Indiquez-nous l'âge de vos enfants à la réservation et nous confirmerons : les plus jeunes montent devant un parent, les plus grands sont généralement à l'aise seuls sur leur chameau, mené par le chamelier.",
    ],
  ],
  "activities.es.ts": [
    [
      "Sí hay que tener 16 años para conducir tu propio quad; los menores van de pasajeros con un guía o un padre o madre.",
      "Hay una edad mínima para conducir tu propio quad: dinos las edades de tu grupo y te la confirmamos. Los más jóvenes van de pasajeros con un guía o un progenitor.",
    ],
    [
      "16 años para conducir solo y 6 para ir de pasajero detrás de un guía o de un progenitor. Para familias con niños más pequeños solemos recomendar el paseo en camello o una ruta corta de playa — escríbenos y te diremos con franqueza qué va a funcionar.",
      "Escríbenos con las edades de tu grupo y te diremos exactamente qué es posible. Los más pequeños van de pasajeros detrás de un guía o un progenitor, y para familias con niños pequeños el paseo en camello o una ruta corta de playa suele ser mejor opción — te lo diremos con franqueza.",
    ],
    [
      "Sí. Desde unos cuatro años pueden ir delante de un adulto, y desde los ocho la mayoría va bien en su propio camello con el camellero llevándolo.",
      "Sí, es lo más tranquilo que hacemos. Dinos las edades de tus hijos al reservar y te confirmamos qué funciona: los más pequeños van delante de un adulto y los mayores suelen ir bien en su propio camello con el camellero llevándolo.",
    ],
  ],
  "activities.de.ts": [
    [
      "Zum selbst Fahren musst du 16 sein; Jüngere fahren als Beifahrer bei einem Guide oder Elternteil mit.",
      "Für das eigene Quad gilt ein Mindestalter — nenn uns die Altersangaben deiner Gruppe und wir bestätigen es. Jüngere fahren als Beifahrer bei einem Guide oder Elternteil mit.",
    ],
    [
      "16 zum selbst Fahren, 6 als Beifahrer hinter einem Guide oder Elternteil. Für Familien mit kleineren Kindern empfehlen wir eher den Kamelritt oder eine kurze Strandrunde — schreib uns, wir sagen dir ehrlich, was funktioniert.",
      "Schreib uns die Altersangaben deiner Gruppe und wir sagen dir genau, was möglich ist. Jüngere fahren als Beifahrer hinter einem Guide oder Elternteil, und für Familien mit kleinen Kindern ist der Kamelritt oder eine kurze Strandrunde oft die bessere Wahl — das sagen wir dir ehrlich.",
    ],
    [
      "Ja. Ab etwa vier Jahren reiten Kinder vor einem Elternteil, ab acht kommen die meisten auf einem eigenen Kamel zurecht, das der Treiber führt.",
      "Ja — es ist das Sanfteste in unserem Programm. Nenn uns beim Buchen das Alter deiner Kinder und wir bestätigen, was passt: Jüngere reiten vor einem Elternteil, Ältere kommen meist auf einem eigenen Kamel zurecht, das der Treiber führt.",
    ],
  ],
  "activities.ar.ts": [
    [
      "يجب أن يكون عمرك 16 سنة فأكثر لقيادة دراجتك بنفسك؛ ومن هم دون ذلك يركبون خلف مرشد أو أحد الوالدين.",
      "هناك حد أدنى للعمر لقيادة دراجتك بنفسك — أخبرنا بأعمار مجموعتك وسنؤكده لك. والأصغر سناً يركبون خلف مرشد أو أحد الوالدين.",
    ],
    [
      "16 سنة للقيادة منفرداً، و6 سنوات للركوب خلف مرشد أو أحد الوالدين. للعائلات ذات الأطفال الصغار ننصح عادة بركوب الجمال أو جولة شاطئية قصيرة — راسلنا وسنخبرك بصراحة بما يناسبكم.",
      "راسلنا بأعمار مجموعتك وسنخبرك بالضبط بما هو ممكن. الأصغر سناً يركبون خلف مرشد أو أحد الوالدين، وللعائلات ذات الأطفال الصغار يكون ركوب الجمال أو جولة شاطئية قصيرة خياراً أفضل غالباً — وسنقول ذلك بصراحة.",
    ],
  ],
  "blog.ts": [
    [
      '"16 and over: you can drive your own quad",',
      '"There is a minimum age to drive your own quad — ask us and we will confirm it",',
    ],
    [
      '"Under 16: you ride as a passenger behind a guide or a parent",',
      '"Younger riders go as a passenger behind a guide or a parent",',
    ],
    [
      '"From about 6: comfortable as a passenger on shorter routes",',
      '"Tell us the ages in your group when you book and we will say honestly what works",',
    ],
    [
      "We don't bend the 16 rule. It isn't bureaucracy — a 14-year-old on soft sand with a throttle is a genuinely different proposition to a 16-year-old, and the insurance reflects that.",
      "We don't bend the age rule. It isn't bureaucracy — a young teenager on soft sand with a throttle is a genuinely different proposition to an adult, and the insurance reflects that.",
    ],
    [
      '"16 ans et plus : vous pouvez conduire votre propre quad",',
      '"Un âge minimum est requis pour conduire son propre quad — demandez-nous et nous vous le confirmerons",',
    ],
    [
      '"Moins de 16 ans : passager derrière un guide ou un parent",',
      '"Les plus jeunes montent en passager derrière un guide ou un parent",',
    ],
    [
      "\"À partir de 6 ans environ : à l'aise en passager sur les parcours courts\",",
      '"Indiquez-nous les âges de votre groupe à la réservation et nous vous dirons franchement ce qui fonctionne",',
    ],
    [
      "Nous ne contournons pas la règle des 16 ans. Ce n'est pas de la bureaucratie : un adolescent de 14 ans sur du sable mou avec une poignée de gaz, ce n'est pas la même chose qu'à 16 ans, et l'assurance en tient compte.",
      "Nous ne contournons pas la règle d'âge. Ce n'est pas de la bureaucratie : un jeune adolescent sur du sable mou avec une poignée de gaz, ce n'est pas la même chose qu'un adulte, et l'assurance en tient compte.",
    ],
    // Stale pricing claim that survived the rate-card correction.
    [
      "Most operators, us included, let two people share a quad at the single-rider price. If you're a couple and only one of you wants to drive, that halves your cost. Only the driver needs to be 16 or over.",
      "Two people can share one quad, and it is priced per machine rather than per head — so sharing is the cheaper way to ride. Our two-hour tour is €50 for one rider or €70 for two, which is €35 each. Only the driver needs to meet the minimum age.",
    ],
    [
      "La plupart des prestataires, nous compris, autorisent deux personnes sur un quad au tarif d'un seul pilote. Si vous êtes en couple et qu'un seul veut conduire, cela divise votre budget par deux. Seul le conducteur doit avoir 16 ans ou plus.",
      "Deux personnes peuvent partager un quad, et le tarif est par machine et non par tête — partager revient donc moins cher. Notre sortie de deux heures coûte 50 € pour un pilote ou 70 € à deux, soit 35 € par personne. Seul le conducteur doit avoir l'âge minimum requis.",
    ],
  ],
  "pages.ts": [
    [
      "Quad drivers must be 16 or over; under-16s may ride as passengers.",
      "Quad drivers must meet our minimum age, which we confirm when you book; younger riders may travel as passengers.",
    ],
    [
      "Les conducteurs de quad doivent avoir 16 ans ou plus ; les moins de 16 ans peuvent monter en passager.",
      "Les conducteurs de quad doivent avoir l'âge minimum requis, que nous confirmons au moment de la réservation ; les plus jeunes peuvent monter en passager.",
    ],
  ],
};

let ok = 0;
const missed = [];
for (const [file, reps] of Object.entries(EDITS)) {
  const p = path.join(DATA, file);
  let s = readFileSync(p, "utf8");
  for (const [a, b] of reps) {
    if (s.includes(a)) {
      s = s.split(a).join(b);
      ok++;
    } else {
      missed.push(`${file}: ${a.slice(0, 60)}`);
    }
  }
  writeFileSync(p, s);
}

console.log(`applied ${ok}`);
if (missed.length) {
  console.log(`MISSED ${missed.length}:`);
  missed.forEach((m) => console.log("  " + m));
}
