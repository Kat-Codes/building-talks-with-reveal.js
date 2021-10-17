const { solve } = require('./7.example');

test('should add numbers correctly', () => {
    const result = solve(1, 2, -3);
    expect(result).toEqual(0);
});

