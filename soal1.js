function changeWord(selectedText, changeText, text) {}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

// EXPECTED RESULT
console.log(changeWord("mencintai", "membenci", kalimat1));
// Andini sangat membenci kamu selamanya

console.log(changeWord("bromo", "semeru", kalimat2));
