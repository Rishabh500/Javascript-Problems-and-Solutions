/*
1. Pyramid - Function should console log a pyramid shape based on input
Example -
'  #  '
' ### '
'#####'
Logic 
 2 * rows - 1 = number of columns
*/
// function pyramid(n){
//     const midpoint = Math.floor((2*n-1) / 2);

//     for(var i = 0 ; i<n ; i++){
//         let level ='';
//         for(var j=0 ; j < 2*n-1 ; j++){       
//             if( midpoint - i <= j && midpoint + i >= j){
//                 level += '#';
//             } else{
//                 level += ' ';
//             }
//         }
//         console.log(level);
//     }
// }
function pyramid(n, row = 0,level = ''){
    if(row === n){
        return;
    }

    if(level.length === 2*n-1){
        console.log(level);
        return pyramid(n,row+1);
    }
    const midpoint = Math.floor((2*n-1)/2);
    let add;
    if(midpoint - row <= level.length && midpoint + row >= level.length){
        add = '#';
    } else {
        add = ' ';
    }
    pyramid(n, row , level+add);
}

pyramid(3);
