const mongoose = require("mongoose");
const validator = require("validator");

var Schema = mongoose.Schema;

var todoSchema = new Schema({
  taskName: {
    required: true,
    type: String,
    minlength: 5,
    trim: true,
  },
  taskDescription: {
    type: String,
  },
  creator: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
  },
});

var TodoModel = mongoose.model("Todo", todoSchema);

module.exports = { TodoModel };
