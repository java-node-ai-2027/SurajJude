//settled resolved promise

const promise = Promise.resolve("success");
promise.then(message=>{
    console.log(message);
});

//settled rejected promise
const p = Promise.reject("something went wrong");
p.catch(error=>{
    console.log(error);
});


