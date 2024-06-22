const reverseString=require('../reverseString');
describe('reverseString',()=>{
    test('reverseString',()=>{
        expect(reverseString("abcd").toBe("dcba"));
    });
    test('reverseString',()=>{
        expect(reverseString("baD boY").toBe("Yob Dab"));
    });
});