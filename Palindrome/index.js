/*
1. Palindrome- check if the string is palindrome
example - palindrome('racecar') ==> 'racecar'
*/
function palindrome(str){
//    return str.split('').reverse().join('') === str;

    return str.split('').every((char, i) => char === str[str.length -i -1] );
}

var output = palindrome('racecar');
console.log(output);