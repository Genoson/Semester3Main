const functions = require("./functions");

test('Adds three plus three equals six', () => {
    expect(functions.add(3,3)).toBe(6);
})

test('Adds three plus three NOT equals seven', () => {
    expect(functions.add(3,3)).not.toBe(7);
})

test('Should be Null', () => {
    expect(functions.isNull()).toBeNull();
})

test('Should be Falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
})

test('Should be Peter Thorne object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Peter', 
        lastName: 'Thorne'
    });
})

test('Should be less than or equal too 3500', () => {
    expect(functions.payroll(1200, 1000, 1800)).toBeLessThanOrEqual(3500);
})

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
})

//Arrays
test('admin should be a user account', () => {
    users = ['satnam', 'diego', 'boris', 'admin'];
    expect(users).toContain('admin');
})

