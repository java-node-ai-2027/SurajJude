const p1 = Promise.resolve("promise1");
const p2 = Promise.resolve("promise2");
const p3 = Promise.resolve("promise3");
const p4 = Promise.resolve("promise4");

Promise.all([p1,p2,p3,p4]).then(result=>{
    console.log(result);
}).catch(error=>{
    console.log(error);
});
