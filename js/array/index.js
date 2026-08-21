//array declaration
let arr=[];

//initiallization
let arr1=[1,2,3,4,"suraj",true];

//lenght
console.log(arr1.length); //6

//accessing 
console.log(arr1[1]); //1


//indexof
console.log(arr1.indexOf("suraj")); //4

//find the last occurence of
console.log(arr1.lastIndexOf(20)); // -1
//adding element to last

arr1.push(9);
console.log(arr1);

//adding element to first
arr1.unshift(10);


//removing elelemnt from last
arr1.pop();

//removing first element
arr.shift();

//updating element
arr1[5] = 8;


//checking varible is array

console.log(Array.isArray(arr1)); //true;

//includes
let arr2 = [10, 20, 30];

console.log(arr2.includes(20)); // true
console.log(arr2.includes(50)); // false

//splice
let arr3 = [10, 20, 30, 40];

arr3.splice(1, 1);

console.log(arr3);
// [10, 30, 40]

//slice
let arr4 = [10, 20, 30, 40, 50];

let result = arr4.slice(1, 4);

console.log(result);
// [20, 30, 40]

//find
let arr5 = [10, 20, 30, 40];

let result1 = arr5.find(x => x > 25);

console.log(result1); // 30
//findindex
let arr6 = [10, 20, 30, 40];

console.log(arr6.findIndex(x => x > 25));
// 2

//foreach
let arr7 = [10, 20, 30];

arr7.forEach(x => {
    console.log(x);
});

//map
let arr8 = [1, 2, 3, 4];

let result2 = arr8.map(x => x * 2);

console.log(result2);
// [2, 4, 6, 8]
//filter
let arr9 = [10, 15, 20, 25];

let result3 = arr9.filter(x => x > 15);

console.log(result3);
// [20, 25]
//reduce
let arr11 = [10, 20, 30];

let result4 = arr11.reduce((sum, x) => sum + x, 0);

console.log(result4);
// 60
