const nodemailer = require("nodemailer");
const dotenv = require('dotenv')
dotenv.config()

async function email( receiver, subject, content ){
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // gmail server
    port: 465, // gmail port
    secure: true, // Active
    auth: {

      user: process.env.EMAIL_USE, // user account
      pass: process.env.EMAIL_PASS// aplication password
    },
    tls: {
      rejectUnauthorized: false
    },
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL_USE, // sender
    to: receiver, // receiver
    subject: subject, // Subject line
    text: content, // text plain
    html: `<h1>${content}</h1>`, // html
  });
}

module.exports = email;