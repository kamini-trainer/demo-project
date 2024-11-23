const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data)
        setTimeout(() => {
          const data = "Hello, world!";
          resolve(data); // Resolve the promise with data after a delay
        }, 1000);
      });
  
      console.log("Before promise");
  
      myPromise.then((data) => {
        console.log("Inside promise's .then()");
        console.log(data); // Output: Hello, world!
      });
  
      console.log("After promise");