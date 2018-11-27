const todoModels = require('../models/list.js')

const jjList = async function(ctx){
  const data = ctx.request.body
  const result = await todoModels.todoList(data)
  ctx.body = {
    result
  }
}

const queryAll = async function(ctx) {
  const data = ctx.request.body
  const result = await todoModels.queryTodoList(data)
  ctx.body = {
    'result': result
  }
}

const deleteList = async function(ctx) {
  const data = ctx.params.id
  const result = await todoModels.deleteList(data)
  if(result) {
    ctx.body = {
      'result': '删除成功，删除id为' + data
    }
  } else {
    ctx.body = {
      'result': '删除失败'
    }
  }
}

const modifyList = async function(ctx) {
  const data = ctx.request.body
  const result = await todoModels.updateList(data)
  if(result) {
    ctx.body = {
      'result': '修改成功'
    }
  } else {
    ctx.body = {
      'result': '修改失败'
    }
  }
}

module.exports = {
  jjList,
  queryAll,
  deleteList,
  modifyList
}