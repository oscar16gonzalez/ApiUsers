import { Schema, model } from 'mongoose';

const membershipSchema = new Schema({
    //-------DATOS BASICOS--------
    cedula: {
        type: Number,
        required: true,
        unique: true
    },

    nombre: {
        type: String,
        required: true
    },

    apellido: {
        type: String,
        required: true
    },

    genero: {
        type: String,
        required: true
    },

    fecha_nacimiento: {
        type: Date,
        required: true
    },

    //-------DATOS DE NOTIFICACION--------
    direccion: {
        type: String,
        required: true
    },

    correo: {
        type: String,
        required: true,
        unique: true
    },

    celular: {
        type: Number,
        required: true,
    },

    telefono: {
        type: Number,
        required: true,
    },

    nombre_emergencia: {
        type: String,
        required: true
    },

    celular_emergencia: {
        type: Number,
        required: true
    },

    //---------DATOS TRABAJADOR
    fecha_ingreso: {
        type: Date,
        required: true

    },

    examen_ingreso: {
        type: String,
        required: true
    },

    salario: {
        type: Number,
        required: true
    },

    cargo: {
        type: String,
        required: true
    },

    curso_alturas: {
        type: String,
        required: true
    },

    rut: {
        type: String,
        required: true
    },

    //--------DATOS AFILIACION 
    eps: {
        type: String,

    },

    arl: {
        type: String,

    },

    fondo_pensiones: {
        type: String,

    },

    caja_compensacion: {
        type: String,

    },

    //------DATOS BANCARIOS
    estado: {
        type: String,

    },

    numero_cuenta: {
        type: Number
    },

    entidad_bancaria: {
        type: String
    },

}, {
    versionKey: false,
    timestamps: true
})

export default model('Membership', membershipSchema)