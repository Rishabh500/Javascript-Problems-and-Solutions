/* 1. ARRAY CHUNKING
 Split an array into chunked arrays of a specific length
 ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
*/

function chunkArray(arr,len){
    var newArr = [];
    var i = 0;
// console.log(arr.splice(2,3));
    while(i < arr.length){
        newArr.push(arr.slice(i,i+len));
        // console.log(i);
        i+=len;
    }
    console.log(newArr);
} 
chunkArray([1,2,3,4,5,6],2)