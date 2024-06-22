const calculator=require('../calculator');

describe('calculator',()=>{
    test('adding numbers',()=>{
        expect(calculator(1,"+",1)).toBe(2);
    });

    test('subtracting numbers',()=>{
        expect(calculator(1,"-",1)).toBe(0);
    });

    test('multiplying numbers',()=>{
        expect(calculator(2,"*",3)).toBe(6);
    });
    test('dividing numbers',()=>{
        expect(calculator(6,"/",2)).toBe(3);
    });
})