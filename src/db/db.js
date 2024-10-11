import mongoose from "mongoose"
import { DATABASE_NAME } from "../constant.js"



const connectionToDataBase  = async() =>{
    try {
        const connect = await mongoose.connect(`${process.env.DATA_BASE_URL}/${DATABASE_NAME}`)
       
    } catch (error) {
        console.error(error.message)
    }
}
export {connectionToDataBase}