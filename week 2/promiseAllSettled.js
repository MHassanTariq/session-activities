const promise1= Promise.resolve(40);
const promise2 = new Promise(resolve => setTimeout(() => resolve(66), 0));
const promise3 =  Promise.reject(('an error'));


const result = Promise.allSettled([promise1,promise2,promise3])
result.then(values => console.log(values)).catch((error)=>console.log(error));


