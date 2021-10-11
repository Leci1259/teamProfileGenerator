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
        name: 'manName',
    },
    {
        type: 'input',
        message: 'What is the team manager"s id?',
        name: 'manId',
    },
    {
        type: 'input',
        message: 'What is the team manager"s email address?',
        name: 'manEmail',
    },
    {
        type: 'input',
        message: 'What is the team manager"s office number?',
        name: 'manOffnum',
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
        name: 'memberType',
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        message: 'What is the team member"s name?',
        name: 'tmName',
    },
    {
        type: 'input',
        message: 'What is the team member"s id?',
        name: 'tmId',
    },
    {
        type: 'input',
        message: 'What is the team member"s email address?',
        name: 'tmEmail',
    }];
const engQuestion = [
    {
        type: 'input',
        message: 'What is the team member"s Github username?',
        name: 'engGithub',
    }]
const intQuestion = [
    {
        type: 'input',
        message: 'What school does the intern attend?',
        name: 'intSchool',
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
                                        .then()
                                }
                                else {
                                    inquirer
                                        //ask for school
                                        .prompt(intQuestion)
                                        .then()

                                }
                            })
                    }
                    else {
                        console.log('Page Completed')
                    }

                })
        );

};

// Function call to initialize app
init();


//functions to separate inquirer calls

function wantMoreTeamMembers() {
    inquirer
        .prompt(moreTeamQuestion)
        .then((answer) => {
            if (answer.moreTeam) {
                addTeamMembers()
            }
            else {
                return "Page Completed"
            }
        });
};

function addTeamMembers() {
    inquirer
        .prompt(teamQuestions)
        .then((answers) => {
            if (answers.memberType == 'Engineer') {
                //ask for github
                inquirer
                    .prompt(engQuestion)
                    .then((answer) => {
                        let githubUser = answer.engGithub
                        return githubUser
                    })
                //send for append
            }
            else {
                inquirer
                    //ask for school
                    .prompt(intQuestion)
                    .then((answer) => {
                        let schoolName = answer.intSchool
                        return schoolName
                    })
                //send for append
            }
        })
}
