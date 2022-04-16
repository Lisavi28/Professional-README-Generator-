

// Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}
  

  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [license](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

 
  
  ## [Description](#table-of-contents)
  ${data.description}
  ## [Installation](#table-of-contents)
  ${data.installation}
  ## [Usage](#table-of-contents)
  ${data.usage}
  ## [License](#table-of-contents)
  ${data.license}
  ## [Contributing](#table-of-contents)
  ${data.Contributers}
  ## [Tests](#table-of-contents)
  ${data.tests}
  ## [Questions](#table-of-contents)
  Contact me using the following links:
  [GitHub](https://github.com/${data.githubUsername})
  [Email: ${data.email}](mailto:${data.email})

`;
}

module.exports = generateMarkdown;


