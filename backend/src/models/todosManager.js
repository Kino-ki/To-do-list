const AbstractManager = require("./AbstractManager");

class todosManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table task "item" as configuration
    super({ table: "todos" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT *FROM ${this.table} where id= ?`,
      [id]
    );
    return rows[0];
  }

  async update(task, completed, id) {
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET task=?, completed=? where ID=?`,
      [task, completed, id]
    );
    console.info(result);
    return result.affectedRows;
  }

  async create(task, completed) {
    // Execute the SQL INSERT query to add a new gnome to the "gnome" table
    const [result] = await this.database.query(
      `insert into ${this.table} (task, completed) VALUES (?, ?)`,
      [task, completed]
    );

    // Return the ID of the newly inserted gnome
    return result.insertId;
  }

  async delete(id) {
    const [result] = await this.database.query(
      `DELETE FROM ${this.table} WHERE id=?`,
      [id]
    );

    return result;
  }
}

module.exports = todosManager;
