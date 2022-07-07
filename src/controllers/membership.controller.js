import Membership from '../models/Membership'
import multer from 'multer'
import { multerConfig } from '../utils/multerConfig'

const upload = multer(multerConfig).single('image')

/*exports.fileUpload = (req, res, next) => {
    upload(req, res, function (error) {
        if (error) {
            res.json({ message: error });
        }
        return next();
    });
}*/

//buscar todas las afiliaciones
export const findAllMembership = async(req, res) => {
    try {
        const membership = await Membership.find()
        res.json(membership)
    } catch (error) {
        res.status(500).send('Memberships not founds')
    }
}

//crear una afiliacion
export const createMembership = async(req, res) => {
    console.log("RESPONSE MEMBERSHIP", req.body);
    try {
        const newMembership = new Membership({
            cedula: req.body.cedula,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            genero: req.body.genero,
            fecha_nacimiento: req.body.fecha_nacimiento,
            direccion: req.body.direccion,
            correo: req.body.correo,
            celular: req.body.celular,
            telefono: req.body.telefono,
            whatsapp: req.body.whatsapp,
            telegram: req.body.telegram,
            fecha_ingreso: req.body.fecha_ingreso,
            examen_ingreso: req.body.examen_ingreso,
            salario: req.body.salario,
            entidad_bancaria: req.body.entidad_bancaria,
            cargo: req.body.cargo,
            numero_cuenta: req.body.cuenta_bancaria,
            eps: req.body.eps,
            arl: req.body.arl,
            fondo_pensiones: req.body.fondo_pensiones,
            cesantias: req.body.cesantias,
            caja_compensacion: req.body.caja_compensacion,
            curso_alturas: req.body.curso_alturas,
            rut: req.body.rut,
            estado: req.body.estado,
            nombre_emergencia: req.body.nombre_emergencia,
            celular_emergencia: req.body.celular_emergencia,
            proyectos: req.body.proyectos
        })
        const membershipSave = await newMembership.save()
        res.json(membershipSave)
    } catch (error) {
        res.status(500).send('error creating membership')
    }
}

//buscar afiliacion por id
/*export const findOneMembership = async (req, res) => {
    const membership = await Membership.findById(req.params.id)
    res.json(membership)
}*/

//Buscar afiliacion por correo de usuario 
export const findOneMembershipEmail = async(req, res) => {
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
export const deleteMembership = async(req, res) => {
    try {
        await Membership.findOneAndDelete(req.params.cedula)
        res.json({
            message: 'Membership were deleted successfully'
        })
    } catch (error) {
        res.status(500).send('Error deleting membership')
    }
}

export const UpdateStateMembership = async(req, res) => {
    const { id } = req.params
    const { estado } = req.body
    const updatedAffiliation = await Membership.findByIdAndUpdate(id, { estado })

    return res.json({
        message: 'Succesfully update',
        updatedAffiliation
    })
}

export const updateAffiliationById = async(req, res) => {
    const { id } = req.params
    const {
        correo,
        rut,
        curso_alturas,
        examen_ingreso,
        eps,
        arl,
        fondo_pensiones,
        cesantias,
        caja_compensacion,
        entidad_bancaria,
        numero_cuenta
    } = req.body

    const updatedAffiliation = await Membership.findByIdAndUpdate(id, {
        correo,
        rut,
        curso_alturas,
        examen_ingreso,
        eps,
        arl,
        fondo_pensiones,
        cesantias,
        caja_compensacion,
        entidad_bancaria,
        numero_cuenta
    })

    return res.json({
        message: 'Succesfully update',
        updatedAffiliation
    })
}