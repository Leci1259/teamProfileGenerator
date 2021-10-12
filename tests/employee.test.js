const Employee = require('../lib/employee');

describe('Object Creation', () => {
    it('New object should be created', () => {
        const object = new Employee ('Lesiana', '01','lr@gmail.com','Engineer');
        expect(typeof object== !'undefined').toBe(true);
    });
});

describe('Render Items', () => {
    it('Correctly returns name', () => {
        const name = 'Lesiana';
        const response = new Employee ('Lesiana', '01','lr@gmail.com','Engineer');

       // Check if name output is the same
        expect(response.getName).toBe(name);
    });

    it('Correctly returns id', () => {
        const id = '455';
        const response = new Employee ('Lesiana', '455','lr@gmail.com','Engineer');

       // Check if name output is the same
        expect(response.getId).toBe(id);
    });

    it('Correctly returns email', () => {
        const email = 'lr@gmail.com';
        const response = new Employee ('Lesiana', '01','lr@gmail.com','Engineer');

       // Check if name output is the same
        expect(response.getEmail).toBe(email);
    });

    it('Correctly returns role', () => {
        const role = 'Engineer';
        const response = new Employee ('Lesiana', '01','lr@gmail.com','Engineer');

       // Check if name output is the same
        expect(response.getRole).toBe(role);
    });
});