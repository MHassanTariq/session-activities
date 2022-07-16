function sum(a, b) {
  const multiplier = 5;
  const result = multiplier * a;
  return result + b;
}

function isPositive(number) {
  return number >= 0;
}

function location() {
  return "Lahore";
}

/*
const sum=(a,b)=>{
    const multiplier=5;
    const result = multiplier * a;
    return result+b;
  }
  
const isPositive= (number) number>=0;
  
const  location=()=> return "Lahore";
  */

console.log(sum(3, 4));
console.log(isPositive(2));
console.log(location());

//'this' context
const person = {
  name: "Hassan",

  printNameArrow() {
    setTimeout(() => {
      console.log("arrow function: " + this.name);
    }, 100);
  },

  printNameFunnction() {
    setTimeout(function () {
      console.log("regular function: " + this.name);
    }, 100);
  },
};

person.printNameArrow();
person.printNameFunnction();
