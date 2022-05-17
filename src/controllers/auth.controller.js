import Users from '../models/Users'
import jwt from 'jsonwebtoken'
import Role from '../models/Role'
import config from '../config'

//crea los usuarios 
export const signUp = async (req, res) => {

    const { nombre, apellido, correo, password, celular, direccion, estado, roles, proyectos } = req.body


    const newUsers = new Users({
        nombre,
        apellido,
        correo,
        password: await Users.encryptPassword(password),
        celular,
        direccion,
        estado,
        roles,
        proyectos

    })

    /*if (roles) {
        console.log('--------', roles, req.body)
        const foundRoles = await Role.find({ name: { $in: roles } })

        console.log('///////', foundRoles)
        newUsers.roles = foundRoles.map(role => role._id)

    }*/

    const savedUSers = await newUsers.save()

    const token = jwt.sign({ id: savedUSers._id }, config.SECRET, {
        //expiresIn: 86400 -> para que el token tenga fecha de expiracion en este caso 86400 son 24H
    })

    res.json({ token, message: 'User created succesfully' })
}

//Iniciar sesion 
export const signIn = async (req, res) => {
    const userFound = await Users.findOne({ correo: req.body.correo }).populate('roles')

    if (!userFound) return res.json({
        message: "User not found "
    })

    const matchPassword = await Users.comparePassword(req.body.password, userFound.password)

    if (!matchPassword) return res.json({ token: null, message: 'Invalid password' })

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
        //expiresIn: 86400 -> para que el token tenga fecha de expiracion en este caso 86400 son 24H
    })

    res.json({ token, message: "Users exist" })
}

//buscar todos los usuarios
export const findAllUsers = async (req, res) => {
    const users = await Users.find()
    res.json(users)
}

//Busca un usuario por el correo 
export const findOneUser = async (req, res) => {
    try {

        const users = await Users.find({ correo: req.params.correo })
        console.log(users)

        if (Users.length === 0) {
            res.status(400).send('User not found')
        } else {
            res.json(users)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('User not found')
    }
}

//borra los usuarios por correo 
export const deleteUser = async (req, res) => {
    await Users.findOneAndDelete(req.params.correo)
    res.json({
        message: 'User were deleted successfully'
    })
}

//Actualizar campo proyectos por correo
export const UpdateUsers = async (req, res) => {
    const { proyectos } = req.body

    const upadateUser = await Users.findOneAndUpdate(req.params.correo, { proyectos })
    res.json(upadateUser)
}
