const photocopier="true";
const JimTask = new Promise(function (resolve, reject){
  if(photocopier){
      setTimeout(function() {
    resolve("Get your degrees today!");
    }, 1000);
  }
    else
      reject("Come again tomorrow");
});

const getDegreesToday = () =>{
  JimTask.then(success=>{
    console.log(success);
  }).catch(error=>{
    console.log(error)
  })
}


getDegreesToday();
console.log("processing ")
console.log("sorting stuff out")
console.log("getting hard copies signed")
