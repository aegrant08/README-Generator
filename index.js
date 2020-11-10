const inquirer = require("inquirer");
const fs = require('fs');
const generateReadMe = require("./utils/generateMarkdown");
const axios = require("axios");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "badge",
        message: "Please insert your badge link(s)."
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of the project.",

    },
    {
        type: "input",
        name: "installation",
        message: "Provide detailed instructions for installation."
    },
    {
        type: "input",
        name: "table_of_contents",
        message: "Provide table of contents for README.",
    },
    {
        type: "input",
        name: "installation",
        message: "How can this application be installed?",
    },
    {
        type: "input",
        name: "usage",
        message: "How is the application used?",
    },
    {
        type: "input",
        name: "license",
        message: "Please provide a license for the application.",
    },
    {
        type: "input",
        name: "contributing",
        message: "List any contributors on the application.",
    },
    {
        type: "input",
        name: "test",
        message: "What tests have been run on the application?",
    },
    {
        type: "input",
        name: "questions",
        message: "Any common questions about the application?",
    }
];

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, ' '));

    fs.writeFile()

    // fs.writeFile function
});

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
