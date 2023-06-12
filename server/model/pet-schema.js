import mongoose from "mongoose";

const petSchema= new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique:true

    },
    url: String,
    detailUrl: String,
    title: Object,
    price: Number, 
    size: Object,
    description: String,
    Group: String,
    keys: String,
    Lifespan: String,
    tagline: String
});

const pet= mongoose.model('pet',petSchema);

export default pet;