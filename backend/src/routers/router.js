const express = require("express");
const todosRouter = require("./todosRouter");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
router.use("/todos", todosRouter);

/* ************************************************************************* */

module.exports = router;
