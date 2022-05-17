import Membership from '../models/Membership'

//buscar todas las afiliaciones
export const findAllMembership = async (req, res) => {
    const membership = await Membership.find()
    res.json(membership)
}

//crear una afiliacion
export const createMembership = async (req, res) => {
    const newMembership = new Membership({
        cedula: req.body.cedula, nombre: req.body.nombre, apellido: req.body.apellido, genero: req.body.genero,
        fecha_nacimiento: req.body.fecha_nacimiento, direccion: req.body.direccion, correo: req.body.correo, celular: req.body.celular, telefono: req.body.telefono,
        fecha_ingreso: req.body.fecha_ingreso, examen_ingreso: req.body.examen_ingreso, salario: req.body.salario, entidad_bancaria: req.body.entidad_bancaria, cargo: req.body.cargo, numero_cuenta: req.body.cuenta_bancaria,
        eps: req.body.eps, arl: req.body.arl, fondo_pensiones: req.body.fondo_pensiones, caja_compensacion: req.body.caja_compensacion, curso_alturas: req.body.curso_alturas, rut: req.body.rut, estado: req.body.estado,
        nombre_emergencia: req.body.nombre_emergencia, celular_emergencia: req.body.celular_emergencia
    })

    const membershipSave = await newMembership.save()
    res.json(membershipSave)
}

//buscar afiliacion por id
/*export const findOneMembership = async (req, res) => {
    const membership = await Membership.findById(req.params.id)
    res.json(membership)
}*/

//Buscar afiliacion por correo de usuario 
export const findOneMembershipEmail = async (req, res) => {
    try {
        console.log(req.params.email)
        const membership = await Membership.find({ cedula: req.params.cedula })
        console.log(membership)

        if (membership.length === 0) {
            res.status(400).send('User not found')
        } else {
            res.json(membership)
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('User not found')
    }
}

//borrar afiliacion por cedula
export const deleteMembership = async (req, res) => {
    await Membership.findOneAndDelete(req.params.cedula)
    res.json({
        message: 'Membership were deleted successfully'
    })
}