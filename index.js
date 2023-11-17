// Added all the required modules for the node.index to properly work
const inquirer = require('inquirer');
const fs = require('fs');
const createPage = require('./utils/generateMarkdown.js');
// Created an array of questions based on professional README.md standards
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief description of what this project does.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How does a user install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use for this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license(s) did this project use?',
        choices: ['MIT', 'MPL-2.0', 'MS-PL', 'Apache-2.0'],
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Who contributed to the project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How was this project tested?',
    },
    {
        type: 'input',
        name: 'profile',
        message: 'What is your GitHub profile?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];
// Created a writeFile
const writeFile = data => {
    fs.writeFileSync('README.md', data)}

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            return createPage(answers);
        })
        .then(data => {
            writeFile(data);
        })
        }
init();
