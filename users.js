
const { connect } = require('./db');

async function createUser(user) {
    const connection = await connect();
  
    const [result] = await connection.execute(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [user.name, user.email]
    );
  
    connection.end();
  
    return result.insertId;
  }
  
  async function getUser(id) {
    const connection = await connect();
  
    const [rows] = await connection.execute('SELECT * FROM users WHERE id = ?', [
      id,
    ]);
  
    connection.end();
  
    return rows[0];
  }
  
  async function getUsers() {
    const connection = await connect();
  
    const [rows] = await connection.execute('SELECT * FROM users');
  
    connection.end();
  
    return rows;
  }

  async function updateUser(id, updates) {
    const connection = await connect();
  
    const [result] = await connection.execute(
      'UPDATE users SET email = ? WHERE id = ?',
      [updates.email, id]
    );
  
    connection.end();
  
    return result.affectedRows;
  }
  
  async function deleteUser(id) {
    const connection = await connect();
  
    const [result] = await connection.execute('DELETE FROM users WHERE id = ?', [
      id,
    ]);
  
    connection.end();
  
    return result.affectedRows;
  }
  
  module.exports = {
    createUser,
    getUser,
    getUsers,
    updateUser,
    deleteUser,
  };