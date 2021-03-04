const tail=require('./tail');

describe('Tail',() => {
    it('Tail of [1,2,3] is [2,3]',() => {
        expect(tail([1,2,3])).toEqual(1);
    });

    it('Tail of [] is undefined',() => {
        expect(tail([])).toEqual(undefined);
    });
})