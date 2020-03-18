'use strict';

exports.postMail = async (req, res) => {

  try {

    //array para dividir la string
    let aaar = [];

    //string después del cálculo
    let strDes = '';

    //dividir la string por comas
    aaar = req.body.obj.split(',');

    //codificar la clave
    let codedKey = encodeURI(process.env.REACT_APP_UAI)

    //para el indice de la clave
    let indx = 0;

    //recorro cada uno de los valores
    for (let i = 0; i < aaar.length; i++) {

      //si el indice es mayor que la longitud de la clave
      if (indx + 1 === codedKey.length) {
        indx = 0
      } else {
        indx++
      }

      strDes = strDes + String.fromCharCode(parseInt(aaar[i]) + codedKey.charCodeAt(indx))

    }

    const body = JSON.parse(decodeURI(strDes));

    //Si no se envía la palabra cesar
    if (body.val !== 'cesar') {
      res.status(500).send("HackitFatCat");
    } else {

      const nodemailer = require('nodemailer');

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        // service: 'gmail',
        // o sino
        host: "mail.overchain-labs.com",
        port: 587,
        secure: false,
        // service: 'gmail',
        auth: {
          user: process.env.REACT_APP_MAIL,
          pass: process.env.REACT_APP_PASSWORD
        }
      });

      console.log("Transporrter: ", transporter)

      let mailOptions = {
        from: process.env.REACT_APP_MAIL, // sender address
        replyTo: body.email,
        to: process.env.REACT_APP_MAIL, // list of receivers
        subject: '😻' + body.subject, // Subject line
        text: 'Teléfono: ' + body.telephone, // plain text body
        html: '<b>' + body.message + '</b>' // html body
      };

      console.log("Mail options: ", mailOptions)

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);

        res.status(201).jsonp(body);

      });

    }

  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }

}