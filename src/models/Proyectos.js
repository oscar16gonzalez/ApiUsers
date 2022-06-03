import { Schema, model } from "mongoose";

const proyectSchema = new Schema({
    contrato: {
        type: String,
        required: true
    },

    objeto_contrato: {
        type: String,
        required: true
    },

    contratista: {
        type: String,
        required: true
    },

    nit: {
        type: String,
        required: true
    },

    integrantes: {
        type: Object,
        required: true
    },

    plazo_ejecucion: {
        type: String,
        required: true
    },

    forma_pago: {
        type: String,
        required: true
    },

    anticipo: {
        type: String,
        required: true
    },

    interventoria: {
        type: Object,

    },

    entidad: {
        type: String,
        required: true
    },

    valor_contrato: {
        type: Number,
        required: true
    },

    departamento: {
        type: String,
        required: true
    },

    url_ubicacion: {
        type: String,
        required: true
    },

    municipio: {
        type: String,
        required: true
    },

    lugar_suscripcion: {
        type: String,
        required: true
    },

    fecha_suscripcion: {
        type: String,
        required: true
    },

    usuarios: {
        type: Object
    },

}, {
    versionKey: false,
    timestamps: true
})

export default model('Proyect', proyectSchema)