// A closure occurs when an inner function
// remembers and can access variables from
// its outer function even after the outer
// function has finished executing.

function outer() {

    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}


// outer() finishes execution,
// but inner() still remembers 'count'

const counter = outer();

counter();  // 1
counter();  // 2
counter();  // 3


//ex 2
function createGreeting(name) {

    return function() {
        console.log("Hello " + name);
    };
}

const greetSuraj = createGreeting("Suraj");

greetSuraj();
// Hello Suraj

// Even though createGreeting() has finished,
// the returned function still remembers `name`.




function createUser(name, age) {

    function getUser() {
        console.log("Name:", name);
        console.log("Age:", age);
    }

    return getUser;
}

const user = createUser("Suraj", 25);

user();

// Output:
// Name: Suraj
// Age: 25