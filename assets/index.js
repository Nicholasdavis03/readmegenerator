// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
  // Array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide any tests written for your application and instructions on how to run them:'
    },
    {
      type: 'input',
      name: 'author',
      message: 'What is your name? (Author)'
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    }
  ];
  

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${fileName} has been successfully generated!`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  // Use inquirer to prompt the user with questions
  inquirer.prompt(questions).then((userResponses) => {
    // Generate README content using user responses
    const readmeContent = generateMarkdown(userResponses);

    // Specify the file name for the README file
    const fileName = 'README.md';

    // Write the README file
    writeToFile(fileName, readmeContent);
  });
}

// Function call to initialize app
init();
