const express = require("express");
const createError = require('http-errors');
const path = require("path");
// const cookieParser = require('cookie-parser');
// const logger = require('morgan')
const exphbs = require("express-handlebars");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// Handlebars setup
app.engine("hbs", exphbs.engine({
    extname: ".hbs",
    defaultLayout: "layout", // <-- THIS is important
    layoutsDir: path.join(__dirname, "views/layouts"),// <-- layout folder
    partialsDir: path.join(__dirname, "views/partials")
  }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
// app.use(cookieParser());

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
// app.use("/users", usersRouter)

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
