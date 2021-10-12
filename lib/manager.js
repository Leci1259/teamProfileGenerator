const Employee = require('./employee');

class Manager extends Employee {

    constructor(name,id,email,officeNumber) {
        super(name,id,email,'Manager')
        this.officeNumber=officeNumber;
        
    }

    getOffNum () {
        return this.officeNumber
    }
}
module.exports = Manager;