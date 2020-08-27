const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "githubUserName"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "emailAddress"
    }, 
    {
        type: "input",
        message: "What is the title of your README.md??",
        name: "title"
    }, 
    {
        type: "editor", 
        message: "How would you describe this app?",
        name: "description"
    },
    {
        type: "editor", 
        message: "What are the instillation instructions for your app?",
        name: "installationInstructions"
        // ```bash
        // npm install Good-README-Generator????
        // ```
    },
    {
        type: "editor", 
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
        //is there a way to make a space or generate a license.txt for each?
        //how do I handle multiple badges?
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

const thenableWriteFile = util.promisify(fs.writeFile);

function getReadmeOutput(response) {
    const githubUserName = response.githubUserName;
    const emailAddress = response.emailAddress;
    const title = response.title;
    const description = response.description;
    const installationInstructions = response.installationInstructions;
    const usageInformation = response.usageInformation;
    const contributionGuidelines = response.contributionGuidelines;
    const testInstructions = response.testInstructions;
    const licenseInformation = response.licenseInformation;
    return `![GitHub](https://img.shields.io/github/license/${githubUserName}/${title})
# ${title}

${description}

## Table of Contents

[Deployed Application](https://github.com/${githubUserName}/${title}#deployed-application)
[Instillation](https://github.com/${githubUserName}/${title}#instillation)
[Usage](https://github.com/${githubUserName}/${title}#usage)
[Screenshots](https://github.com/${githubUserName}/${title}#screenshots)
[Testing](https://github.com/${githubUserName}/${title}#testing)
[Future Updates](https://github.com/${githubUserName}/${title}#future-updates)
[Questions](https://github.com/${githubUserName}/${title}#questions)
[Credits](https://github.com/${githubUserName}/${title}#credits)
[License](https://github.com/${githubUserName}/${title}#license)

## Deployed Application

Here is an example of our app in action: 

![Good README.md Generator](./Assets/Videos/READMEVideo.gif)

## Instilation

${installationInstructions}

## Usage 

${usageInformation}

### Screenshots

![Deployed Application](./Assets/Images/DepolyedApplication.jpg "Application Img1")

## Testing

Testing Instructions: ${testInstructions}

## Future Updates

This application is a work in progress, future updates will include: 

## Questions

Share with us with any comments or questions to help us grow! 

GitHub Profile: [${githubUserName}](https://www.github.com/${githubUserName})

Email: [${emailAddress}](${emailAddress})

## Credits

Code template provided by Trilogy Education 

Thanks to ${contributionGuidelines} for providing guidance.

Aquired guidance around using the node.js library inquirer from [joshtronic](https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts)

Thank you [Al-Waleed Shihadeh](https://medium.com/better-programming/add-badges-to-a-github-repository-716d2988dc6a) for the tutorial on adding GitHub Badges to my Repository.

Grateful for [Kelli Balock](https://dev.to/kelli/demo-your-app-in-your-github-readme-with-an-animated-gif-2o3c) for instructions to create and upload .gif files to a GitHub Readme.md.

## Licenses

Licensed under the ${licenseInformation} lincense(s).`
}

inquirer
    .prompt(questions)
        .then(function(response) {
            return getReadmeOutput(response);
        // console.log(response);
        // console.log(response.licenseInformation.toString());
        // fs.writeFile("Readme.json", JSON.stringify(response, null, 4), function() {
        //     console.log("Your README.md has been created!");
        // });
        })
        .then(function(readmeOutput) {
            return thenableWriteFile('./README.md', readmeOutput);
        })
        .then(function () {
            console.log("Your README.md has been created!");
        })
        .catch(function(error) {
            console.log('An error occured!', error);
        });

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
