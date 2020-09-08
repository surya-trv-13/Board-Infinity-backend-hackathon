const express = require("express");
const bodyParser = require("body-parser");
require("./database/db");

let todoRouter = require("./router/todo");

let PORT = process.env.PORT;
let app = express();

app.use(bodyParser.json());
app.use(todoRouter);

app.listen(PORT, () => {
  console.log(`Listening to PORT => ${PORT}`);
});
