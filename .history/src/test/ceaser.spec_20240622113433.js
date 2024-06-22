const ceaser=require('../ceaser');

describe('Ceaser', ()=>{
    test('reversing number base on key',()=>{
        expect(ceaser("boy is moving",2)).toBe("dqa ku oqxkpi");
});
})