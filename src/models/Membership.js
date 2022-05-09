import {Schema, model} from 'mongoose';

const membershipSchema = new Schema({
    cedula:{
        type: Number,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    genero:{
        type: String,
        required: true
    },
    fecha_nacimiento:{
        type: String,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true
    },
    celular:{
        type: Number,
        required: true,
    },
    telefono:{
        type: Number,
        required: true,
    },
    fecha_ingreso:{
        type: String,
        required: true
    }, 
    examen_ingreso:{
        type: String,
        required: true
    },
    salario:{
        type: Number
        
    },
    entidad_bancaria:{
        type: String
    },
    cargo:{
        type: String,

    },
    cuenta_bancaria:{
        type: Number
    },
    eps:{
        type: String,
        required: true
    },
    arl:{
        type: String,
        required: true
    },
    fondo_pensiones:{
        type: String,
        required: true
    },
    caja_compensacion:{
        type: String,
        required: true
    },
    contratista:{
        type: String,
        required: true
    },
    contrato:{
        type: String,
        required: true
    },
    departamento:{
        type: String,
        required: true
    },
    municipio:{
        type: String,
        required: true
    },
    curso_alturas:{
        type: String,
        required: true
    },
    rut:{
        type: String,
        required: true
    },
    estado:{
        type: String,
        required: true
    },
    nombre_emergencia:{
        type: String,
        required: true
    },
    celular_emergencia:{
        type: Number,
        required: true
    },

},{
    versionKey: false,
    timestamps: true
})

export default model('Membership', membershipSchema )