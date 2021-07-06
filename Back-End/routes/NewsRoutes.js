const router = require('express').Router();
const NewsTask = require('../models/Task')//models/Task');
const bodyParser = require('body-parser');

router.use(bodyParser());

router.get('/newslist', (req, res) => {
    NewsTask.find((err,result) => {
        if(err) {
            throw err;
        }
        else{ 
            res.send(result);
        }
    })
})

router.delete('/newslist/:id', (req,res) =>{
    const id= req.params.id;
    console.log(id);
    NewsTask.findByIdAndDelete(id)
    .then(data => res.json(data))
    .catch(err => res.status(500).json(err))
})

router.get('/newslist/:title', (req,res) => {
    const title= req.params.title;

    NewsTask.find({"title":title}, (err,result) => {
        if(err) {
            throw err;
        }
        else{ 
            console.log(result);
            res.send(result);
        }
    })
})

router.put('/newslist/:id', (req,res) =>{
    console.log("inside the update...");
    // const { id } = req.params

    const { title, description, url, urlToImage, publishedAt } = req.body
    // const newsTask = new NewsTask()

    // newsTask.title = title
    // newsTask.description = description
    // newsTask.url = url
    // newsTask.urlToImage = urlToImage
    // newsTask.publishedAt = publishedAt
    const newsTask = new NewsTask();

    const { id } = req.params;
    const filter = {_id:id};
    const update = {"$set": {
        "_id": id,
        "title": title,
        "description":description,
        "url":url,
        "urlToImage":urlToImage,
        "publishedAt": publishedAt
    }}

    NewsTask.findOneAndUpdate(filter,update,(err,result) =>{ })

})

router.post('/newslist', (req, res) => {
    console.log("inside the post");
    console.log(req.body);
    const { title, description, url, urlToImage, publishedAt } = req.body

    const newsTask = new NewsTask()
  
    newsTask.title = title
    newsTask.description = description
    newsTask.url = url
    newsTask.urlToImage = urlToImage
    newsTask.publishedAt = publishedAt

    newsTask.save()
      .then(newNewsTask => res.json(newNewsTask.genUserObj()))
      .catch(err => res.status(500).json(err))
  })
  
  module.exports = router

  