#!/usr/bin/env node --harmony
const program = require('commander');
const module_generator = require('./generators/module');
const component_generator = require('./generators/component');
const init_generator = require('./generators/init');
const config = require('dotenv').config({path: process.cwd() + '/.marc.env'}).parsed;


program
  .command('init')
  .action(init_generator);

program
  .option('-mp, --modules-path [path]', 'Add module path')
  .option('-cp, --components-path [path]', 'Add component path')
  .option('-ap, --additional-path [path]', 'Add additional path')
  .command('make <el>')
  .action(el => {
    const settings = {
      modulesPath: (program && program.modulePath) || (config && config.MODULES_PATH),
      componentsPath: (program && program.componentsPath) || (config && config.COMPONENTS_PATH),
      additionalPath: (program && program.additionalPath) || (config && config.ADDITIONAL_PATH)
    };

    if(el === 'module') module_generator(settings)
    if(el === 'component') component_generator(settings)
  });


program.parse(process.argv);
