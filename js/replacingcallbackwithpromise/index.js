const getUser = new Promise((resolve) => {

    // code to get user
    const user = {
        id: 1,
        name: "Suraj"
    };

    resolve(user);
});


const getOrder = (user) => new Promise((resolve, reject) => {

    // code to get order by user
    const order = {
        id: 101,
        userId: user.id,
        product: "Laptop"
    };

    if (order) {
        resolve(order);
    } else {
        reject("Something went wrong");
    }

});


// Replacing callback with Promises

getUser
    .then((user) => {
        return getOrder(user);
    })
    .then((order) => {
        console.log("Order:", order);
    })
    .catch((error) => {
        console.log(error);
    });