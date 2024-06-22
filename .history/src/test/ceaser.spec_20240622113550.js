const ceasar=require('../ceasar');

describe('Ceasar', ()=>{
    test('reversing number base on key',()=>{
        expect(ceasar("boy is moving",2)).toBe("dqa ku oqxkpi");
});
})