const capitalize=require('../capitalize');

describe('capitalize',()=>{
    test('return the first letter of string capitalized',()=>{
        expect(capitalize("aa")).toBe("Aa");
    });
    test('return the fist letter of string to be capitalized',()=>{
        expect(capitalize("the man")).toBe("The man");
    });
});