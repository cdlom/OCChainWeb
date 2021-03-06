'use strict'

// Agregar las variables de .env a las variables de entorno
//require('dotenv').config({ path: require('path').join(__dirname, '.env') });
require('dotenv').config();

const
  express = require('express'),
  path = require('path'),
  port = process.env.PORT || 8083,
  app = express(),
  mailController = require('./server/controllers/mail'),
  bodyParser = require('body-parser');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./build/'));

// Router para la API que envía mail
const routerMail = express.Router();
routerMail.route('/mail').post(mailController.postMail);
app.use('/api', routerMail);

// Router para lo estatico
const router = express.Router();
router.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'), function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});
app.use(router);

app.listen(port);

console.log("Variable de entorno de prueba", process.env.REACT_APP_UAI);
console.log("Variable de entorno de prueba", process.env.REACT_APP_API_URL);
console.log('Servidor corriendo en puerto: ' + port);