import mongoose from "mongoose";


const userSchema= new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
        trim: true,
        min:1,
        max:30

    },
    lastname:{
        type: String,
        required: true,
        trim: true,
        min:1,
        max:30

    },
    username:{
        type: String,
        required: true,
        trim: true,
        min:1,
        max:30,
        lowercase: true

    },
    email:{
        type:String,
        required: true,
        trim:true
    },
    password:{
        type: String,
        required: true

    }

});

const user= mongoose.model('user', userSchema);

export default user;