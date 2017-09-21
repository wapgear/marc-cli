const prompt = require('promptly')
const createFile = require('../helpers/createFile')
const moduleDirHelper = require('../helpers/moduleDir')
const fs = require('fs')


const generate_files = async (name, path, isRedux) => {
  const indexDir = moduleDirHelper('index.js', {isRedux});
  const moduleDir = moduleDirHelper('index.js', {isRedux});
  const componentDir = moduleDirHelper('component.js', {isRedux});

  await fs.readFile(indexDir, 'utf8', (err, data) => {
    if(err) return err
    const d = data.replace(/\*NAME\*/g, name);
    createFile(`${path}/index.js`, d, () => {})
  })

  if(isRedux) {
    await fs.readFile(moduleDir, 'utf8', (err, data) => {
      if(err) return err
      const d = data.replace(/\*NAME\*/g, name);
      createFile(`${path}/${name}Module.js`, d, () => {})
    })
  }

  await fs.readFile(componentDir, 'utf8', (err, data) => {
    if(err) return err
    const d = data.replace(/\*NAME\*/g, name);
    createFile(`${path}/${name}Component.js`, d, () => {})
  })

};

const module_generator = async (program) => {
  const module = await prompt.prompt('Module name: ');
  const isRedux = await prompt.confirm('Need redux?: ');
  const path = program.modulePath+module
  const realModuleName = module.split('/').length > 1 ? module.split('/')[module.split('/').length -1] : module
  await generate_files(realModuleName, path, isRedux)
  await console.log(`${realModuleName} module successfully created`)
  await console.log(
`
Settings:
Redux: ${isRedux}
`)
};

module.exports = module_generator