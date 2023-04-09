const mongoose = require('./db');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
});

const User = mongoose.model('users', userSchema);

async function createUser(user) {
  const newUser = new User(user);
  await newUser.save();
  return newUser._id;
}

async function getUser(id) {
  const user = await User.findById(id);
  return user;
}

async function getUsers() {
    const users = await User.find({});
    return users;
  }

async function updateUser(id, updates) {
  const result = await User.findByIdAndUpdate(id, updates);
  return result ? 1 : 0;
}

async function deleteUser(id) {
  const result = await User.findByIdAndDelete(id);
  return result ? 1 : 0;
}

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};