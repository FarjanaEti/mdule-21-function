function sumarray(numbers){
//    console.log(numbers)
let sum=0;
   for(const num of numbers){
     console.log(num);  
     sum=sum+num;                     
   }
   return sum;  
}
let number=[2,1,5,3];
const sum=sumarray(number);
console.log('sum of array:', sum);