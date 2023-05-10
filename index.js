function reverse(word){
  return word.split("").reverse('').join('')
}
function isPalindrome(word){
  const reversedWord = reverse(word)
  return word === reversedWord
}
/* 
  if palindrome is true, return true. else, false
*/

/*
 find a method() that will force java to read the condition forward and backwards 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
