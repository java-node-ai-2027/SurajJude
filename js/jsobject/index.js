//Creating Object (Object Literal)

const person = {
    name: "Suraj",
    age: 25,
    city: "Pune"
};


//Accessing Properties

// Dot notation
console.log(person.name);       // Suraj

// Bracket notation
console.log(person["age"]);     // 25


// Adding Properties

person.country = "India";
person.job = "Developer";

console.log(person);


//Modifying Properties

person.age = 26;
person.city = "Mumbai";

console.log(person);


//Deleting Properties

delete person.job;

console.log(person);


//Object Methods

const user = {
    name: "Suraj",

    greet: function() {
        console.log("Hello");
    }
};

// Calling the method
user.greet();                   // Hello


//'this' in Object

const student = {
    name: "Suraj",
    age: 25,

    introduce() {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    }
};

student.introduce();

// this.name → student.name
// this.age  → student.age


//Nested Object

const employee = {
    name: "Suraj",

    address: {
        city: "Pune",
        state: "Maharashtra",
        country: "India"
    }
};

// Accessing nested properties
console.log(employee.address.city);       // Pune
console.log(employee.address.country);    // India


//Checking if a Property Exists using 'in'

console.log("name" in person);       // true
console.log("age" in person);        // true
console.log("salary" in person);     // false


//Object.keys()

// Returns an array containing all keys
console.log(Object.keys(person));

// Example:
// ["name", "age", "city", "country"]


//Object.values()

// Returns an array containing all values
console.log(Object.values(person));

// Example:
// ["Suraj", 26, "Mumbai", "India"]


//Object.entries()

// Returns an array of [key, value] pairs
console.log(Object.entries(person));

// Example:
// [
//     ["name", "Suraj"],
//     ["age", 26],
//     ["city", "Mumbai"],
//     ["country", "India"]
// ]