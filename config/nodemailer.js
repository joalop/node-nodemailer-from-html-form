const nodemailer = require("nodemailer");
const dotenv = require('dotenv')
dotenv.config()

async function main(){
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // gmail server
    port: 465, // gmail port
    secure: true, // Active
    auth: {
      user: process.env.EMAIL_USE, // user account
      pass: process.env.EMAIL_PASS// aplication password
    },
  });
  // send mail
  let info = await transporter.sendMail({
    from: process.env.EMAIL_USE, // sender
    to: process.env.MY_EMAIL, // receiver
    subject: "Test Lab", // Subject line
    text: "Hello world?", // plain text
    html: "<h1>Hello World</h1>", // html
  });
}

module.exports = main;