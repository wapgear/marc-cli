const prompt = require('promptly');
const createFile = require('../helpers/createFile');
const moduleDirHelper = require('../helpers/moduleDir');
const fs = require('fs');

const moduleGenerator_index = require('./module/index');
const moduleGenerator_module = require('./module/module');
const moduleGenerator_component = require('./module/component');



const generate_files = async (...data) => {
  await moduleGenerator_index(...data);
  await moduleGenerator_component(...data);
  await moduleGenerator_module(...data);

};

const module_generator = async (settings) => {
  const module = await prompt.prompt('Module name: ');
  const isRedux = await prompt.confirm('Need redux?: ');
  const path = `${settings.modulesPath}${module}`;
  const realModuleName =
    module.split('/').length > 1 ?
      module.split('/')[module.split('/').length -1] :
      module;

  await generate_files(realModuleName, path, isRedux);
  await console.log(`${realModuleName} module successfully created`);
  await console.log(
`
Settings:
Redux: ${isRedux}
`)
};

module.exports = module_generator