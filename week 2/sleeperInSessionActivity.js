async function sleeperFunction(seconds) {
    return new Promise(resolve => {
      const mili_seconds = seconds * 1000;
      setTimeout(() => {
        resolve();
      }, mili_seconds);
    });
  }
  
  async function testingSleeperFunction() {
    console.log('Printing before sleeper function');
    await sleeperFunction(5); /** <-- should sleep for 5 seconds */
    console.log('Printing after sleeper function');
  }
  
  testingSleeperFunction();