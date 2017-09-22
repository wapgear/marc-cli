#!/usr/bin/env node --harmony
const program = require('commander');
const prompt = require('promptly');
const module_generator = require('./generators/module');
const component_generator = require('./generators/component');
const fs = require('fs');
const createFile = require('./helpers/createFile')
const dotenv = require('dotenv').config({path: process.cwd() + '/.marc-env'})


program
  .option('-mp, --module-path [path]', 'Add module path')
  .option('-cp, --component-path [path]', 'Add component path')
  .option('-ap, --additional-path [path]', 'Add additional path')
  .command('make <el>')
  .action(el => {
    if(el === 'module') module_generator(program)
    if(el === 'component') component_generator(program)
  })

program.parse(process.argv);
