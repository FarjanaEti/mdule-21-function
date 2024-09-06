// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
let count="";
function binary(str){
  for(let i=0; i<str.length; i++){
 console.log(str[i]);  
  if(str[i]==='0'){
    count++;                          
  }
  }                            
   return count;                         
}
let zero= binary('101000111011');
console.log('number of zero=', zero);