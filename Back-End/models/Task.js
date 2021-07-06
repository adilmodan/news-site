const mongoose = require('mongoose')
Schema = mongoose.Schema;

let TaskSchema = new Schema({
    title: { type: String},
    description: { type: String},
    url: { type: String},
    urlToImage: { type: String},
    publishedAt: { type: String}
})


module.exports = mongoose.model('newslist', TaskSchema, 'newslist');