//Konsol opgaver

//opgave 1 - Lav et program, som skriver “Hello World” i konsollen
console.log("Hello World");

//opgave 2 - Lav et program, som skriver “Hello” og på næste linje skriver “World”  i konsollen

console.log("Hello" + "\n" + "World");

//Opgave 3 - Lav et program, som skriver følgende i konsollen. →

console.log("*" + "\n" + "**" + "\n" + "***" + "\n" + "**" + "\n" + "*");

//Opgave 4 - Lav et program, hvor i definere en konstant eller variabel og programmet skriver hvilken type det er, i konsollen. (Altså om det er en int, string, bool osv.)

let name = "Ellyas";
let age = 26;
let answer = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof answer);

//Opgave 5 - Print svarene på følgende matematiske operationer ved at skrive det direkte ind i Console.log(): fx, Console.log(5 + 5) ⇒ 10

console.log(10 - 5);
console.log(25 / 3);
console.log(25 % 3);
console.log(25 % 2);
console.log(3 ** 2);

//Opgave 6 - 1. Skriv i konsollen kombinationen af de her 2 strings ved brug af deres navn:
//    let tekst1 = “Hello “
//    let tekst2 = “ World!”

let tekst1 = "Hello";
let tekst2 = "World!";

console.log(tekst1 + " " + tekst2);

//Opgave 7 - Udskriv længden af den her string “GF2 Online” - altså antal tegn

console.log("GF2 Online".length);

//Opgave 8 - Lav et program som skriver et tilfældig tal i konsollen
console.log(Math.random());

//Opgave 9 - Find ud af hvad hver linje skriver ud i vores konsol og forklar hvorfor lige præcis det her bliver skrevet:

let number = 23;

console.log(number);
console.log((number = "23"));
console.log(number == "23");
console.log(number === "23");
console.log((number -= 23));
console.log((number += 23));
console.log((number += "23"));
console.log((number -= "46"));
console.log(number != "23");
console.log((number **= 2));

//Conditionals - If / Else statements Opgaver

//Opgave 1 - I skal skrive et stykke kode som fortæller om et tal (int) er lige eller ulige.

let ligenr = 19;
console.log("Is the number equal or odd?");
if (ligenr % 2 == 0) {
  console.log("lige");
} else console.log("ulige");

//Opgave 2 - I skal skrive et stykke kode som fortæller om 5 går op i det tal som i vælger (int).
//Hvis den går op i det skal i skrive: 5 går op i (det tal i har valgt)

let nr1 = 29;
if (nr1 % 5 == 0) {
  console.log("5 går op i 29");
} else console.log("5 går ikke op i 29");

//Opgave 3 - Lav opgaven ↑ igen, men i stedet for selv at vælge et tal skal i lave sådan at den selv vælger et tal mellem 0 og 100.

//In JavaScript, to get a random number between 0 and 1, use the Math.random() function.

//console.log(Math.random())
//0.5408145050563944

//If you want a random number between 1 and 10, multiply the results of Math.random by 10, then round up or down.
//Use .floor to round down to a whole number:
//console.log(Math.floor(Math.random() * 10))
//Use .ceil to round up to a whole number:
//console.log(Math.ceil(Math.random() * 10))
//Use .round to round to the nearest whole number:
//console.log(Math.round(Math.random() * 10))

let nr2 = Math.floor(Math.random() * 100);
if (nr2 % 5 == 0) {
  console.log("5 går op i " + nr2);
} else console.log("5 går ikke op i " + nr2);

//Opgave 4 - 1. Lav et program som fortæller jer hvilke af de her 3 tal der er størst.
// a = 25; b = 33; c = 12;

let a = 25;
let b = 33;
let c = 12;
if (a > b && a > c) {
  console.log("a er størst");
} else if (b > a && b > c) {
  console.log("b er størst");
} else console.log("c er størst");

//opgave 5 - Lav et program der fortæller hvor varmt det er ud fra en temperatur. Kategorierne er som følger:
//- Hvis det er 0° eller under, skal der skrives: Det er frostvejr
//- Hvis det er mellem 1° og 10°, skal der skrives: Det er meget koldt
//- Hvis det er mellem 11° og 20°, skal der skrives: Det er koldt
//- Hvis det er mellem 21° og 30°, skal der skrives: Det er normalt vejr
//- Hvis det er mellem 31° og 40°, skal der skrives: Det er varmt
//- Hvis det er 41° eller over, skal der skrives: Det er meget varmt

