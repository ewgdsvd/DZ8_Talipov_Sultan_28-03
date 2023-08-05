function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return cleanStr === cleanStr.split("").reverse().join("");
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Race car"));
console.log(isPalindrome("A man a plan a canal Panama"));
