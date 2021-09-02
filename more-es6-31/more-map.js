const freinds = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solayman'];

const fLength = freinds.map(freind => freind.length);
console.log(fLength);

const products = [
    { name: 'water bottol', price: 50, color: 'yellow' },
    { name: 'mobail phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productsName = products.map(product => product.name);
const expensive = products.map(product => product.price)
console.log(expensive);
products.map(product => console.log(product))
