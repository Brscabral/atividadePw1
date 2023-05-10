const express = require("express");
const methodOverride = require('method-override');
const nunjucks = require("nunjucks");

const routes = require("./routes");
const Seed = require("./seeders");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
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
