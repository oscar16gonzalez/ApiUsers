import Users from '../models/Users'
import jwt from 'jsonwebtoken'
import Role from '../models/Role'
import config from '../config'

//crea los usuarios 
export const signUp = async (req, res) => {

    const {nombre, apellido, correo, password, celular, direccion, estado, roles} = req.body


    const newUsers = new Users ({
        nombre,
        apellido,
        correo,
        password : await Users.encryptPassword(password),
        celular,
        direccion,
        estado,
    })

    if(roles) {
        const foundRoles = await Role.find({name: {$in: roles}})
        newUsers.roles = foundRoles.map(role => role._id)
        
    }

    const savedUSers = await newUsers.save()
    console.log(savedUSers)

    const token = jwt.sign({id: savedUSers._id}, config.SECRET, {
        //expiresIn: 86400 -> para que el token tenga fecha de expiracion en este caso 86400 son 24H
    })

    res.json({token, message: 'User created succesfully'})
}

//Iniciar sesion 
export const signIn = async (req, res) => {
    const userFound = await Users.findOne({correo: req.body.correo}).populate('roles')

    if(!userFound) return res.json({
        message: "User not found "
    })

    const matchPassword = await Users.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.json({token: null, message: 'Invalid password'})

    const token = jwt.sign({id: userFound._id}, config.SECRET, {
        //expiresIn: 86400 -> para que el token tenga fecha de expiracion en este caso 86400 son 24H
    })

    res.json({token, message: "Users exist"})
}

//buscar todos los usuarios
export const findAllUsers = async (req, res) => {
    const users = await Users.find()
    res.json(users)
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

