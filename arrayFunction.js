const numbers = [1, 2, 3, 4,5,6];
const FirstDoubledArray=[];

//using basic array
for( i= 0;i<4;i++){
 FirstDoubledArray[i] =numbers[i]*2;
}
console.log("\nDoubled array using for loop:  "+FirstDoubledArray)

//using map
const SecondDoubledArray = numbers.map(item => item * 2);
console.log("\nDoubled array using map: "+SecondDoubledArray); 

//using forEach
console.log("\nUsing forEach: ")
numbers.forEach(item =>{
  console.log(item*2);
})


//using filter 
const evens = numbers.filter(item => item % 2 === 0);
console.log("\nUsing filter")
console.log(evens); 

//uisng reduce 
const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);
console.log("\nUsing reduce")
console.log(sum); // 10