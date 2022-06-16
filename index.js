let productsList = [
    { name: 'Milk', price: 1.2 },
    { name: 'Cocoa', price: 2 },
    { name: 'Salad', price: 2 },
    { name: 'Carrots', price: 2 },
    { name: 'Tomatoes', price: 2.5 },
    { name: 'Ready meals', price: 5 },
];

let addProduct = prompt('What else do you want to buy?');
let productPrice = Number(prompt('Insert the new products price.'));

let newProducts = { name: addProduct, price: productPrice };
productsList.push(newProducts);

let totalPrice = 0;
for (let item of productsList) {
    totalPrice += item.price;
    console.log(item.name + ' costs ' + item.price + ' Eu.');
}

console.log('Total price: ' + totalPrice + ' Eu.');