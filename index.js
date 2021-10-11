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
    fs.writeFile(`teamList.html`, markdown.starterMarkdown(answers), (err) =>
        err ? console.error(err) : console.log('Success!'))
}

function appendToFile(answers) {
    fs.appendFile(`teamList.html`, markdown(answers), (err) =>
        err ? console.error(err) : console.log('Success!'))
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

//functions to separate inquirer calls

function wantMoreTeamMembers() {
    inquirer
        .prompt(moreTeamQuestion)
        .then((answer) => {
            if (answer.moreTeam) {
                addTeamMembers()
            }
            else {
                fs.appendFile(`teamList.html`, markdown.endingMarkdown(), (err) =>
                err ? console.error(err) : console.log("Page Completed"))
                return 
            }
        });
};

function addTeamMembers() {
    inquirer
        .prompt(teamQuestions)
        .then((answers) => {
            if (answers.memberType == 'Engineer') {
                //ask for github
                var githubUser='';
                inquirer
                    .prompt(engQuestion)
                    .then((answer) => {
                        githubUser = answer.engGithub
                        return
                    })
                    fs.appendFile(`teamList.html`, markdown.engMarkdown(answers), (err) =>
                    err ? console.error(err) : console.log('Success!'))
            }
            else {
                inquirer
                    //ask for school
                    var schoolName='';
                    inquirer
                    .prompt(intQuestion)
                    .then((answer) => {
                        schoolName = answer.intSchool
                        return
                    })
                    fs.appendFile(`teamList.html`, markdown.intMarkdown(answers), (err) =>
                    err ? console.error(err) : console.log('Success!'))
                //send for append
            }
            //re-ask for more members
            wantMoreTeamMembers()
        })
}

// Function call to initialize app
init();