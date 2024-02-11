// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // Return license badge based on license selected
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case 'MIT':
        return '[MIT License](https://opensource.org/licenses/MIT)';
      case 'GNU GPLv3':
        return '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)';
      // Add more cases for other licenses if needed
      default:
        return '';
    }
  } else {
    return '';
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    // Return license section based on license selected
    return `
## License
This application is covered under the ${license} license.
`;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Generate Table of Contents based on provided data
  const tableOfContents = `
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
`;

  // Generate License section with badge and notice
  const licenseSection = `
## License
${renderLicenseBadge(data.license)}
This application is covered under the ${data.license} license. 
`;

  // Generate README content
  return `
# ${data.title}

${tableOfContents}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For questions about this project, please contact [${data.author}](https://github.com/${data.username}) via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
