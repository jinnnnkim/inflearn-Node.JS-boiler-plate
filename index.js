const express = require('express')
const app = express()
const port = 3000

const bodyParser = require('body-parser');
const {User} = require("./models/User");

//application/x-www-form-urlencodene url를 통해 정보를 가져옴
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());



const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jin:j12345@inflearn-boileplate.con8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
                    //mongoose 6.0 이상 아래 코드를 기본적으로 기억하기 때문에 더이상 지원하지 않음.
                    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
                    }).then(() => console.log('MongoDB Connected....'))
                      .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕 Node Js')
})

//register router 생성
app.post('/register', (req, res) => {

  //회원가입시 필요한 정보들을 client에서 가져오면 정보들을 데이터 베이스에 넣어줌
  const user = new User(req.body)
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
     //정보 전달 성공
      return res.status(200).json({
      success: true
    }) 
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})