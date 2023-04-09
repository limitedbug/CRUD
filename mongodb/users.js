const { ObjectId } = require('mongodb');
const { getDB } = require('./db');

const collection = 'users';

async function createUser(user) {
  const db = getDB();
  const result = await db.collection(collection).insertOne(user);
  return result.insertedId;
}

async function getUsers() {
    const db = getDB();
    const result = await db.collection(collection).find({}).toArray();
    return result;
  }

async function getUser(id) {
  const db = getDB();
  const result = await db.collection(collection).findOne({ _id: new ObjectId(id) });
  return result;
}

async function updateUser(id, updates) {
  const db = getDB();
  const result = await db.collection(collection).updateOne({ _id: new ObjectId(id) }, { $set: updates });
  return result.modifiedCount;
}

async function deleteUser(id) {
  const db = getDB();
  const result = await db.collection(collection).deleteOne({ _id: new ObjectId(id) });
  return result.deletedCount;
}

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};