//Simple Loops (uden arrays eller lign)

//for-løkken eller for-loop er en af de mest almindelige typer af loops og bruges, når du kender antallet af gentagelser på forhånd. Den består af tre vigtige dele: initialisering, betingelse og opdatering.

// - Initialisering: Her initialiseres en tæller, normalt med værdien 0 eller et andet startpunkt.
// - Betingelse: Her tjekkes en betingelse. Løkken fortsætter, så længe betingelsen er sand.
// - Opdatering: Her opdateres tælleren normalt med en værdi, der bringer dig tættere på at opfylde betingelsen.
// Her er et eksempel på en for-løkke, der udskriver tal fra 1 til 5:
// for (let i = 1; i <= 5; i++) {console.log(i);}

console.log(
  "Opgave 1. Lav et program som skriver alle tal fra 1 - 100 ud i konsollen en efter en"
);
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

//Dette program bruger to for-løkker. Den ydre løkke (i) går fra 0 til 100, og den indre løkke (j) går fra i til i + 2. Dette skaber det ønskede mønster af tal.
// - Line variablen bruges til at opbygge hver linje, der udskrives i konsollen.
// -.trim() bruges til at fjerne det sidste mellemrum i hver linje.
console.log(
  "Opgave 2. Lav et program som skrive alle tal fra 1 til 102, på følgende måde"
);
for (let i = 0; i <= 100; i++) {
  console.log(i + " " + (i + 1) + " " + (i + 2));
}

console.log("Opgave 3 - fizzbuzz");

//for (let i = 1; 1 <= 100; i++) {
//if (i % 3 == 0 && i % 5 == 0) {
//console.log("Fizzbuzz");
//} else if (i % 3 == 0) {
//console.log("Fizz");
//} else if (i % 5 == 0) {
//console.log("Buzz");
//} else {
//console.log(i);
// }
//}
