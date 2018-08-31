#!/usr/bin/env node

const Handlebars = require('handlebars')
const fs = require('fs')

const program = require('commander')
 
program
  .version('0.1.0')
  .option('-n, --name <name>', 'name')
  .option('-f, --filePath <filePath>', 'file path')
  .parse(process.argv)

console.log('program', program.name, program.filePath)

const data = fs.readFileSync(program.filePath, 'utf8')

const fileData = fs.readFileSync('../templates/list.vue.hbs', 'utf8')
const template = Handlebars.compile(fileData)
const result = template({fields: data, apiPath: '/api/todos'})

const dirName = `../src/pages/${program.name}/list.vue`
fs.mkdir(dirName)
fs.writeFileSync(`${dirName}/list.vue`, result)
