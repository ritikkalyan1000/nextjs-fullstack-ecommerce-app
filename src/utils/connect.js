import mongoose from "mongoose";

const connecttodb = async()=>{
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("connect to db successfully 🟩")


}

export default connecttodb;

