var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your application?",
    },
    {
        type: "input",
        name: "description",
        message: "Provide a brief description of application.",

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


];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
