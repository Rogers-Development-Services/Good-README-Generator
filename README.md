![GitHub license](https://img.shields.io/badge/license-GNU%20General%20Public%20License%20v3.0-green.svg) ![GitHub license](https://img.shields.io/badge/license-MIT%20License-green.svg) 
# Good-README-Generator
This CLI application will allow a project creator to spend more time working on finishing the project and less time creating a professional README. When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project.
## Table of Contents
[Deployed Application](https://github.com/Rogers-Development-Services/Good-README-Generator#deployed-application)

[Installation](https://github.com/Rogers-Development-Services/Good-README-Generator#installation)

[Usage](https://github.com/Rogers-Development-Services/Good-README-Generator#usage)

[Screenshots](https://github.com/Rogers-Development-Services/Good-README-Generator#screenshots)

[Testing](https://github.com/Rogers-Development-Services/Good-README-Generator#testing)

[Future Updates](https://github.com/Rogers-Development-Services/Good-README-Generator#future-updates)

[Questions](https://github.com/Rogers-Development-Services/Good-README-Generator#questions)

[Credits](https://github.com/Rogers-Development-Services/Good-README-Generator#credits)

[License](https://github.com/Rogers-Development-Services/Good-README-Generator#license)

## Deployed Application

Here is an example of our app in action: 

![Good README.md Generator](./Assets/Videos/READMEVideo.gif)

## Installation

Download this package, open your command line interface and run npm install. This should install the following dependencies aswell: fs, inquirer, and util.

Next run the following command to start the app: "node index.js"

```bash
npm install 
```

## Usage 

Input your desired specifications for each prompt, and it will generate a readme. It would be helpful for you to visualize how you'd like to see the readme.md presented, and take a moment to answer the required questions in a text editor before inputing them into this program. Then copy and paste each response question by question, that way you wont have to retype.

Make sure when the application prompts you to "Press <enter>" and you write your response in a text editor you close and <strong>SAVE</strong> the file. The application will still display "Received" even if you don't save, but it will not be recorded to your README.md.

Note: You can select multiple licenses for your readme.

### Screenshots

![DeployedApplication](https://user-images.githubusercontent.com/38272211/91502654-7afa4700-e87d-11ea-9f81-ec8f78a30ab9.jpg)

### Videos

[![Video Tutorial](https://img.youtube.com/vi/k_QyF4_7Ims/0.jpg)](https://www.youtube.com/watch?v=k_QyF4_7Ims)

## Testing

Testing Instructions: Currently, there is no testing for this app. If you'd like to write one, change the scripts property in package json file.

```bash
npm test
```

## Future Updates
This application is a work in progress, future updates will include: 
1. A test to prevent users from inputing github usernames which don't exsist.
2. Functionality to add multiple contributors to the readme with their respective URLs.

## Questions

Share with us with any comments or questions to help us grow! 

GitHub Profile: [Rogers-Development-Services](https://www.github.com/Rogers-Development-Services)

Email: [matthew.shane.rogers@gmail.com](matthew.shane.rogers@gmail.com)

## Credits

Code template provided by Trilogy Education 
Thanks to [Andrew Kil](  https://andrewkil.com/) for providing guidance.

Aquired guidance around using the node.js library inquirer from [joshtronic](https://www.digitalocean.com/community/tutorials/nodejs-interactive-command-line-prompts)

Thank you [Al-Waleed Shihadeh](https://medium.com/better-programming/add-badges-to-a-github-repository-716d2988dc6a) for the tutorial on adding GitHub Badges to my Repository.

Grateful for [Kelli Balock](https://dev.to/kelli/demo-your-app-in-your-github-readme-with-an-animated-gif-2o3c) for instructions to create and upload .gif files to a GitHub Readme.md.

Thankful for [Dan Shahin](https://www.youtube.com/watch?v=nvPOUdz5PL4) for providing a workaround for uploading images to github for your README.md. 

Grateful for [Mat Wilmot](https://medium.com/javascript-in-plain-english/how-to-inquirer-js-c10a4e05ef1f) for how to use Inquirer.js, specificly the type: when.

## Licenses
Licensed under the GNU General Public License v3.0,MIT License lincense(s).