//inheriting from employee class
const Employee = require("./Employee");
// engineer class that extends from the employee class
class Engineer extends Employee {
    constructor (name, id , email, github){
        super (name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole(){
        return "Engineer"
    }
}
//exporting out 
module.exports = Engineer;