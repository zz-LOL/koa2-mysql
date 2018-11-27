const db = require('../config/db.js')
const listModel = '../schema/list.js' // 哇，这个地方没有require，是路径真是坑死我了
const Todolistdb = db.Todolist

const list = Todolistdb.import(listModel);

const todoList = async function (data){
  await list.create({
    user_id: data.user_id,
    content: data.content,
    status: data.status
  })
  return true
}

const queryTodoList = async function (data) {
  const result = await list.findAll()
  return result
}

const deleteList = async function (id) {
  const result = await list.destroy({
    where: {
      id: id
    }
  })
  return result
}

const updateList = async function(data) {
  const result = await list.update({
    content: data.content
  }, {
    where: {
      id: data.id
    }
  })
  return result
}

module.exports = {
  todoList,
  deleteList,
  updateList,
  queryTodoList
}