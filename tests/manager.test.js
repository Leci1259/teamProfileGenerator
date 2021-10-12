const Manager = require('../lib/manager');

describe('Object Creation', () => {
    it('New object should be created', () => {
        const object = new Manager ('Lesiana', '01','lr@gmail.com','455');
        expect(typeof object != 'undefined').toBe(true);
    });
});

describe('Render Items from Employee Class', () => {
    it('Correctly returns name', () => {
        const name = 'Lesiana';
        const response = new Manager ('Lesiana', '01','lr@gmail.com','455');

       // Check if name output is the same
        expect(response.getName()).toBe(name);
    });

    it('Correctly returns id', () => {
        const id = '01';
        const response = new Manager ('Lesiana', '01','lr@gmail.com','455');

       // Check if name output is the same
        expect(response.getId()).toBe(id);
    });

    it('Correctly returns email', () => {
        const email = 'lr@gmail.com';
        const response = new Manager ('Lesiana', '01','lr@gmail.com','455');

       // Check if name output is the same
        expect(response.getEmail()).toBe(email);
    });

    it('Correctly returns role', () => {
        const role = 'Manager';
        const response = new Manager ('Lesiana', '01','lr@gmail.com','455');

       // Check if name output is the same
        expect(response.getRole()).toBe(role);
    });
});
