const functions = {
    add: (n1, n2) => n1 + n2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Peter', lastName: 'Thorne'};
        return user;
    },
    payroll: (emp1, emp2, emp3) => emp1 + emp2 + emp3
}

module.exports = functions;
