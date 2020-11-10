// variables
const inquirer = require("inquirer");
const fs = require('fs');
const generateReadMe = require("./utils/generateMarkdown");
const axios = require("axios");


// array of questions for user input
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
    },
    {
        type: "input",
        name: "user",
        message: "What is your github username?",
    },
    {
        type: "input",
        name: "repo",
        message: "Please provide your repo link.",
    }
];

// function taking user input and creating a generated README
inquirer.prompt(questions).then((answers) => {
    //console.log(JSON.stringify(answers, null, ' '));

    const queryURL = `https://api.github.com/users/${data.user}`;

    axios.get(queryURL).then(function (res) {

        const githubInfo = {
            githubAvatar: res.data.avatar_url,
            profile: res.data.html_url,
            name: res.data.name
        };

        // function to confirm README is successfully generated
        fs.writeFile("README.md", generate(data, githubInfo), function (err) {
            if (err) {
                throw err;
            };

            console.log("README successfully created.");
        });
    });

});


// function to initialize generating README
function init() {

}

// function call to generated README
init();
