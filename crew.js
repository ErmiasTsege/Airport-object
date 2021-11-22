
const Person = require('./person')
class Crew extends Person{
    constructor(name,position,staffNumber){
        super(name)       
     this.position=position
     this.staffNumber=staffNumber
   
    }
  
}

const bob = new Crew('Bob the Builder', "captain", 3)

bob.addBag(1)
bob.addBag(2)
console.log(bob.bags) // [ Bag { weight: 9 }, Bag { weight: 23 } ]

module.exports=Crew;