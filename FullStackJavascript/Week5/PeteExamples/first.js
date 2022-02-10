class Maths {
    add(a, b) { return a + b; }
    addplusthree(a, b) { return a + b + 3; }
    subtract(a, b) { return a - b; }
    isNull() { return null }
    isUndefined() { return undefined }
};

class Employee {
    first_name;
    last_name;
    age;
    constructor(last_name, age) {
        this.last_name = last_name;
        this.age = age;
    }
    // Getters
    get fullName() {
        return this.first_name + ' ' + this.last_name;
    }
    get retire() {
        return this.yearsToRetire();
    }
    // Methods
    yearsToRetire() {
        return 65 - this.age;
  }
};

module.exports = {
    Maths : Maths,
    Employee : Employee
}