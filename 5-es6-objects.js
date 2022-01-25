// 1. Object property shorthand
const name = 'Edwin'
const location = 'Taiwan'
const userAge = 23

const user = {
    name,
    location,
    age: userAge,
}

console.log(user)

// 2. Object destructuring, it makes it really easy to extract properties off of an object, 
//    creating individual variables that store those property values.
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
} 

// const label = product.label
// const stock = product.stock

// It's important to note that this default will only be used if there is no property matching on product.
const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, {label, stock = 0}={}) => {
    console.log(type, label, stock)
}

transaction('order', product)