let temp = 0;
if (temp <= 0) {
  console.log("Det er frostvejr");
} else if (temp > 0 && temp <= 10) {
  console.log("Det er meget koldt");
} else if (temp > 10 && temp <= 20) {
  console.log("Det er koldt");
} else if (temp > 20 && temp <= 30) {
  console.log("Det er normalt vejr");
} else if (temp > 30 && temp <= 40) {
  console.log("Det er varmt");
} else if (temp > 40) {
  console.log("Det er meget varmt");
}

//Opgave 6 - 1. Lav et program som omformer tal til ugedage ved brug af Conditionals, som eksempel nedenunder:
//Den 1. dag i ugen er mandag
//Den 2. dag i ugen er tirsdag
//Den 4. dag i ugen er Torsdag osv.

let dag = 5;
if (dag == 1) {
  console.log("Mandag");
} else if (dag == 2) {
  console.log("Tirsdag");
} else if (dag == 3) {
  console.log("Onsdag");
} else if (dag == 4) {
  console.log("Torsdag");
} else if (dag == 5) {
  console.log("Friday");
} else if (dag == 6) {
  console.log("Lørdag");
} else if (dag == 7) {
  console.log("Søndag");
} else {
  console.log("Tallet er ikke en ugedag");
}

//Simple Loops (uden arrays eller lign.)

//Opgave 1 - Lav et program som skriver alle tal fra 1 til 20 ud i konsollen en efter en.

for (let i = 1; i <= 20; i++) {
  console.log(i);
}

//opgave 2 - Lav et program som skrive alle tal fra 1 til 102, på følgende måde |
//0 1 2
//1 2 3
//2 3 4
//100 101 102

for (let i = 0; i <= 100; i++) {
  console.log(i + " " + (i + 1) + " " + (i + 2));
}

//Opgave 3 - 1. Lav spillet FizzBuzz, spillet går ud på at man i en rundkreds (loop) skifter til at tælle.
//Hvis tallet som man er nået til går op i 3, skal man sige Fizz.
//Hvis tallet som man er nået til går op i 5, skal man sige Buzz.
//Hvis tallet som man er nået til går op i både 3 og 5, fx 15, skal man sige FizzBuzz.
//Hvis tallet ikke opfylder nogle af ovenstående skal man bare sige tallet.
//Dette skal vi lave i loop.
//I skal lave den både som for-loop og while-loop

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Nu som While Loop:

//let j = 1;
//console.log(j);
//while (j <= 20) {
//  if (j % 3 === 0 && j % 5 === 0) {
//    console.log("FizzBuzz");
//  } else if (j % 3 === 0) {
//    console.log("Fizz");
//  } else if (j % 5 === 0) {
//    console.log("Buzz");
//  } else {
//    console.log(j);
//  }
// }

//Opgave 4 - 1. Lav et program som udregner det faktorielle af et tal med et loop.
//I skal lave den både som for-loop og while-loop

function faktorielleFor(n) {
  let resultat = 1;
  for (let i = 1; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}
console.log(faktorielleFor(5)); // Output: 120 (fordi 5! = 5 × 4 × 3 × 2 × 1 = 120)
function faktorielleWhile(n) {
  let resultat = 1;
  let i = 1;
  while (i <= n) {
    resultat *= i;
    i++;
  }
  return resultat;
}
console.log(faktorielleWhile(6));

// Opgave 5 - Lav 1. et program som skriver multiplikationstabel for et givet tal:
//15 X 1 = 15
//...
//15 X 9 = 135

function multiplikationstabel(tal) {
  for (let x = 1; x <= 9; x++) {
    let resultat = tal * x;
    console.log(tal + " X " + x + " = " + resultat);
  }
}
multiplikationstabel(15);

//Arrays
//https://www.w3schools.com/js/js_arrays.asp

//Opgave 1 - Skriv “Viborg” i konsollen ved at trække den ud fra følgende array
// byer = [“Randers”, “Viborg”, “Aarhus”,”København”]

let byer = ["Randers", "Viborg", "Aarbus", "København"];
console.log(byer[1]);

//Opgave 2 - Tilføj “Skive” til denne array

let byer2 = ["Randers", "Viborg", "Aarbus", "København"];
byer2.push("skrive");
console.log(byer2);

//Opgave 3 - Erstat den værdi, uden at ændre direkte i array’et, som ikke passer ind, så array’et stemmer:
//talrække = [0, 1, 0, 3, 4, 5, 6]

let talrække = [0, 1, 0, 3, 4, 5, 6];
talrække[2] = 2;
console.log(talrække);

//Opgave 4 - Skriv, i konsollen, den største værdi fra følgende array. Selvfølgelig ikke manuelt.talrække = [1, 2, 3, 4, 11, 55, 99, 100]

let talrække1 = [1, 2, 3, 4, 11, 55, 99, 100];
console.log(talrække1);
console.log(talrække1[7]);

//Opgave 5 - Sorter den her array talrække = [0, 12, 0, 22, 300, 4, 5]
let talrække2 = [0, 12, 0, 22, 300, 4, 5];
talrække2.sort(function (a, b) {
  return a - b;
});
console.log(talrække2);

//Opgave 6 - Sorter den her array i omvendt rækkefølge: talrække = [0, 12, 0, 22, 300, 4, 5]
let talrække3 = [0, 12, 0, 22, 300, 4, 5];
talrække2.sort(function (a, b) {
  return b - a;
});
console.log(talrække2);

console.log("Loops - Arrays og andre datatyper");

console.log("");
console.log(
  "Opgave 1 - Lav et program som summere følgende array, uden brug af Aggregat Funktioner:"
);
let talrække4 = [0, 12, 0, 22, 300, 4, 5];
let sum = 0;
for (let i = 0; i < talrække4.length; i++) {
  sum += talrække4[i];
}
console.log(sum);

console.log("");
console.log(
  "Opgave 2 - Lav et program som skriver alle værdierne i dette array, ved brug af foreach:"
);
let talrække5 = [0, 12, 0, 22, 300, 4, 5];
talrække5.forEach((nummer) => {
  console.log(nummer);
});

//talrække = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12]
//talrække = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 122]
console.log("");
console.log(
  "Opgave 3 - Lav et program som returnere indexet af det højeste tal, altså giver dens placering i begge disse arrays"
);

let talrække6 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];
let talrække7 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 122];
console.log(talrække6.indexOf(Math.max(...talrække6), 0));
console.log(talrække7.indexOf(Math.max(...talrække7), 0));
// Kan også bruges --> console.log(talrække6.indexOf(300, 0));
// Kan også bruges --> console.log(talrække7.indexOf(122, 0));

