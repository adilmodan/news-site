const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const request = require('request');
const ipLocate = require("node-iplocate");
const publicIp = require('public-ip');
const bodyParser = require('body-parser');
const NewsTask = require('../models/Task');
const ContactInfo = require('../models/contactInfo');
const userslist = require('../models/user');


const router = require('express').Router();
// parse application/json
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.use(jsonParser,urlencodedParser);

//collection names def.
const newsColName = 'newslist';
const contactsColName = 'Contacts';
const sportColName = 'Sports';


//default loc new york city
var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast/daily?q=new+york&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";//"http://api.openweathermap.org/data/2.5/forecast/daily?q=new+york&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29"; //"https://openweathermap.org/api";//"http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";
//weatherUrl =  "http://api.openweathermap.org/data/2.5/forecast/daily?q="+cityName+"&appid=fbf712a5a83d7305c3cda4ca8fe7ef29";

//will render Home and get Weather data form url and get lastest news data from datbase
router.get('/', (req, res) => {
    //get lastest news data 
    NewsTask.find({}).sort({ _id: -1 }).limit(3).then(newsList => //,function(err,data)=>{ 
    {
        if (!newsList) {
            res.status(404).json({ msg: 'New List Not found!' })
        }
        else {
            console.log(newsList);

            //res.send(newsResult);
            res.send(newsList);
            return newsList;
        }
    });
})

router.post('/contact-us-user-info', (req, res) => {
    var contactInfo = new ContactInfo();

    contactInfo.email = req.body.email;
    contactInfo.query = req.body.query;

    //inserting contact info into db
    // contact email and query
    contactInfo.save().then(result => {
        console.log(result);
        //res.send(result);
    }).catch(err =>
        res.status(500).res.send(err)
    )
})

router.post("/login", (req, res) => {
    const { username, password } = req.body
    var userMatch = new userslist();
    var userLoginData = new userslist();

    userLoginData.email = "";
    userLoginData.username = username;
    userLoginData.password = password;
    console.log(userLoginData);

    // mongoose.model('userslist').find({username}).then(user => {
     mongoose.model('userslist').find({username},(err,user)=>{
        
      if(!user) {
        res.status(404).json({ msg: 'User Not found.' })
      } else {
        console.log("user:"+ user)
        userMatch.email = user.email;
        userMatch.username = user.username;
        userMatch.password = user.password;
        console.log("Match Password " + userMatch.password)
        //   if(userMatch.comparePasswordHash(password, user.password)) {
            console.log("user:"+ user)
            console.log(user.password)
         bcrypt.compareSync(password, user.password,(err, isMatch)=>{
                if(err) throw err;
                if(isMatch){
                  // resolve(user);
                    console.log("Pass")
                }else{
                    //Password Wrong
                    reject("Auth Failed");
                   
                }
            });
        //res.json(user.genUserObj())
       
       //return bcrypt.compareSync(userLoginData.password, user.username)
      }     
    })
    .catch(err => res.status(500).json(err))
    
})

router.post("/register", (req, res) => {
    const { email, username, password } = req.body
    var registerData = new userslist();

    registerData.username = username;
    registerData.email = email;
    registerData.password = password;
    
    console.log(registerData);
    //inserting contact info into db
    // contact email and query
    registerData.genPasswordHash(password)
    registerData.save().then(result => {
        console.log(result);
        //res.send(result);
    }).catch(err =>
        res.status(500).res.send(err)
    )
})

// router.post("/register", urlencodedParser,(req, res) => {
//     var registerData = new UserTask();

//     registerData.email = req.body.email;
//     registerData.username = req.body.username;
//     registerData.password = req.body.password;
//     let newPassword = genPasswordHash(res.body.password);
//     console.log(newPassword);
//     //inserting contact info into db
//     // contact email and query
//     registerData.save().then(result => {
//         console.log(result);
//         //res.send(result);
//     }).catch(err =>
//         res.status(500).res.send(err)
//     )
// })


router.get('/register', jsonParser,(req, res) => {
    //get lastest news data 
    UserTask.find({}).then(userList => //,function(err,data)=>{ 
    {
        if (!userList) {
            res.status(404).json({ msg: 'New List Not found!' })
        }
        else {
            console.log(userList);

            //res.send(newsResult);
            res.send(userList);
            return userList;
        }
    });
})

module.exports = router;