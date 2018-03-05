/*
1. Fiz Buzz - Log the number from 1 to n. But for Multiple 
of 3 print 'Fizz', for multiple of 5 print 'Buzz' and for multiple of 
3 and 5 print 'FizzBuzz'
*/

function fizz(n){
    for(i = 1;i <= n ; i++){
        if( i % 3 === 0 && i %5 === 0){
            console.log('FizzBuzz');
        }
        else if (i % 5 === 0){
            console.log('Buzz');            
        }
        else if( i % 3 ){
            console.log('Fizz');            
        }
        else{
            console.log(i);
            
        }
    }
}
fizz(18);