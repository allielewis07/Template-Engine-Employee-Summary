// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Intern = require ("test/lib/Employee.js");

class Intern extends Employee{
    constructor (name, id , email, school){
        super (name, id, email);
        this.school = school;
    }
    getRole(){
        return "Engineer"
    }
    getSchool(){
        return this.school;
    }
}
module.exports = Intern;