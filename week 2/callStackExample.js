const getSum =(a,b) =>  a+b;

const timeConsumingTask = new Promise(function (resolve, reject){
   setTimeout(function() {
    resolve("Processed after some time");
    }, 3000);
});

const getLocation = () =>"Current Location is lahore";
  
  
  
console.log(getSum(2,5));
timeConsumingTask.then(value=>console.log(value));
console.log(getLocation());
