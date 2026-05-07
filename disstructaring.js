const friends = ['shuvo', 'prity', 'ratul', 'topto'];

const [first, second, ...rest] = friends;
console.log(first, second);
console.log(rest);

let person ={
    name:"shuvo",
    age: 25,
    country: "Bangladesh"
}
console.log(person);

const {name, age, country} =person;
console.log(name, age, country);