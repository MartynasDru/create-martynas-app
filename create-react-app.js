const fse = require('fs-extra');
const path = require('path');

const [,, ...args] = process.argv
const projectName = args[0];
const projectDir = path.resolve(`./${projectName}`);
const templatePath = __dirname + "/template";

function init() {
  copyTemplate();
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