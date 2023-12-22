const express = require("express");

const todosRouter = express.Router();

const {
  browse,
  read,
  edit,
  add,
  remove,
} = require("../controllers/todosController");

todosRouter.get("/", browse);
todosRouter.get("/:id", read);

todosRouter.delete("/:id", remove);

todosRouter.put("/:id", edit);

todosRouter.post("/", add);

module.exports = todosRouter;
