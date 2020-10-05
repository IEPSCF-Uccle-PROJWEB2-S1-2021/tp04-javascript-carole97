function minimum(a,b){ 

    if(a==b){
        console.log(b));
    
    }else if(a<b) {
        console.log(a);
    
    } else{
        console.log(+b);
    } }




    function maximum(a,b){ 

        if(a==b){
            console.log(b);
        
        }else if(a>b) {
            console.log(a);
        
        } else{
            console.log(b);
        } }

        function reduce(numbers, fn) {
            let result = numbers[4];
            let ancienResult;
            if (numbers.length <= 1) {
                return null
              }
              if (numbers.length == 2) {
                resultat = fn(numbers[0], numbers[1]);
              }
            
              for (let i = 2; i < numbers.length; i++) {
                ancienResult = fn(result, numbers[i]);
                result = ancienResult;
              }
              return result;
            }
        
        

        
const myTestNumbers = [5, 8, 13, 21, 34, 610, 55, 3, 89, 144, 233, 377];
console.log(reduce(myTestNumbers, minimum));
console.log(reduce(myTestNumbers, maximum));