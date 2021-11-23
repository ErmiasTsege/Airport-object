
const Crew = require('./crew.js')
describe ("crew Class", ()=>{ 

    test("crew needs number of bags",()=> {
        const testcrew= new Crew('Bob the Builder', "captain", 3)
        testcrew.addBag(2);
        expect(testcrew.bags.length).toBe(1)        
    })

    test("crew needs name",()=> {
        const testcrew= new Crew('Bob the Builder', "captain", 3)
  
        expect(testcrew.name).toBe('Bob the Builder')        
    })

    test("crew needs position",()=> {
        const testcrew= new Crew('Bob the Builder', "captain", 3)
      
        expect(testcrew.position).toBe("captain")        
    })
 
    test("crew needs staffNumber",()=> {
        const testcrew= new Crew('Bob the Builder', "captain", 3)
        testcrew.addBag(2);
        expect(testcrew.staffNumber).toBe(3)
        
    })    
})

