var email = require('../config/nodemailer')

let alca = process.env.EMAIL_USE
let joan = process.env.MY_EMAIL

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', emails: {alca, joan} });
});

router.post('/', (req, res) => {

let emails = [alca, joan]
try{
  //Send Email
  email().then( () => { console.log('Email Sent'); res.redirect('/'); }).catch( (err)=>{ console.log(err); });

}catch{

}
 
})

module.exports = router;
