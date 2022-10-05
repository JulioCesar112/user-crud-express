const uuid = require('uuid')

const userDB =[
  {
    id:'cb94c526-90d8-4f3d-b281-315d057854d8',
    first_name: 'Julio Cesar',
    last_name: 'Cortez',
    email: 'julio@academlo.com',
    password: 'contraseña1234',
    birthday: '1994/08/26'
  },
  {
    id:'40826ee7-0c57-427b-aaf7-57689f4f5451',
    first_name: 'Adilene',
    last_name: 'Vigueras',
    email: 'adilene@academlo.com',
    password: 'constraseña1234',
    birthday: '1999/08/24'
  },
  {
    id:'fe183f9f-9cbc-4f9e-88cd-0496f732c247',
    first_name: 'Daniel',
    last_name: 'Hernandez',
    email: 'daniel@academlo.com',
    password: 'constraseña1234',
    birthday: '1999/08/24'
  }
]

const getAllUsers = () => {
  return userDB
}

const getUserById = (id) => {
  const data = userDB.fine(e => e.id === id)
  return data 
}

const createUser = () => {
  const newUser = {
    id:uuid.v4(),
    first_name: 'Joseline',
    last_name: 'Flores',
    email: 'joseline@academlo.com',
    password: 'constraseña1234',
    birthday: '1999/08/24'
    
  }
  userDB.push(newUser)
  return newUser
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser
}