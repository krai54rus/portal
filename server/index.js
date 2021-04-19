const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const config = require('../config/db.js');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname,"../build")));
app.use(bodyParser.urlencoded({ extended: true }));

const uri = config.url;
const mongoClient = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoClient.connect((err, client) => {
  if (err) return console.log(err);

  // Подрубаем роуты, пихаем туда экспресс объект для создания роутов и  монго объект для работы с бд
  require('./routes')(app, client);
  app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.listen(1234, () => {
    console.log('сервер поехал');
  })
  const collection = client.db("portal").collection("beer");
  // perform actions on the collection object
  // console.log(collection);
  mongoClient.close();
});
