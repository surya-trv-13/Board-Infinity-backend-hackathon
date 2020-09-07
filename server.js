const express = require("express");
const bodyParser = require("body-parser");
require("./database/db");

var todoRouter = require("./router/todo");

var PORT = process.env.PORT;
var app = express();

app.use(bodyParser.json());
app.use(todoRouter);

app.listen(PORT, () => {
  console.log(`Listening to PORT => ${PORT}`);
});
