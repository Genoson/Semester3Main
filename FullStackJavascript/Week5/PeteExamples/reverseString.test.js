const reverseString = require('./second');

test('reverseString exists', () => {
    expect(reverseString).toBeDefined();
});

test('string reversed', () => {
    expect(reverseString('hello')).toEqual('olleh');
});