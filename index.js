const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jin:j12345@inflearn-boileplate.con8v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
                    //mongoose 6.0 이상 아래 코드를 기본적으로 기억하기 때문에 더이상 지원하지 않음.
                    //useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
                    }).then(() => console.log('MongoDB Connected....'))
                      .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕 Node Js')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})