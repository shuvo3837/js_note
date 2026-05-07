let person ={
    name:"shuvo",
    age: 25,
    favorite_fruits:["apple", "banana", "orange"],
    family:{
        father: "abcd",
        mother: "efgh"
    }
}
console.log(person);

// const keys = Object,keys(person);
// console.log(keys);


const jsonData = JSON.stringify(person);
console.log(jsonData);

const plandata = JSON.parse(jsonData);
console.log(plandata);

// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));


