import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
},
    { timestamps: true }
)

export default mongoose.models.UserData||mongoose.model("UserData",UserSchema);
