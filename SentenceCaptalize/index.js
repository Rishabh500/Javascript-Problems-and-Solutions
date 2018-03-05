/*
1. Sentence Captilize - Captalize first letter of each word.
Examples 
capitalize('a short sentence') ==> A Short Sentence
*/
function capitalize(str){
   const strArr = str.split(' ');
   return strArr
   .map(i => i.substr(0,1).toUpperCase() + i.slice  (1)).join(' ');
//    console.log(strArr);
}
var output = capitalize('hello there');
console.log(output);