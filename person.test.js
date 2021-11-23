
const Person = require('./person.js')
describe ("passaenger Class", ()=>{ 

    test("passaenger needs number of bags",()=> {
        const testpassanger= new Person(13)
        testpassanger.addBag(2);
        expect(testpassanger.bags.length).toBe(1)

        
    })



    
})