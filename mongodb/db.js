const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const dbName = 'myProject';

const client = new MongoClient(uri);

let db;

async function connect() {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log(`Conectado a ${dbName}`);
  } catch (err) {
    console.log(`Error al conectarse a ${dbName}: ${err}`);
  }
}

function getDB() {
  return db;
}

module.exports = {
  connect,
  getDB,
};