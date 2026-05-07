let name = "jhon";
console.log(name);
name = "jhon doe";
console.log(name);
const pi = 3.14;
console.log(pi);
const gravity =9.8;
if(gravity>9){
    console.log("gravity is greater then 9");
}else{
    console.log("gravity is less then 9");
}

// Array
let fruits = ["apple", "banana", "orange"];
console.log(fruits);
console.log(fruits.length);
fruits.pop();
console.log(fruits);
fruits.push("grape");
console.log(fruits);
//add element at the beginning 
fruits.unshift("mango"); 
console.log(fruits);
// shift remove element from the beginning
fruits.shift();
console.log(fruits);
//  slice{st,end}
let new_fruits = fruits.slice(0,2);
console.log(fruits);
console.log(new_fruits);

for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}

function sum(a,b){
    console.log(a+b);
}
sum(5,3);

// object
let person ={
    name:"shuvo",
    age: 25,
    favorite_fruits:fruits
}
console.log(person);
