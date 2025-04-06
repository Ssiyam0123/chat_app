import mongoose from "mongoose"

export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(`mongodb+srv://admin6t9:QnuInBwkNKVi28BY@cluster0.kgw4w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log(`MongoDB Connecteed : ${conn.connection.host}`)
    } catch (error) {
        console.log("mongodb connection error")
    }
}