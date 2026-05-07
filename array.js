const products = [
    {name: 'laptop', price: 50000},
    {name: 'phone', price: 20000},
    {name: 'pc', price: 30000}
]

products.forEach(product => console.log(product));

// map method
const product_names = products.map(product => product.name );
console.log(product_names);

// filter method
const expensive_products = products.filter(product => product.price>20000);
console.log(expensive_products);

// reduce method
const total_price = products.reduce((total, product)=> total + product.price, 0);
console.log(total_price);

// find method
const phone = products.find(product => product.name === 'phone');
console.log(phone);

// some method
const has_expensive_product = products.some(product => product.price > 20000);
console.log(has_expensive_product);