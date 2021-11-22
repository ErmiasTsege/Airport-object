const  Bag = require('./bag')
const Person = require('./person')
class Passenger extends Person{
    constructor(name,passportNumber,seatNumber){
        super(name)   
     this.passportNumber=passportNumber
     this.seatNumber=seatNumber  
    }
    
    callAttendant() {
        console.log('Excuses me, Hay there!')
    }
}

const bob = new Passenger('Bob the Builder', "Passport123", "1A")
// const bobsCabinBag = new Bag(9)
// const bobsHullBag = new Bag(23)
// bob.addBag(bobsCabinBag)
// bob.addBag(bobsHullBag)
// console.log(bob.bags) // [ Bag { weight: 9 }, Bag { weight: 23 } ]
bob.addBag(1)
bob.addBag(2)
console.log(bob.bags)
console.log(bob.callAttendant())

module.exports=Passenger;