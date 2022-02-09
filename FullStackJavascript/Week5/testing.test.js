// import modules to test

const { expect } = require("@jest/globals");
const functions = require("./testing.js");

// toBe tests for equivalence of a given input and output result

test("adds 2 + 3 to equal 5", () => {
  expect(functions.functions.add(2, 3)).toBe(5);
});

// can also use a not qualify to specify invalid responses

test("adds 2 + 3 to not equal 6", () => {
    expect(functions.functions.add(2, 3)).not.toBe(6);
    });

// can test for truthy and falsy values
// toBeNull tests for null
// toBeUndefined tests for undefined
// toBeDefined tests for defined
// toBeTruthy tests for truthy
// toBeFalsy tests for falsy

test('should be null', () =>{
    expect(functions.functions.isNull()).toBeNull();
});

test('should be falsy', () =>{
    expect(functions.functions.checkValue(null)).toBeFalsy();
});

// testing a user object
// must use toEqual to test for object equivalence instead of toBe

test('should be john doe', () =>{
    expect(functions.functions.createUser()).toEqual({firstName: 'John', lastName: 'Doe'});
})

// less than and greater than
test('should be under 1000', () =>{
    expect(functions.functions.add(7,3)).toBeLessThan(1000);
})

test('should be over 50', () =>{
    expect(functions.functions.add(7,3)).toBeGreaterThan(50);
})

// can test regex
// toMatch tests for a match
// toContain tests for a substring
// toBeCloseTo tests for a close match
// regex is very powerful and can be used to test for a specific pattern
// and can be used for validations

test('there is no I in team', () =>{
    expect('team').not.toMatch(/I/);
})

//arrays
test('Admin should be in usernames', () =>{
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
})

// async functions
// expect.assertions(number); 
// can be used to specify the number of assertions to expect
// an assertion is a test that passes or fails
// catch the data with a .then() method, placing the expect statement in the .then()
// async functions can be tested with jest
// await is used to wait for a promise to resolve



