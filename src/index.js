const express = require("express");
const methodOverride = require('method-override');
const nunjucks = require("nunjucks");
const passport = require('passport');
const session = require('express-session');
const  Passport  = require('./controllers/foodsController.js');

Passport.Passport(passport);




const routes = require("./routes");
const Seed = require("./seeders");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: '123',
  resave: false,
  saveUninitialized:false,
  cookie: {maxAge: 2*60*1000}
}))

//app.use(session());
app.use(passport.initialize());
//app.use(autenticaRota)
app.use(routes);

app.use(methodOverride('_method'));


app.set("view engine", "njk");
app.set("view engine", "ejs");

app.use('/foods/styles.css', (req, res, next) => {
  res.setHeader('Content-Type', 'text/css');
  next();
});



nunjucks.configure("src/views", {
  express: app,
  autoescape: true,
  noCache: true
});




Seed.up();

app.listen(3000, () => {
  console.log("Food App is running!");
});
