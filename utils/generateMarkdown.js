
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Contributions
  ${data.contribution}

  ## Testing
  ${data.testing}

  ## Questions
  I can be reached by email at ${data.email}, as well as Github at ${data.profile}
`;
}

module.exports = generateMarkdown;
