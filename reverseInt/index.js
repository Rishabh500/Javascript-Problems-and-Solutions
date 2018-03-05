/*
1. Reverse Int - Given an Integer, return an integer that is reverse 
EX - reverseInt(-15) ==> -51
*/
function reverseInt(int){

    var reversedString = int.toString().split('').reverse().join('');
    return parseInt(reversedString) * Math.sign(int);

}

var output = reverseInt(-15);
console.log(output);