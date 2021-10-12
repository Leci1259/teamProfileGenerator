const Engineer = require('../lib/engineer');

describe('Object Creation', () => {
    it('New object should be created', () => {
        const object = new Engineer ('Lesiana', '01','lr@gmail.com','Leci1259');
        expect(typeof object != 'undefined').toBe(true);
    });
});

describe('Render Items from Employee Class', () => {
    it('Correctly returns name', () => {
        const name = 'Lesiana';
        const response = new Engineer ('Lesiana', '01','lr@gmail.com','Leci1259');

       // Check if name output is the same
        expect(response.getName()).toBe(name);
    });

    it('Correctly returns id', () => {
        const id = '01';
        const response = new Engineer ('Lesiana', '01','lr@gmail.com','Leci1259');

       // Check if name output is the same
        expect(response.getId()).toBe(id);
    });

    it('Correctly returns email', () => {
        const email = 'lr@gmail.com';
        const response = new Engineer ('Lesiana', '01','lr@gmail.com','Leci1259');

       // Check if name output is the same
        expect(response.getEmail()).toBe(email);
    });

    it('Correctly returns role', () => {
        const role = 'Engineer';
        const response = new Engineer ('Lesiana', '01','lr@gmail.com','Leci1259');

       // Check if name output is the same
        expect(response.getRole()).toBe(role);
    });
});

describe('Render Items from new methods', () => {
    it('Correctly returns github', () => {
        const github = 'Leci1259';
        const response = new Engineer ('Lesiana', '01','lr@gmail.com','Leci1259');

       // Check if name output is the same
        expect(response.getGithub()).toBe(github);
    });
});