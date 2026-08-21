//callback hell 
getUser(function(user) {
    getOrders(user, function(orders) {
        getPayment(orders, function(payment) {
            console.log(payment);
        });
    });
});

//to make callback hell not nested and improve its readibility
function handlePayment(payment) {
    console.log(payment);
}

function handleOrders(orders) {
    getPayment(orders, handlePayment);
}

function handleUser(user) {
    getOrders(user, handleOrders);
}

getUser(handleUser);

