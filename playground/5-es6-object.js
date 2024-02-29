const userName = 'Ethan';
const userAge = 27;


const user = {
    name: userName,
    age: userAge,
    location: 'Orange'
}

console.log(user);

const products = {
    label: 'Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {price: productPrice, label: productLabel, rating = 5} = products

console.log(rating);