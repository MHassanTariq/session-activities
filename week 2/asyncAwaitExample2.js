const timeout = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("after timeout")
    }, 3000);
  });
  
  const asyncFunc = async () => {
      const response = await timeout;
  }
  
  console.log(1);
  console.log(2);
  
  asyncFunc().then(data => console.log(data));
  
  console.log(3);
  console.log(4);