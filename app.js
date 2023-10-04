//Skriv alt jeres kode her

console.log(
  "Opgave 1.1 - Lav et program, som skriver “Hello World” i konsollen"
);
//Lav jeres svar her
console.log("Hello World");

console.log(
  "opgave 1.2 - Lav et program, som skriver “Hello” og på næste linje skriver “World” i konsollen"
);
console.log("Hello\nWorld");
console.log("Hello");
console.log("World");

console.log("opgave 1.3 - Lav et program, som skriver følgende i konsollen");

console.log("*\n**\n***\n**\n*\n");

console.log(
  "opgave 1.4 - Lav et program, hvor i definere en konstant eller variabel og programmet skriver hvilken type det er, i konsollen. (Altså om det er en int, string, bool osv.)"
);

console.log(typeof "foo");
console.log(typeof 42);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

//let foo = 42; foo is now a number
//foo = "bar"; foo is now a string
//foo = true;  foo is now a boolean

//const fuu = 42; // fuu is a number
//const result = fuu + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand

//Type	      typeof return value	    Object wrapper

//Null	      "object"	              N/A
//Undefined	  "undefined" 	          N/A
//Boolean   	"boolean"	              Boolean
//Number	    "number"	              Number
//BigInt	    "bigint"	              BigInt
//String	    "string"	              String
//Symbol	    "symbol"	              Symbol

console.log(
  "Opgave 1.5 - Print svarene på følgende matematiske operationer ved at skrive det direkte ind i Console.log(): fx, Console.log(5 + 5) ⇒ 10"
);

console.log(10 - 5);
console.log(25 / 3);
console.log(25 % 3);
console.log(25 % 2);
console.log(3 ** 2);

console.log(
  "Opgave 1.6 - Skriv i konsollen kombinationen af de her 2 strings ved brug af deres..."
);
let tekst1 = "Hello";
let tekst2 = "World!";
console.log(tekst1);
console.log(tekst2);
console.log(tekst1 + " " + tekst2);

console.log(
  "Opgave 1.7 - Udskriv længden af den her string “GF2 Online” - altså antal tegn"
);

let tekst3 = "GF2 Online";
console.log("the length for this string is: " + tekst3.length);

console.log(
  "opgave 1.8 - Lav et program som skriver et tilfældig tal i konsollen"
);

let nr1 = Math.random();
console.log(nr1);

console.log(
  "Opgave 1.9 - Find ud af hvad hver linje skriver ud i vores konsol og forklar hvorfor lige præcis det bliver skrevet"
);

//One interesting thing to note and be aware of in JavaScript is the result of adding a number and a string. We know that 1 + 1 should equal 2, but this equation will have unexpected results. So "let x = 1 +"1"; result in "11" instead of "2".
let number = 23;
console.log(number);
console.log((number = "23")); // We use "=" to assign a value on the right to a variable on the left.
console.log(number == "23"); // Equal = Returns true if the operands are equal.
console.log(number === "23"); // Strict Equal = Returns true if the operands are equal and of the same type.
console.log((number -= 23)); // 	Subtraction assignment = Subtracts the value on the right from the variable value on the left, and returns the new variable value

console.log((number += 23)); // Addition assignment = Adds the value on the right to the variable value on the left, then returns the new variable value

console.log((number += "23")); // concatenate = just put 23 and 23 together, so the result is "2323".
console.log((number -= "46")); // = Puts the 23 and 23 together, but substracts 48 from 2323, so the result will be 2277.

console.log(number != "23"); // Not Equal = Returns true if the operands are not equal.
console.log((number **= 2)); // number exponentiation = Put the 2277*2277 = 5184729

//https://www.digitalocean.com/community/tutorials/how-to-do-math-in-javascript-with-operators

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

console.log("opgave 2- ");
let nr3 = 27;
if (nr3 % 5 == 0) {
  console.log("Går op i");
} else {
  console.log("Den går ikke op i");
}

//console.log("opgave 3 -");

//let randomNr = Math.floor{Math.random()}*100+1
//console.log(randomNr);
//if (randomNr % 5==0){console.log("Går op i")}
//else {console.log("Går ikke op i")};
