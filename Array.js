//Arrays
console.log(
  "Opgave 1. Skriv “Viborg” i konsollen ved at trække den ud fra følgende array"
);
let byer = ["Randers", "Viborg", "Aarhus", "København"];
console.log(byer[1]);

console.log("opgave 2. Tilføj “Skive” til denne array");
byer.push("Skive");
console.log(byer);

console.log(
  "opgave 3. Erstat den værdi, uden at ændre direkte i array’et, som ikke passer ind, så array’et stemmer:"
);
let talrække = [0, 1, 0, 3, 4, 5, 6];
console.log(talrække);

talrække.splice(2, 1, 2);
console.log(talrække);

console.log(
  "Opgave 4. Skriv, i konsollen, den største værdi fra følgende array. Selvfølgelig ikke manuelt."
);
let talrække1 = [1, 2, 3, 4, 11, 55, 99, 100];
console.log(talrække1);
console.log(talrække1[7]);

console.log("Opgave 5. Sorter den her array");
let talrække2 = [0, 12, 0, 22, 33, 4, 5];
console.log(talrække2);
talrække2.sort(function (a, b) {
  return a - b;
});
console.log(talrække2);

console.log("opgave 6. Sorter den her array i omvendt rækkefølge:");
let talrække3 = [0, 12, 0, 22, 300, 4, 5];
console.log(talrække3);
talrække3.sort(function (a, b) {
  return b - a;
});
console.log(talrække3);
