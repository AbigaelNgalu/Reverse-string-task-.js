//reverse.js
function reverseString(str) {
  const charArray = str.split('');
  const reversedArray = charArray.reverse();
  const reversedStr = reversedArray.join('');
  return reversedStr;
}

console.log(reverseString("Abigael Ngalu")); // Output: "ulagN leagibA"