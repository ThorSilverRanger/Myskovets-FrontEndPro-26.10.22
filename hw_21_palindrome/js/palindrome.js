function validPalindrome(str) {
    if(str === reverse(str)) return "OK";
    let strlen = str.length;
    for(let i=0; i<strlen; i++) {
        let partial = str.substring(0, i) + str.substring(i+1, strlen);
        let reversed = reverse(partial);
        if(partial === reversed) {
            return "Remove One";
        }
    }
    return "Not Possible";
}

function reverse(str) {
    let newStr = '';
    for(let i=str.length; i>=0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}

console.log(validPalindrome("abba")); // "OK"
console.log(validPalindrome("abbaa")); // "Remove One"
console.log(validPalindrome("abbaab")); // "Not Possible"
console.log(validPalindrome("madmam")); // "Remove One"
console.log(validPalindrome("raydarm")); // "Not Possible"
console.log(validPalindrome("hannah")); // "OK"