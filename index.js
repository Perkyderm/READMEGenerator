const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./generate");

// Questions User Answers
function askQuestions() {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your user GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is your email?",
      name: "email",
    },
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a description of your project.",
      name: "description",
    },
    {
      type: "input",
      message: "What packages need to be installed to run your project.",
      name: "installation",
    },
    {
      type: "input",
      message: "What technologies were used to create your project.",
      name: "technology",
    },
    {
      type: "input",
      message: "Please provide an example of how your project can be used.",
      name: "usage",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license would you like to have?",
      name: "license",
      choices: ["MIT", "APACHE 2.0", "GPL v3", "BSD 3", "None"],
    },
    {
      type: "input",
      message: "Including yourself, please list out all contributors",
      name: "contributer",
    },
    {
      type: "input",
      message: "What command is used to run a test",
      name: "tests",
    },
  ]);
}

function writetoFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", function (err) {
    if (err) {
      throw err;
    }
  });
}

async function init() {
  try {
    const answers = await askQuestions();
    generate(answers);
    writetoFile("README.md", generate(answers));
  } catch (err) {
    console.log(err);
  }
}

init();
