const fse = require("fs-extra");
const path = require("path");
const chalk = require("chalk")

const [,, ...args] = process.argv
const projectName = args[0];
const projectDir = path.resolve(`./${projectName}`);
const templatePath = __dirname + "/template";

function init() {
  if (args.length === 0) {
    console.log();
    console.log("Please specify the project directory:")
    console.log(
      `    ${chalk.cyan("@martynasdd/create-martynas-app")} ${chalk.green("<project-directory>")}`
    );
    console.log();
    console.log("For example:")
    console.log(
      `    ${chalk.cyan("@martynasdd/create-martynas-app")} ${chalk.green("my-react-app")}`
    );
    console.log();
  } else {
    copyTemplate();
  }
}

function copyTemplate() {
  fse.copy(templatePath, projectDir, err => {
    if (err) return console.error(err);
    console.log("success!");
  })
}

module.exports = {
  init
}