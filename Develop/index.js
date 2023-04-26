// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file


// TODO: Create a function to initialize app


// Function call to initialize app
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Add your description here:'
    },
    {
        type: 'checkbox',
        name: 'ToC',
        message: 'Would you like to add a Table of Contents?',
        choices:[
            'Installation', 
            'Usage', 
            'Contributions', 
            'Tests', 
            'Licensing'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Add your Installation instructions here:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add your Usage Information here:'
    },
    {
        type: 'input',
        name:'contributions',
        message:'Add your Contribution Guidelines here:'
    },
    {
        type: 'input',
        name:'tests',
        message:'Add your Test Instructions here:'
    },
    {
        type:'list',
        name:'licensing',
        choices:['MIT', 'APACHE2.0','GPL3.0','BSD3','None'],
        message:'What license did you use on your project?'
    },

]).then(answers=> { 
    const readmeString = `
# Title 
    ${answers.projectTitle}

## Description 
    ${answers.description}

## Table of Contents 
    ${answers.ToC}

## Installation 
    ${answers.installation}
    
## Usage 
    ${answers.usage}

## Contributions 
    ${answers.contributions}

## Tests 
    ${answers.tests}

## Licensing 
    ${answers.licensing}
    `
    fs.writeFile('README.md',readmeString,(err)=> {
        if(err){
            throw err
        }
        console.log('Yay, you did it!')
    });
});
