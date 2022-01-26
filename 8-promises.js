// const doWorkPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//          // In the past with the callback pattern, we would signify this by calling callback in one of two ways.
//          // In Promise, what we have are two separate functions I have resolve and reject.
//         reject('This is my error!') // If rejet is called then the later functions won't be called
//         resolve([2, 3, 2])
//     }, 2000)
// })

// .then allows us to register a function to run when things go well
// When we're working with promises, we have two separate functions, only one of which will ever run.
// Either resolve or reject is called the promise is done and it's value or state can't change.

// doWorkPromise.then((result) => {
//     console.log('Success!', result)
// }).catch((error) => {
//     console.log('Error!', error)
// })

//
//                                     fulfilled
//                                   /
// Promise     --  pending      -->
//                                   \
//                                     rejected



const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)    
    })
}

// add(1, 2).then((sum) => {
//     console.log(sum)
    
//     add(sum, 5).then((sum2) => {
//         console.log(sum2)
//     }).catch((e) => {
//         console.log(e)
//     })
// }).catch((e) => {
//     console.log(e)
// })

// Promise Chaining, the nice thing about promise chaining is our code is not nested.
add(1,1).then((sum) => {
    console.log(sum)
    return add(sum, 4)
}).then((sum2) => {
    console.log(sum2)
}).catch((e) => {
    console.log(e)
})