const Employee = require("/.employee");

class Intern extends Employee {
    constructor(name, email, school) {
        super(name, email, 'Intern');
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
}
module.exports = Intern;