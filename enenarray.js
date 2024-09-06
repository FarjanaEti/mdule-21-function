function evenonly(numbers){
// console.log(numbers);
let sum=0;
for(const numb of numbers){
//  console.log(numb);
 if(numb%2===0){
 console.log(numb);
 sum=sum+numb;
 }
}
return sum;
}
let num=[3,8,1,10];
let even=evenonly(num);
console.log('even number=',even);