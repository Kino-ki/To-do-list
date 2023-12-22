const tables = require("../tables");

const browse = async (req, res) => {
  try {
    const todos = await tables.todos.readAll();
    if (todos.length) {
      res.json(todos);
    } else {
      res.status(404).json({
        message: "no data in dis table",
      });
    }
  } catch (e) {
    console.error(e);
  }
};

const read = async (req, res, next) => {
  try {
    const todo = await tables.todos.read(req.params.id);
    if (todo == null) {
      res.sendStatus(404);
    } else {
      res.json(todo);
    }
  } catch (err) {
    next(err);
  }
};

const edit = async (req, res) => {
  const { task, completed } = req.body;
  const { id } = req.params;
  try {
    const result = await tables.todos.update(task, completed, parseInt(id, 10));
    if (result == null) {
      res.status(404).send("pas de bol");
    } else {
      res.status(200).json({
        message: "Votre tâche a été modifiée",
      });
    }
  } catch (err) {
    console.error(err);
  }
};

const add = async (req, res, next) => {
  const { task, completed } = req.body;
  try {
    const result = await tables.todos.create(task, completed);
    res.status(201).json({
      id: result.insertId,
      message: "Votre tâche a été crée",
    });
  } catch (e) {
    next(e);
  }
};

const remove = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await tables.todos.delete(parseInt(id, 10));
    if (result) {
      res.json({
        message: `Deleted entry ${id}`,
      });
    } else {
      res.status(404).json({
        message: "Person not found",
      });
    }
  } catch (e) {
    console.error(e);
  }
};

module.exports = { browse, read, edit, add, remove };
