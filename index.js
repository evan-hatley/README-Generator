// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [];
inquirer
.prompt([
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
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    


}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
