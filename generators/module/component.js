const createFile = require('../../helpers/createFile');
const fs = require('fs');
const moduleDirHelper = require('../../helpers/moduleDir');


const moduleGenerator_component = async (name, path, isRedux) => {
  const dir = moduleDirHelper('component.js', {isRedux});
  await fs.readFile(dir, 'utf8', (err, data) => {
    if(err) return err;
    const d = data.replace(/\*NAME\*/g, name);
    createFile(`${path}/${name}Component.js`, d, () => {})
  })
};

module.exports = moduleGenerator_component