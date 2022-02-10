const Bill = require('./first');
var maths = new Bill.Maths();

test('Should add up to seven', () => {
    expect(maths.add(1,6)).toBe(7);
    expect(maths.add(9,-2)).toBe(7);
    expect(maths.add(7,0)).toBe(7);
})

test('Should add up to something plus three', () => {
    expect(maths.addplusthree(1,6)).toBe(10);
    expect(maths.addplusthree(9,-2)).toBe(10);
    expect(maths.addplusthree(7,0)).toBe(10);
})

test('Should NOT add up to seven', () => {
    expect(maths.add(5,6)).not.toBe(7);
    expect(maths.add(9,-11)).not.toBe(7);
})

test('Should subtract to seven', () => {
    expect(maths.subtract(9,2)).toBe(7);
    expect(maths.subtract(5,-2)).toBe(7);
})

test('Should subtract to negative seven', () => {
    expect(maths.subtract(1,8)).toBe(-7);
})

test('Should be Null', () => {
    expect(maths.isNull()).toBeNull();
})

test('Should be Undefined', () => {
    expect(maths.isUndefined()).toBeUndefined();
})

var Peter = new Bill.Employee('Thorne', 48);
Peter.first_name = 'Peter';

test('Should be last_name = Thorne', () => {
    expect(Peter.last_name).toBe('Thorne');
})

test('Years to retire should be 17', () => {
    expect(Peter.retire).toBe(17);
})
test('Should be fullName = Peter Thorne', () => {
    expect(Peter.fullName).toBe('Peter Thorne');
})
