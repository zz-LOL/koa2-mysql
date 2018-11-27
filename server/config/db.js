const sequelize = require('sequelize');

const Todolist = new sequelize('mysql://root:wxd2008@localhost/todolist',{
  define: {
    timestamps: false // 取消sequelzie自动给数据表加入时间戳
  }
})

module.exports = {
  Todolist  // 将Todolist暴露出接口方便model调用
}