const { Router } = require("express");
const { Todo } = require("../model/todo");
const router = Router();

// POST /add
router.post("/add", async (request, response) => {
  //Adding the "createdAt" key during add.
  request.body["createdAt"] = new Date().getTime();

  let todo = new Todo(request.body);
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
    let tempTodos = todos;
    todos.map((todo, index) => {
      let time = new Date().getTime();

      if (todo.createdAt + todo.duration * 60000 < time) {
        tempTodos.splice(index, 1);
      }
    });
    response.status(200).send({ result: tempTodos });
  } catch (error) {
    response.status(500).send({ error });
  }
});

module.exports = router;
