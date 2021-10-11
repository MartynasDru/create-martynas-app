const fse = require("fs-extra");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk")

const [,, ...args] = process.argv
const projectName = args[0];
const projectDir = path.resolve(`./${projectName}`);
const templatePath = __dirname + "/template";

const init = () => {
  if (args.length === 0) {
    noArgsGuidelines();
  } else {
    copyTemplate();
    setupPackageJSON();

    console.log(chalk.green(`Project ${projectName} setup finished!`));
  }
}

function copyTemplate() {
  fse.copySync(templatePath, projectDir);
}

function noArgsGuidelines() {
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
}

function setupPackageJSON() {
  const packageJSON = fse.readJsonSync(`${projectDir}/package.json`);
  packageJSON.name = projectName;

  fs.writeFileSync(`${projectDir}/package.json`, JSON.stringify(packageJSON, null, 2));
}

module.exports = {
  init
}