const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: { type: String},
    email: { type: String},
    password: { type: String}
})

UserSchema.methods.genPasswordHash = function (password) {
    const salt = bcrypt.genSaltSync(10)
    this.password = bcrypt.hashSync(password, salt)
 }

 UserSchema.methods.comparePasswordHash = function (password, passwordHash) {
    console.log("password:" + password)
     console.log("this password:" + passwordHash)
    return bcrypt.compareSync(password, passwordHash)
  }
module.exports = mongoose.model('userslist', UserSchema, 'userslist');