const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email, 'Engineer');
        this.github = github;
    }
    getGithub() {
        return this.github;
    }

}
module.exports = Engineer;