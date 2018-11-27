const list = require('../controllers/todoList.js')
const koaRouter = require('koa-router')

const router = koaRouter()

router.post('/list', list.jjList)
router.get('/queryAll', list.queryAll)
router.get('/deleteList/:id', list.deleteList)
router.post('/modifyList', list.modifyList)

module.exports = router