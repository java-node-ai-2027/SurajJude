//conditional controll
//if
let age = 20;

if (age >= 18) {
    console.log("Adult");
}

//if else


if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

//else if
let marks = 75;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 70) {
    console.log("B");
} else if (marks >= 50) {
    console.log("C");
} else {
    console.log("F");
}


//switch
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}
//ternary
let result = age >= 18 ? "Adult" : "Minor";


//looppint & iteration
//for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}
//do while 
do {
    console.log(i);
    i++;
} while (i < 5);
//for of
let arr = [10, 20, 30];

for (let value of arr) {
    console.log(value);
}

//for in
let person = {
    name: "Suraj",
    age: 25
};

for (let key in person) {
    console.log(key);
}

//jump statement

//break
for (let i = 0; i < 5; i++) {

    if (i === 3) {
        break;
    }

    console.log(i);
}

//continue
for (let i = 0; i < 5; i++) {

    if (i === 2) {
        continue;
    }

    console.log(i);
}

//exception handling
//try catch
try {
    let result = someFunction();
} catch (error) {
    console.log("Something went wrong");
}

//finally
try {
    console.log("Try");
} catch (error) {
    console.log("Catch");
} finally {
    console.log("Finally");
}
//throw


if (age < 18) {
    throw new Error("Age must be 18 or above");
}