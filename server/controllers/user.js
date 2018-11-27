const user = require('../models/user.js');

const getUserInfo = async function (ctx){
  const id = ctx.params.id; // 获取url里传过来的参数里的id
  const result = await user.getUserById(id);  // 通过yield “同步”地返回查询结果
  ctx.body = result // 将请求的结果放到response的body里返回
}

const postUserInfo = async function (ctx) {
  const data = ctx.request.body // post过来的数据都存在request.body里
  const userInfo = await user.getUserByName(data.name)
  if (userInfo) {  // 如果查无此用户会返回null
    ctx.body = {
      success: true,
      body: {
        id: userInfo.id,
        name: userInfo.user_name,
        password: userInfo.password
      }
    } 
  }else {
    ctx.body = {
      success: false,
      info: '用户不存在！' 
    }
  }
}

module.exports = {
  getUserInfo, // 把获取用户信息的方法暴露出去
  postUserInfo 
}