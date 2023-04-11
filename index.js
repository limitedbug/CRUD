const { connect } = require('./db');
const { createUser, getUser,getUsers, updateUser, deleteUser } = require('./users');

async function run() {
    
const connection = await connect();
  // Creamos un usuario
  const userId = await createUser({
    name: 'Roberto',
    email: 'roberto@gmail.com',
  });
  console.log(userId);

  // Obtenemos un usuario
  const user = await getUser(userId);
  console.log(user);

  // Obtenemos un usuario
  const users = await getUsers();
  console.log(users);

  // Actualizamos un usuario
  const numUpdated = await updateUser(userId, { email: 'robertito@gmail.com' });
  console.log(`Usuario ${numUpdated} actualizado`);

  // Eliminamos un usuario
  const numDeleted = deleteUser(userId);
  console.log(`Usuario ${numDeleted} borrado`);

  // Cerramos la conexión
  connection.end();
}

run();