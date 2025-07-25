import mongoose from "mongoose";

const { Schema } = mongoose;

const CartSchema = new Schema({
    
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserData",
        required:true,
    },
    productid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductData",
        required:true,
    }
},
    { timestamps: true }
)

export default mongoose.models.CartData || mongoose.model("CartData", CartSchema);



// title: {
//         type: String,
//         required: true,
        
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: Number,
//         required: true
//     },

// we fetch by finding user first and then .populate the productid .populate(productId)   XXXXX.productId.title ... 