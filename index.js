const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your README.md?",
        name: "title"
    }, 
    {
        type: "input",
        message: "How would you describe this app?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the instillation instructions for your app?",
        name: "installationInstructions"
    },
    {
        type: "input",
        message: "How would you explain how to use this app to a complete beginner?",
        name: "usageInformation"
    },
    {
        type: "input",
        message: "Is there anyone you'd like to credit as a contributor in developing this app?",
        name: "contributionGuidelines"
    },
    {
        type: "input",
        message: "What instructions would you like to write for testing your app?",
        name: "testInstructions"
    },
    {
        type: 'checkbox',
        message: "Which licence(s) does your app fall under?",
        choices: 
            [
            'None',
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense'
            ],
        name: "licenseInformation"
    }
];
// console.log(typeof questions); //why is questions an object an not an array?
// console.log(questions[6]); // this logs out the choices for licenses object

inquirer
    .prompt(questions)
        .then(function(response) {
        // console.log(response);
        // console.log(response.licenseInformation.toString());
        fs.writeFile("Readme.json", JSON.stringify(response, null, 4), function() {
            console.log("Your README.md has been created!");
        });
    });


// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
