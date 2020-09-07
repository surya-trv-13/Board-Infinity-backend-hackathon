const { Router } = require("express");
const { TodoModel } = require("../model/todo");

const router = Router();

router.post("/add", async (request, response) => {
  var todo = new TodoModel(request.body);

  try {
    await todo.save();
    response.status(201).send({ result: todo });
  } catch (error) {
    response.status(400).send({ error });
  }
});

module.exports = router;
