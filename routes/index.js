const email = require('../config/nodemailer')
const express = require('express');
const router = express.Router();

let alca = process.env.EMAIL_USE
let joan = process.env.MY_EMAIL

/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', emails: {alca, joan} });
});

/* POST Home page*/
router.post('/', (req, res) => {

let emails = [alca, joan]
//console.log(req.body.email)

let correo;
if(req.body.email_write == undefined){
  correo = emails[req.body.email -1]
  
}else{
  correo = emails[req.body.email_write]
}
let subject = req.body.subject;
let content = req.body.content;

    try{
      //Send Email
      email( correo, subject, content ).then( () => {
        console.log('Email Sent'); res.redirect('/');
      }).catch(
        (err)=>{ console.log(err); }
      );

    }catch(error){
      console.log(error)
    }
})

module.exports = router;
