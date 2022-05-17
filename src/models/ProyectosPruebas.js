import { Schema, model } from "mongoose";

const proyectPruebasSchema = new Schema({
    tipo_persona: {
        type: String,
        required: true
    },

    //Persona juridica
    nit: {
        type: Number,
        //required: true
    },
    representante_legal: {
        type: String,
        //required: true
    },
    cedula_repre: {
        type: Number,
        //required: true

    },

    //Perona natural

    nombre: {
        type: String,
        //required: true
    },
    cedula: {
        type: Number,
        //required: true

    },

    usuarios: {
        type: Object
    },



}, {
    timestamps: true,
    versionKey: false
})

export default model('ProyectsPrueba', proyectPruebasSchema)