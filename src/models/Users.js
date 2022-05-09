import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cell_phone:{
        type: Number,
        required: true
    },
    direction:{
        type: String,
        required: true
    },
    rol:{
        type: String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})

export default model('Users',userSchema)