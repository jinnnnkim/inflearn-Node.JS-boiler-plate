const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        //trip: 공백 제거해주는 역할
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    rol: {
        type: Number,
        //rol를 지정하지 않을 경우 기본 값 0
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        //token 유효 기간
        type: Number
    }
})

const User = mongoose.model('User', userSchema)
//다른 곳에서도 사용할 수 있도록 설정
module.exports = {}
