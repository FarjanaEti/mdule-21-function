// Take four parameters. Multiply the four numbers and then return the result

function multiply(a,b,c,d){
//   console.log(a,b,c,d)
  return a*b*c*d;
}
const mul=multiply(2,3,4,5);
// console.log(mul);

// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function oddeven(num){
if(num%2===0){
  const even=num/2;
  return even;                            
}
else{
   const odd=num*2;
   return odd;                           
}
}
const result=oddeven(6);
console.log(result);