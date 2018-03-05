/*
1. Reverse a String
Example - 
reverse('apple') ==> elppa
*/
function reverse(str){
    // return str.split('').reverse().join('');
    return str.split('').reduce((reversed,character) => {
        return character + reversed
    }, '');
}

var output = reverse('apple');
console.log(output);