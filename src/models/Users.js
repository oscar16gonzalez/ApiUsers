import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    correo:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    celular:{
        type: Number,
        required: true
    },
    direccion:{
        type: String,
        required: true
    },
    roles:[{
        ref: 'Role',
        type: Schema.Types.ObjectId
        
    }]
},{
    versionKey: false,
    timestamps: true
})

export default model('Users',userSchema)