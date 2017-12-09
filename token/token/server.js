/**
 * 服务器端
 */
 const url = require('url')
const express = require('express')
const bodyParser = require('body-parser')
const http = require('http')

// 引入的是v1/index.js
const uuidV1 = require('uuid/v1')
const app = express()

const users = require('./users.json') // users数组
app.use(bodyParser.urlencoded()) // 'a=1&b=2'
app.use(bodyParser.json())  // '{"a":1, "b": 2}'
app.use(express.static('../token-client'))

// 验证token是不是真的
app.use((req, res, next) => {
  const arr = ['/signin', '/signup']
  console.log(req.url)
  if (arr.indexOf(url.parse(req.url).pathname) !== -1) {
    return next()
  }

  const token = req.query.token
  console.log(token, ':token')
  // 到数据库users中找有没有包含token的数据
  const user = users.find(u => u.token === token && token !==undefined)
  if (!user) return res.send('未登陆不允许访问!')
  next()
})


app.use('/signin', (req, res) => {
  const {name, pwd} = req.body
  // 判断用户名和密码在数据库有没有
  // user就是暴露和用户数据, 找不到user就是null
  const user = users.find(u => u.name === name && u.pwd === pwd)
  if (!user) return res.send({errcode: 10004})
  // uuid
  const token = uuidV1() // 生成一个随机的不重复的字符串
  user.token = token // 将这个字符串与用户关联!

  // 将token响应给了前端。
  // 下将有请求过来时，要求前端一定要带上这个token
  // 我们把这个token作为参数，到数据库中查找有没有对应的用户
  // 如果查不到，说明这个token是假的， 查到就说明用户已经登陆过了!
  res.send({
    errcode: 0,
    token: token
  })
})

// 获取所有用户的信息
// 需要登陆后才能获取这个信息
app.use('/alluser', (req, res) => {
  res.send({
    errcode: 0,
    users: users
  })
})

http.createServer(app)
.listen(3000,err=>{
	if(!err){
		console.log('ok')
	}
})