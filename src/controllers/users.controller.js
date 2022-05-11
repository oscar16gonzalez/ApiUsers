import Users from '../models/Users'

//buscar todos los usuarios
export const findAllUsers = async (req, res) => {
    const users = await Users.find()
    res.json(users)
} 

//crea los usuarios 
export const createUsers = async (req, res) => {
    const newUsers = new Users({ nombre: req.body.nombre, apellido: req.body.apellido, correo: req.body.correo, password: req.body.password, 
        celular: req.body.celular, direccion: req.body.direccion, roles: req.body.roles})
    const usersSave = await newUsers.save()
    res.json(usersSave)
}


//Busca un usuario por el id 
export const findOneUser = async (req, res) => {
    const user = await Users.findById(req.params.id)
    res.json(user)
}

//borra los usuarios por id
export const deleteUser = async (req, res) => {
    await Users.findByIdAndDelete(req.params.id)
    res.json({
        message: 'User were deleted successfully'
    }) 
}















