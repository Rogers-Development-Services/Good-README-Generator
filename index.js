const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');
const { type } = require('os');

// array of questions for user
const questions = [
    // {
    //     type: "input",
    //     message: "What is your GitHub username?",
    //     name: "githubUserName"
    // },
    // {
    //     type: "input",
    //     message: "What is your email address?",
    //     name: "emailAddress"
    // }, 
    // {
    //     type: "input",
    //     message: "What is the title of your README.md??",
    //     name: "title"
    // }, 
    // {
    //     type: "editor", 
    //     message: "How would you describe this app?",
    //     name: "description"
    // },
    // {
    //     type: "editor", 
    //     message: "What are the instillation instructions for your app?",
    //     name: "installationInstructions"
    // },
    // {
    //     type: "editor", 
    //     message: "How would you explain how to use this app to a complete beginner?",
    //     name: "usageInformation"
    // },
    {
        type: "confirm",
        message: "Would you like to give credit to helping you create your app?",
        name: "verifyContribution"
    },
    {
        type: "input",
        message: "What is the name of person you'd like to credit as a contributor in developing this app?",
        name: "contributor",
        when: (response) => response.verifyContribution === true
        // able to submit multiple people? with links?
    },
    {
        type: "input",
        message: "Please submit the url you refrenced from your contributor.",
        name: "contributionGuidelines",
        when: (response) => response.verifyContribution === true
    },
    {
        type: "confirm",
        message: "Is there anyone else who you'd like to contribute for this app?",
        name: "creditDue",
        when: (response) => response.verifyContribution === true
    },
    {
        type: "input",
        message: "What instructions would you like to write for testing your app?",
        name: "testInstructions"
    },
    // {
    //     type: 'checkbox', 
    //     //is there a way to make a space or generate a license.txt for each?
    //     //how do I space the licences apart with spacing in between each
    //     message: "Which licence(s) does your app fall under?",
    //     choices: 
    //         [
    //         'None',
    //         'Apache License 2.0',
    //         'GNU General Public License v3.0',
    //         'MIT License',
    //         'BSD 2-Clause "Simplified" License',
    //         'BSD 3-Clause "New" or "Revised" License',
    //         'Boost Software License 1.0',
    //         'Creative Commons Zero v1.0 Universal',
    //         'Eclipse Public License 2.0',
    //         'GNU Affero General Public License v3.0',
    //         'GNU General Public License v2.0',
    //         'GNU Lesser General Public License v2.1',
    //         'Mozilla Public License 2.0',
    //         'The Unlicense'
    //         ],
    //     name: "licenseInformation"
    // } //possibly give the user a preview of the readme in raw for using an inquirer type confirm?
];
// console.log(typeof questions[8]); 
// this logs out the choices for licenses object
// console.log(questions[8]);
// this logs out individual index values of choices
// console.log(typeof questions[8].choices[3]);
// console.log(questions[8].choices[3]);

const thenableWriteFile = util.promisify(fs.writeFile);

function getReadmeOutput(response) {
    // const githubUserName = response.githubUserName;
    // const emailAddress = response.emailAddress;
    // const title = response.title;
    // const description = response.description;
    // const installationInstructions = response.installationInstructions;
    // const usageInformation = response.usageInformation;
    const contributor = response.contributor;
    const contributionGuidelines = response.contributionGuidelines;
    const testInstructions = response.testInstructions;
    // const licenseInformation = response.licenseInformation;
    // console.log(typeof contributor);     //string
    // console.log(typeof licenseInformation);      //array
    // console.log(licenseInformation);

    let licenseBadges = "";

    licenseInformation.forEach(license => {
      licenseBadges = licenseBadges + `![GitHub license](https://img.shields.io/badge/license-${encodeURIComponent(license)}-green.svg) `;
    });

    return `${licenseBadges}
# ${title}

${description}

## Table of Contents

[Deployed Application](https://github.com/${githubUserName}/${title}#deployed-application)

[Installation](https://github.com/${githubUserName}/${title}#installation)

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

## Installation

${installationInstructions}

\`\`\`bash
npm install 
\`\`\`

## Usage 

${usageInformation}

Make sure when the application prompts you to "Press <enter>" and you write your response in a text editor you close and <strong>SAVE</strong> the file. The application will still display "Received" even if you don't save, but it will not be recorded to your README.md.

### Screenshots

![DeployedApplication](https://user-images.githubusercontent.com/38272211/91502654-7afa4700-e87d-11ea-9f81-ec8f78a30ab9.jpg)

## Testing

Testing Instructions: ${testInstructions}

\`\`\`bash
npm test
\`\`\`

## Future Updates

This application is a work in progress, future updates will include: 

## Questions

Share with us with any comments or questions to help us grow! 

GitHub Profile: [${githubUserName}](https://www.github.com/${githubUserName})

Email: [${emailAddress}](${emailAddress})

## Credits

Code template provided by Trilogy Education 

Thanks to [${contributor}](${contributionGuidelines}) for providing guidance.

Aquired guidance around using the node.js library inquirer from [joshtronic](https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts)

Thank you [Al-Waleed Shihadeh](https://medium.com/better-programming/add-badges-to-a-github-repository-716d2988dc6a) for the tutorial on adding GitHub Badges to my Repository.

Grateful for [Kelli Balock](https://dev.to/kelli/demo-your-app-in-your-github-readme-with-an-animated-gif-2o3c) for instructions to create and upload .gif files to a GitHub Readme.md.

Thankful for [Dan Shahin](https://www.youtube.com/watch?v=nvPOUdz5PL4) for providing a workaround for uploading images to github for your README.md. 

Grateful for [Mat Wilmot](https://medium.com/javascript-in-plain-english/how-to-inquirer-js-c10a4e05ef1f) for how to use Inquirer.js, specificly the type: when.

## Licenses

Licensed under the ${licenseInformation} lincense(s).`
}

inquirer
    .prompt(questions)
        .then(function(response) {
            // if (response.creditDue) {}
            return getReadmeOutput(response);
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