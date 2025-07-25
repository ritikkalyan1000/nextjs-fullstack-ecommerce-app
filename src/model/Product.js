import mongoose from "mongoose";

const { Schema } = mongoose;

const ProductSchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
},
    { timestamps: true }
)

export default mongoose.models.ProductData || mongoose.model("ProductData", ProductSchema);
