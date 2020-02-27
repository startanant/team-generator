const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, email, officeNumber){
        super(name, email, 'Manager');
        this.officeNumber = officeNumber;
    }
    getOffice() {
        return this.officeNumber;
    }

}

module.exports = Manager;