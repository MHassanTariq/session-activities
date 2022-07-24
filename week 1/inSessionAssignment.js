const sum= (...args)=>{
    return args.reduce(function(result,curr){
      return result+curr;
    })
  }
  
  
  console.log(sum(1,2))
  console.log(sum(1,2,4))
  console.log(sum(1,2,5,6))