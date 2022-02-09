// a set of functions to test with jest

const functions = {
    add: (a, b) => a + b,
    // subtract: (a, b) => a - b,
    // multiply: (a, b) => a * b,
    // divide: (a, b) => a / b,
    isNull: () => null, 
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'John' };
        user['lastName'] = 'Doe';
        return user;
    }
};

module.exports = {
    functions, 
}