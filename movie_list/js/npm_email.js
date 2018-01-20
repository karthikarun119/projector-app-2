var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karthikarun.udu@gmail.com',
    pass: 'arunkp47'
  }
});

var mailOptions = {
  from:  'karthikarun.udu@gmail.com',
  to: 'karthikarun119@gmail.com',
  subject: 'Sending Email using Node.js',
  text: '100 '
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});