const Passenger= require('./passaenger')
const Bag= require('./bag')
describe ("passenger Class", ()=>{ 
    test("passenger needs name",()=> {
        const testname= new Passenger("debebe","Et87897987979",88)
        expect(testname.name).toBe("debebe")
        
    })
    test("passenger needs pasportNumber",()=> {
        const testpasportNumber= new Passenger("debebe","Et87897987979",88)
        expect(testpasportNumber.passportNumber).toBe("Et87897987979")
        
    })
    test("passenger needs seatNumber",()=> {
        const testseatNumber= new Passenger("debebe","Et87897987979",88)
        expect(testseatNumber.seatNumber).toBe(88)
        
    })
    test("passenger has bags",()=> {
        const testBags= new Passenger("debebe","Et87897987979",88)
        const testBag= new Bag(88)
        testBags.addBag(testBag)
        expect(testBags.bags.length).toBe(1)       
        
    })

    test("passenger has weight", ()=> {
        const testBags= new Passenger("debebe","Et87897987979",90)
        const testBag= new Bag(88)
        testBags.addBag(testBag)
        expect(testBags.bags[0].weight).toBe(88)       
        
    })
    
})



