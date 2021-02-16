function generate(data) {
  const gitHub = `https://github.com/${data.username}`;

  return `
  # ${data.title} 
  
  ## Description
    ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Details](#details)
  - [Contact](#contact)
  ## Installation
  Packages required to run this program are: ${data.installation}
  
  ## Usage
  Examples of how to use this program: ${data.usage}
  ## License
  ${data.license}
  ## Tests
  To test, run the following command: ${data.tests}
  ## Contributors
  ${data.contributer}
  ## Contact
  \nEmail:${gitHub} 
  \nIf you have any questions, contact the author directly at ${data.email}.`;
}

module.exports = generate;
