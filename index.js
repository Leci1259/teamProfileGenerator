//importing files
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Inquirer = require('inquirer');
const Jest = require('jest');
const fs = require('fs');
const inquirer = require('inquirer');
const markdowns = require('./src/markdowns');

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
        name: 'manOffNum',
    }]
const moreTeamQuestion = [
    {
        type: 'confirm',
        message: 'Do you have more team members?',
        name: 'moreTeam',
    }];

const newMemberType = [
    {
        type: 'rawlist',
        message: 'What kind of member?',
        name: 'memberType',
        choices: ['Engineer', 'Intern']
    }];
const engQuestion = [
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
    },
    {
        type: 'input',
        message: 'What is the team member"s Github username?',
        name: 'engGithub',
    }];
const intQuestion = [
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
    },
    {
        type: 'input',
        message: 'What school does the intern attend?',
        name: 'intSchool',
    }];

//Function to write html
function writeToFile(answers) {
    fs.writeFile(`./src/teamList.html`, markdowns.starterMarkdown(answers), (err) => {
        if (err) {
            console.log(err)
        };
        return
    })
};

//functions to separate inquirer calls

function wantMoreTeamMembers() {
    inquirer
        .prompt(moreTeamQuestion)
        .then((answer) => {
            if (answer.moreTeam) {
                addTeamMembers()
            }
            else {
                fs.appendFile(`./src/teamList.html`, markdowns.endingMarkdown(), (err) => {
                    if (err) {
                        console.log(err)
                    };
                    return
                })
                return
            }
        });
};

function addTeamMembers() {
    inquirer
        .prompt(newMemberType)
        .then((answers) => {
            if (answers.memberType == 'Engineer') {

                inquirer
                    .prompt(engQuestion)
                    .then((answers) => {

                        fs.appendFile(`./src/teamList.html`, markdowns.engMarkdown(answers), (err) => {
                            if (err) {
                                console.log(err)
                            };
                            return
                        })
                    });

            }
            else {
                inquirer
                    .prompt(intQuestion)
                    .then((answers) => {

                        fs.appendFile(`./src/teamList.html`, markdowns.intMarkdown(answers), (err) =>
                            err ? console.error(err) : console.log('Success!'))
                    });
                    
            }
            return
        })
        .then (
         //re-ask for more members
            wantMoreTeamMembers()   
        );
}

// initialize app
function init() {
    inquirer
        //run first question array
        .prompt(firstQuestions)
        .then((answers) => {
            //create file and insert team mananger info
            writeToFile(answers);
            //ask for more members and add their info
            wantMoreTeamMembers()
        })
};
// Function call to initialize app
init();