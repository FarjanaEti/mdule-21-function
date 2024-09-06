// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
let avg=0,sum=0;
function make_avg(num){
  let len=num.length;
  console.log('length=', len);
  for(const value of num){
//    console.log(value);
   sum=sum+value;
   avg=sum/len;
  }
return avg;
}
const number=[2,3,4,5,6];
let result=make_avg(number);
console.log('Avg=', result);
