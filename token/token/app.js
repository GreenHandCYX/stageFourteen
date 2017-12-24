var express = require('express')
let bodyParser = require('body-parser');

const users = require('./users')

app.use(bodyParser.urlencoded({extended:false}));


//使用中间件express-session来操作session
let session = require('express-session');
//使用中间件express-session来操作session,引入后会在req上添加一个session对象
app.use(session({
  secret: 'fad',
  resave: false,
  saveUninitialized: false
}));


// app.use(express.static('./public'))

const app = express()
const server = app.listen(3000,(err)=>{
  if(!err){
    console.log('服务器已在3000启动')
  }
})


app.use('/signin',(req,res,next)=>{
  const {name,pwd} = req.body;
  const user = users.find(u => u.name === name && u.pwd === pwd)


  if (!user) return res.json({user})
  next();
})

