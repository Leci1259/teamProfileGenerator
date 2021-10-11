//importing files
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Inquirer = require('inquirer');
const Jest = require('jest');
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require();

//questions array
const firstQuestions = [
    {
        type: 'input',
        message: 'What is the team manager"s name?',
        name: 'man-name',
    },
    {
        type: 'input',
        message: 'What is the team manager"s id?',
        name: 'man-id',
    },
    {
        type: 'input',
        message: 'What is the team manager"s email address?',
        name: 'man-email',
    },
    {
        type: 'input',
        message: 'What is the team manager"s office number?',
        name: 'man-offnum',
    }]
const moreTeamQuestion = [
    {
        type: 'confirm',
        message: 'Do you have more team members?',
        name: 'moreTeam',
    }];

const teamQuestions = [
    {
        type: 'rawlist',
        message: 'What kind of member?',
        name: 'member-type',
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        message: 'What is the team member"s name?',
        name: 'tm-name',
    },
    {
        type: 'input',
        message: 'What is the team member"s id?',
        name: 'tm-id',
    },
    {
        type: 'input',
        message: 'What is the team member"s email address?',
        name: 'tm-email',
    }];
const engQuestion = [
    {
        type: 'input',
        message: 'What is the team member"s Github username?',
        name: 'eng-github',
    }]
const intQuestion = [
    {
        type: 'input',
        message: 'What school does the intern attend?',
        name: 'int-school',
    }];

//Function to write html
function writeToFile(answers) {
    fs.writeFile(`${answers.filename}.html`, markdown(answers), (err) =>
        err ? console.error(err) : console.log('Success!'))
}

function appendToFile(answers) {
    fs.appendFile(`${answers.filename}.html`, markdown(answers), (err) =>
        err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        //run first question array
        .prompt(firstQuestions)
        .then((answers) => {
            //create file and insert team mananger info
            writeToFile(answers);
        },
            inquirer
                //ask if there are more team members
                .prompt(moreTeamQuestion)
                .then((answers) => {
                    //if you answer yes to more team members
                    if (answers.moreTeam) {
                        inquirer
                            //ask more questions for team member
                            .prompt(teamQuestions)
                            .then((answers) => {
                                //if engineer
                                if (answers.member - type == 'Engineer') {
                                    //ask for github
                                    inquirer
                                        .prompt(engQuestion)
                                }
                                else {
                                    inquirer
                                        //ask for school
                                        .prompt(intQuestion)

                                }
                            })
                    }
                    else {
                        console.log ('Page Completed')
                    }

                })
        );

};

// Function call to initialize app
init();


