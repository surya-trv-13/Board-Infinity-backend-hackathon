const { Router } = require("express");
const { Todo } = require("../model/todo");

const router = Router();

// POST /add
router.post("/add", async (request, response) => {
  var todo = new Todo(request.body);

  try {
    await todo.save();
    response.status(201).send({ result: todo });
  } catch (error) {
    response.status(400).send({ error });
  }
});

// GET /list
router.get("/list", async (request, response) => {
  try {
    const todos = await Todo.find({});
    response.status(200).send({ result: todos });
  } catch (error) {
    response.status(500).send({ error });
  }
});

module.exports = router;
