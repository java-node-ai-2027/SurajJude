//callback
setTimeout(() => {
    console.log("Done");
}, 1000);

function getData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

getData((data) => {
    console.log(data);
}); //after 1 seccond it will print "data received"
//callback hell
getUser((user) => {
    getOrders(user, (orders) => {
        getPayment(orders, (payment) => {
            getDetails(payment, (details) => {
                console.log(details);
            });
        });
    });
});

//promise
let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data received");
    }, 1000);

});

//handling data with promise 
promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });


//promise chaining
getUser()
    .then(user => getOrders(user))
    .then(orders => getPayment(orders))
    .then(payment => getDetails(payment))
    .then(details => console.log(details))
    .catch(error => console.log(error));

//async/await
async function getData() {

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);
}
