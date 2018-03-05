/*
1. Anagram - Check if two strings are anagrams of each other
ie if it uses the sane characters in the same quantity
Ex -
anagrams('rail safety','fairy tales') ==> true
*/
function anagram(str,str1){
    console.log(sort(str) === sort(str1));
}

function sort(str){
    return str.replace(/[\W]/gi,'').
    toLowerCase().split('').sort().join('');
}

anagram('rail@@@ safety@@','fairy taleS!!!');