const createFile = require('../../helpers/createFile');
const fs = require('fs');
const moduleDirHelper = require('../../helpers/moduleDir');


const moduleGenerator_module = async (name, path, isRedux) => {
  if(!isRedux) return false;
  const dir = moduleDirHelper('module.js', {isRedux});
  await fs.readFile(dir, 'utf8', (err, data) => {
    if(err) return err;
    const d = data.replace(/\*NAME\*/g, name);
    createFile(`${path}/${name}Module.js`, d, () => {})
  })
};

module.exports = moduleGenerator_module