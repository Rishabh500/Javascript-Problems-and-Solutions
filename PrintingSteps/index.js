/*
Write function to accept positive number N, return
N levels using # character. make sure the step have space equal to N
Ex
 Steps(2)
 '# '
 '##'
 Steps(3)
 '#  '
 '## '
 '###'
*/
// function steps(n){
    
//     for(i =0; i <= n ;i++){
//         var stair = '';
//         for(j =0; j <= i ;j++){
//             if(j<=i){
//                stair += '#';
//            } else {
//             stair +=' ';
//            }
//         }
//         console.log(stair);
//     }
// }

function steps(n, row = 0, stair =''){
    if (n == row){
        return;
    }
    if (n === stair.length){
        console.log(stair);
        return steps(n, row+1);
    }
    if(stair.length <= row){
        stair += '#';
    } else {
        stair += ' ';
    }
    steps(n,row,stair);

 }

steps(5);