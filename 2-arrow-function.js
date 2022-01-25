// const square = function(x){
//     return x*x
// }

// const square = (x) => {
//     return x * x
// }

// shorthand syntax
// const square = (x) => x * x 

// Arrow function don't bind their own this value, this makes arrow function bad for methods
const event = {
    name: 'Birthday Party',
    guestList: ['Edwin', 'Jen', 'Mike'],
    printGuestList(){
        console.log('Guest list for ' + this.name)
        
        this.guestList.forEach(function(guest){
            console.log(guest+' is attending '+this.name) // the function is going to have its own this binding to the printGuestList function
        })

        this.guestList.forEach((guest) => {
            console.log(guest+' is attending '+this.name)
        })
    }
}

event.printGuestList()