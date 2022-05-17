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

    interventoria: {
        type: String,
        required: true
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

    municipio: {
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