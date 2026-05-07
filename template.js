const fName='Shuvo';
const lName='Sutradhor';
console.log(fName+" "+lName);

// template string
const fullname =`${fName} ${lName}`;
console.log(fullname);

// arrow function
const greet = () => {
    console.log("Hello, " + fullname);
};
greet();

const numbers = [1, 2, 3, 4, 5];
// spread operator (...)
console.log(...numbers);