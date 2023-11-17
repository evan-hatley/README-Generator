
const inquirer = require('inquirer');
const fs = require('fs');
const createPage = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How does someone use your project?',
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
        message: 'How did you test your project?',
    },
];

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
