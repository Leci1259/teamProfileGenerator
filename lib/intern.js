const Employee = require('./employee');

class Intern extends Employee {

    constructor(name,id,email,school) {
        this.school=school;
        super(name,id,email,'Intern')
    }

    getSchool () {
        return this.school
    }



}
module.exports = Intern;