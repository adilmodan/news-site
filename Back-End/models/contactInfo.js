/*
contacrInfo.js 
Contact information model
*/

const mongoose = require('mongoose');

var ContactInfoModel = new mongoose.Schema(
{
  email: { type: String},
  query: { type: String}
})

module.exports = mongoose.model('ContactInfo', ContactInfoModel,'Contacts');

