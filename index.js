const ejs = require('ejs')
const fs = require('fs')
const mkdirp = require('mkdirp')

const fields = [
  {
    key: 'id',
    name: 'ID',
    type: 'number',
    read: true,
    write: false
  },
  {
    key: 'title',
    name: '标题',
    type: 'string',
    read: true,
    write: true
  },
  {
    key: 'description',
    name: '描述',
    type: 'string',
    read: true,
    write: true
  },
  {
    key: 'created_at',
    name: '创建时间',
    type: 'datetime',
    read: true,
    write: false
  }
]

const options = {}
const data = {fields, apiPath: '/api/todos'}


ejs.renderFile('templates/list.vue.ejs', data, options, function(err, str){
  const dirName = `src/pages/todo/`
  mkdirp(dirName, function(error) {
    fs.writeFileSync(`${dirName}/list.vue`, str)
  })
})

ejs.renderFile('templates/edit.vue.ejs', data, options, function(err, str){
  const dirName = `src/pages/todo/`
  mkdirp(dirName, function(error) {
    fs.writeFileSync(`${dirName}/edit.vue`, str)
  })
})
