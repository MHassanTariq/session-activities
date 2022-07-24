//filter even numbers from given array using promises. The promise should reject if array length is smaller than 1


function evenNumber(numarray){
    return new Promise((resolve,reject)=>{
      if(numarray.length<1)
         reject("Inavalid array")
      const numbers = numarray.filter(function(num){
        return num % 2===0;
      })
      resolve(numbers);
    })
    
    
  }
  
  
  const result = evenNumber([1,2,3,4,5,6,7])
  result.then(value=>console.log(value)).catch(error=>console.log(error))