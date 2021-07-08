const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer")
const app = express();
const Port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({ origin: `${process.env.PORT}`, credentials: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", `${process.env.PORT}`);
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/mail", async (req, res) => {
  const {info} = req.body

  try{
    response = await sendMail(info)
    return res.status(200).json({message: "Email sent successfully!"})
  }
  catch(err){
    console.log(err)
    return res.status(400).json({message:err.message})
  }
  
})

function sendMail(info) {

  var transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.GMAIL_PASSWORD
    },
  });

  //send to client
  var mailOptions = {
    from: process.env.GMAIL_ID,
    to: info.email,
    subject: 'Portfolio Message',
    html: `<h2>Dear ${info.name} ,</h2><br>
    <p>Thank you for reach out to me.</p>
    <p>I'll get back to you very soon.<p>
    `,
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent' + info.response);
    }
  });
  
  //send to self
  var mailOptions = {
    from: process.env.GMAIL_ID,
    to: process.env.GMAIL_ID,
    subject: 'Portfolio Message',
    html: `
    <b>Name: </b><p>${info.name}</p>
    <b>Email: </b><p>${info.email}</p>
    <b>Message: </b><p>${info.message}</p>
    `,
  };

  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent' + info.response);
    }
  });

}

if(process.env.NODE_ENV == "production"){
  app.use(express.static('client/build'))
  const path = require('path')
  app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','index.html'))
  })
}

app.listen(Port, () => {
  console.log(`Server Running ${Port}`);
});
