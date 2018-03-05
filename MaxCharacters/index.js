/*
1. Max Character - Character that is most commanly used
Ex-
maxChar("abcccccccd") ==> c
*/
function maxChar(str){
     const charMap = [];
     let max = 0;
     let maxChar = '';

     for(let char of str.toLowerCase()){
         if(charMap[char]){
             charMap[char]++;
         } else {
             charMap[char] = 1;
         }
     }
     
     for( let char in charMap){
         if(charMap[char] > max){
             max = charMap[char];
             maxChar = char;
         }
     }    
     return maxChar;
}

var output = maxChar('Hello there');
console.log(output);