console.log("");
console.log(
  "Opgave 4 - Lav et program som tæller hvor mange gange 12, står i den her array:"
);

let talrække8 = [0, 12, 0, 22, 300, 4, 5, 12, 12, 212, 12];
let antalAf12Taller = 0;
for (let index in talrække8) {
  if (talrække8[index] === 12) {
    antalAf12Taller++;
  }
  if (talrække8.length === Number(index) + 1) {
    console.log("Antal af 12 taller: " + antalAf12Taller);
  }
}

console.log("");
console.log(
  "Opgave 5 - Lav et program som tæller, hvor mange værdier som er positive i dette array: (0 er ikke positiv i denne opgave)"
);
let talrække9 = (talrække = [0, -12, 0, -22, -300, 4, 5, -12, 12, -212, 12]);
let positiveTal = 0;
for (let index in talrække9) {
  if (talrække9[index] > 0) {
    positiveTal++;
  }
  if (talrække9.length === Number(index) + 1) {
    console.log("Antal positive tal: " + positiveTal);
  }
}

console.log("");
console.log(
  "opgave 6 - Lav et program som finder gennemsnittet af følgende array og alle andre arrays bestående af tal uden brug af Aggregat Funktioner:"
);

let talrække10 = [0, 12, 0, 22, 300, 4, 5, 1000, -50, 32];
function gennemsnit(talrækkeliste) {
  let talRækkeSum = 0;
  let talrække10Gennemsnit = 0;
  for (let index in talrækkeliste) {
    talRækkeSum += talrækkeliste[index];
    if (talrækkeliste.lenght === Number(index) + 1) {
      talrække10Gennemsnit = talRækkeSum / talrækkeliste.length;
    }
  }
  console.log(talrække10Gennemsnit);
  return talrække10Gennemsnit;
}
gennemsnit(talrække10);

console.log("");
console.log(
  "Opgave 8 - Ved brug af object formatet i JS, lav objekter på følgende måde: Lav et program som returnere fornavn og efternavn, hvis følgende er rigtige 1. Over 30 2. Blå, grønne eller røde øjne. Hvis en eller flere af de kriterier ikke er mødt skal personen ikke “udskrives"
);
// https://www.w3schools.com/js/js_functions.asp

const person1 = {
  firstName: "Anders",
  lastName: "Andersen",
  age: 29,
  eyeColor: "grøn",
};
const person2 = {
  firstName: "Mads",
  lastName: "Madsen",
  age: 32,
  eyeColor: "blå",
};
const person3 = {
  firstName: "Han",
  lastName: "Hansen",
  age: 55,
  eyeColor: "brun",
};

function person(person) {
  if (
    person.age > 30 &&
    (person.eyeColor === "blå" ||
      person.eyeColor === "grøn" ||
      person.eyeColor === "rød")
  ) {
    console.log(person.firstName, person.lastName);
  } else {
    console.log("Ingen personer fundet!");
  }
}
person(person2);
