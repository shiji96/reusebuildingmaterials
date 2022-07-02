const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/material-routes");
const cors = require("cors"); 
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5080; 


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use("/uploadimages", express.static("uploadimages"));

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/materials", router); 

app.get('/', (req,res) => {
  res.send('Hello');
});

//DB connection
mongoose.connect(process.env.CONNECTION_URL  /*  || 'mongodb://0.0.0.0:27017/deployment' */,
{

  useNewURLParser: true,
  useUnifiedTopology: true,
},  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(port);
  })
  .catch((err) => console.log(err));





