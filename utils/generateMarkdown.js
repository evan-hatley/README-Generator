// Template Literals made the format for the markdown file a breeze. The only part I'm struggling with is the badge creator.
function generateMarkdown(data) {
  return `# ${data.title}

## Description

  ${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Testing](#testing)
- [Questions](#questions)

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

  I can be reached by email at ${data.email}, as well as Github at ${data.profile}.
`;
}

module.exports = generateMarkdown;
