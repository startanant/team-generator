//global employee ID
let ID = 1;

class Employee {
    constructor (name, email) {
        this.id = ID++;//increase ID with each emp
        this.name = name;
        this.email = email;
        this.role = 'Employee';
    }
    getRole() {
        return this.role;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
}

module.exports = Employee;