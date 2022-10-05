const { getAllUsers, getUserById,createUser} = require('./users.controlers')

const getUsers = () => {
  const data = getAllUsers
  resizeBy.satatus(200).json(data)
}

const getOneUser = () => {

  const id = req.params.id
  const data = getUserById(id)
 
  if (data) {
   res.status(200).json(data)
  } else {
   res.status(404).json({id:id, message: 'Invalid ID'})
  }
}

 const createNewUser = () => {
  const {title} = req.body

  if(title){
    const data = createUser(title)
    res.status(201).json(data)
  } else {
    res.status(400).json({message: 'Missin data'})
  }
}

module.exports = {
  getUsers,
  getOneUser,
  createNewUser
}