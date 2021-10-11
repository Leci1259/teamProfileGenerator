//importing files
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Inquirer = require('inquirer');
const Jest = require('jest');
const fs = require('fs');
const markdown = require();

//questions array
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Type out install code',
        name: 'installCode',
    },
    {
        type: 'input',
        message: 'How are you using this?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Who are your contributers?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test Code?',
        name: 'tests',
    },
    {
        type: 'rawlist',
        message: 'What kind of license?',
        name: 'license',
        choices:["MIT",  "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
        type: 'input',
        message: 'Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'Email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'How should I reach you?',
        name: 'contact',
    },
    {
        type: 'input',
        message: 'What do you want to name this?',
        name: 'filename',
    },
];


//Function to write html
function writeToFile(answers) {
    fs.writeFile(`${answers.filename}.html`, markdown(answers) , (err) =>
            err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        writeToFile(answers);
    });

};

// Function call to initialize app
init();


