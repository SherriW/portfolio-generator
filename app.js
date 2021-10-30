const generatePage = require('./src/page-template.js');
// require const must go at top
const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// shorten to:
const [name, github] = profileDataArgs;
// const generatePage = (userName, githubName) => {
//   return `
//     Name: ${userName}
//     GitHub: ${githubName}
//   `;
// };

fs.writeFile('index.html', generatePage(name, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});