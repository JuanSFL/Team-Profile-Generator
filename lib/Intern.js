const Employee = require("./Employee")
//intern class that extends from employee class
class Intern extends Employee {
    constructor (name, id, email, school){
        super (name, id, email);
        this.school = school
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern"
    }
}
// exporting out
module.exports = Intern