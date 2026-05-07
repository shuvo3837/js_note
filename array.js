const products = [
    {name: 'laptop', price: 50000},
    {name: 'phone', price: 20000},
    {name: 'pc', price: 30000}
]

// map method
const product_names = products.map(product => product.name );
console.log(product_names);