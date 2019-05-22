var Mock = require('mockjs')
// 登录接口
Mock.mock('http://mockjs.com/api/user/login', 'get', {
  'user': {
    'userId|1-100': 100,
    'token': '@word'
  }
})
