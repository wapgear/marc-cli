const createFile = require('../../helpers/createFile');
const fs = require('fs');
const moduleDirHelper = require('../../helpers/moduleDir');


const moduleGenerator_index = async (name, path, isRedux) => {
  const dir = moduleDirHelper('index.js', {isRedux});
  await fs.readFile(dir, 'utf8', (err, data) => {
    if(err) return err;
    const d = data.replace(/\*NAME\*/g, name);
    createFile(`${path}/index.js`, d, () => {})
  })
};

module.exports = moduleGenerator_index