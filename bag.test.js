const Bag= require('./bag.js')

describe ("Bag Class", ()=>{ 
    test("bag needs weight",()=> {
        const testbag= new Bag(13)
        expect(testbag.weight).toBe(13)

        
    })


    
})