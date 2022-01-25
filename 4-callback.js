setTimeout(() => {
    console.log('Two seconds are up')
}, 2000)

const names = ['Andrew', 'Jen', 'Jess']
const shortNames = names.filter((name)=>{
    return name.length <= 4
})

// gecode finishes almost immediately. And if you don't return something from a function, we know that JS will implivitly return undefined.
// const gecode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0
//         }

//         return data
//     }, 2000)
// }

// const data = gecode('lukang')
// console.log(data)

const gecode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        }

        callback(data)
    }, 2000)
}

gecode('Taiwan', (data)=>{
    console.log(data)
})

// Challenge

const add = (x, y, callback) => {
    setTimeout(() => {
        const sum = x+y
        callback(sum) 
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) //Should print: 5
})