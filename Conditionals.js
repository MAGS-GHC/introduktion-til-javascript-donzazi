//Conditionals - If / else statements OPGAVER!!

console.log("Conditionals - If / else statements OPGAVER!");

console.log(
  "Opgave 1 - I skal skrive et stykke kode som fortæller om et tal (int) er lige eller ulige."
);

let nr2 = 200;
console.log("Is the number 2 equal or odd?");
if (nr2 % 2 == 0) {
  console.log("equal");
} else {
  console.log("odd");
}

console.log(
  "opgave 2- I skal skrive et stykke kode som fortæller om 5 går op i det tal som i vælger (int). Hvis den går op i det skal i skrive: 5 går op i (det tal i har valgt"
);
let nr3 = 27;
if (nr3 % 5 == 0) {
  console.log("Går op i");
} else {
  console.log("Den går ikke op i");
}

console.log(
  "opgave 3 - Lav opgaven ↑ igen, men i stedet for selv at vælge et tal skal i lave sådan at den selv vælger et tal mellem 0 og 100."
);
let nr4 = Math.random();
if (nr4 % 5 == 0) {
  console.log("Går op i");
} else {
  console.log("Den går ikke op i");
}
//let randomNr = Math.floor{Math.random()}*100+1
//console.log(randomNr);
//if (randomNr % 5==0){console.log("Går op i")}
//else {console.log("Går ikke op i")};

console.log(
  "Opgave 4 - Lav et program som fortæller jer hvilke af de her 3 tal der er størst. a = 25; b = 33; c = 12;"
);
let a = 25;
let b = 33;
let c = 12;
if (a > b && a > c) {
  console.log(a + " er størst.");
} else if (b > a && b > c) {
  console.log(b + " er størst.");
} else if (c > a && c > b) {
  console.log(c + " er størst");
}
