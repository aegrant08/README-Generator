// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `
  
  # ${data.title}

  ${data.badge}

  ## Description

  ${data.description}

  ## Table of Contents

`;
}

module.exports = generateMarkdown;
