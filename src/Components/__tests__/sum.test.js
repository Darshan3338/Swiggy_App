import { sum } from "../Sum";
test("Sum function calculate the sum of 2 no's",()=>{

    const result = sum(3,4);
    
    //Assertion
    expect(result).toBe(7)
})