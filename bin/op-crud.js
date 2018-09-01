#!/usr/bin/env node

const ejs = require('ejs')
const fs = require('fs')
const mkdirp = require('mkdirp')

const program = require('commander')
 
program
  .version('0.1.0')
  .option('-n, --name <name>', 'name')
  .option('-t, --title <title>', '标题')
  .option('-f, --filePath <filePath>', 'file path')
  .parse(process.argv)

console.log('program', program.name, program.filePath)

const fields = JSON.parse(fs.readFileSync(program.filePath))
const options = { }
const data = {fields, apiPath: `/api/${program.name}`}


const templateData = [
  { type: 'list', path: program.name, title: `${program.title} 列表`, icon: 'th-list' },
  { type: 'edit', path: `${program.name}/:id/edit`, title: `${program.title} 编辑` },
  { type: 'add', path: `${program.name}-add`, title: `${program.title} 新增`, icon: 'plus' }
]

templateData.forEach(template => {
  ejs.renderFile(`${__dirname}/../templates/${template.type}.vue.ejs`, data, options, function(err, str){
    const dirName = `src/pages/${program.name}/`
    mkdirp(dirName, function(error) {
      fs.writeFileSync(`${dirName}/${template.type}.vue`, str)
    })
  })
})

console.log('routes:')
templateData.forEach((template, index) => {
  console.log(`  {
    path: '/${template.path}',
    name: '${program.name}-${template.type}',
    component: () => import('@/pages/${program.name}/${template.type}'),
    meta: { meta, title: ${template.title} }
  }${ index === templateData.length ? '' : ',' }`)
})

console.log('menu:')

ejs.renderFile(`${__dirname}/../templates/menu.ejs`, { templateData, program }, options, function(err, str){
  console.log(str)
})