// Creating current date and time
const now = new Date();

console.log(now);//2026-08-21T14:15:18.877Z

// Creating a specific date
const date = new Date("2026-08-21");

console.log(date);

// Getting date values
console.log(now.getFullYear()); // year
console.log(now.getMonth());    // month (0-11)
console.log(now.getDate());     // day of month (1-31)
console.log(now.getDay());      // day of week (0-6)

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// Modifying date
now.setFullYear(2027);
now.setMonth(5);
now.setDate(15);

console.log(now);



