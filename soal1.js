function changeWord(selectedText, changeText, text) {
  // if (text) {
  //   text = text.replace(selectedText, changeText);
  // } else {
  //   selectedText;
  // }
  changedText = text.replace(selectedText, changeText);
  return changedText;
  // return text.replace(selectedText, changeText);
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";

// EXPECTED RESULT
console.log(changeWord("mencintai", "membenci", kalimat1));
// Andini sangat membenci kamu selamanya

console.log(changeWord("bromo", "semeru", kalimat2));
// Gunung semeru tak akan mampu menggambarkan besarnya cintaku padamu
