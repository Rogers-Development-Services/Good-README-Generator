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
    return `# ${title}

${description}

Click this link to access the [Deployed Application](https://rogers-development-services.github.io/Work-Day-Scheduler/)

## Screenshots

Here is an example of our site in action:

![alt text](https://raw.githubusercontent.com/Rogers-Development-Services/Work-Day-Scheduler/master/Assets/Images/Deployed%20Application.png "Application Img1")

## Instilation

${installationInstructions}

## Usage 

${usageInformation}

## Testing

Testing Instructions: ${testInstructions}

## Future Updates

This application is a work in progress, future updates will include: 

1. Being able to access any day of the year
2. Styling floppy icon to be the same size as the blue division of each row

## Questions

Share with us with any comments or questions to help us grow! 
GitHub Profile: [${githubUserName}](https://www.github.com/${githubUserName}"
Email: [${emailAddress}](${emailAddress})

## Credits

Code template provided by Trilogy Education 

Thanks to ${contributionGuidelines} for providing guidance.

Aquired guidance around using the node.js library inquirer from [joshtronic](https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts)

## License

Licensed under the [${licenseInformation}](LICENSE.txt) lincense.`
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
