/*
Challenge 1 : Reverse a string
*/
function reverseString(str){
    //  return str.split('').reverse().join('');

///////////////////////////////////////////////////////

    // const strArr = str.split('');
    // var output = '';
    // for(var i = strArr.length-1; i>=0;i--){
    //     output += strArr[i];
    // }
    // return output;

////////////////////////////////////////////////////////

    return str.split('').reduce((revString,char) => char + revString, '');
}


/*
Challenge 2 : Check for Palindrome
*/
function isPalindrome(str){
    const revString =  str.split('').reverse().join('');

    return revString == str;
}

/*
Challenge 3 : REVERSE A INTEGER
*/
function revInt(int){
    const revString = int.toString().split('').reverse().join('');

    return revString;
}

/*
Challenge 4 : CAPITALIZE LETTERS
              Capitalize first letter
*/
function captilizeLetter(str){
    // var strArr = str.toLowerCase().split(' ');
    // var revString = '';

    // for(var i = 0;i<=strArr.length-1; i++){
    //     // console.log(strArr[i].substr(0,1).toUpperCase() + strArr[i].substr(1));
    //     strArr[i] = strArr[i].substr(0,1).toUpperCase() + strArr[i].substr(1);     
    // }

    // return strArr.join(' ');

/////////////////////////////////////////////////////////////////////

return str
    .toLowerCase()
    .split(' ')
    .map(i => i.substr(0,1).toUpperCase() + i.substr(1))
    .join(' ');
}

/*
CHALLENGE 4 : Fizz Buzz
For multiples of 3 return Fizz, For multiples of 5 return Buzz
For multiples of 3 and 5 return FizzBuzz
*/
function fizzBuzz(){

    for(var i = 0;i<=100 ; i++ ){
        
        if(i%3 == 0 && i%5 == 0){
            console.log('Fizz Buzz');
        }
        
       else if(i%3 == 0){
            console.log('Fizz');
        }
        else if(i%5 == 0){
            console.log('Buzz');
        }
        else{
            console.log(i);
        }
    }

}

/*
// CHALLENGE 5: LONGEST WORD
// Return the longest word of a string, pluk out the longest word
// ex. longestWord('Hi there, my name is Brad') === 'there,'
// ex longestWord('Hi there, my name is Rishabh') === 'Rishabh,'
*/
function longestWord(str){
    var wordArr = str.toLowerCase().match(/[a-z0-9]+/g);

    const sorted = wordArr.sort((a,b) => {
        return b.length - a.length;
    });

    const longestWordArr = sorted.filter(a =>{
        return a.length == sorted[0].length;
    });

    return longestWordArr.toString();
}

// CHALLENGE 6: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
function chunkArray(arr,len){

    chunkedArr = [];

    var i =0;
    
    while(i < arr.length){
        chunkedArr.push(arr.splice(i,i+len));
    }
    return chunkedArr;
}

// CHALLENGE 7: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
function flattenArray(arr){

    return arr.reduce((a,b)=>{
        return a.concat(b);
    });
}

// CHALLENGE 8: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
function isAnagram(str1,str2){
  return  formatStr(str2) ===  formatStr(str1);
}
function formatStr(str){
    return str.replace(/[^\w]/g,'')
                .toLowerCase()
                .split('')
                .sort()
                .join('');                
}

// CHALLENGE 8: ANAGRAM
// Change every character with next characterand capitalize the vowels
function letterChanges(str){
    let newStr = str.replace(/a-z/gi,(char) => {
        if(char === 'z'|| char === 'Z'){
            return 'a';
        } else{
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    newStr.replace(/a|e|i|o|i/gi,(vowel) => {
        return vowel.toUpperCase();
    });

    return newStr;
}



var output = letterChanges('elbow');
console.log(output);