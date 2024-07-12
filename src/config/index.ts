import path from "path"
import dotenv from 'dotenv'

//joining '.env file'
dotenv.config({path: path.join(process.cwd(), '.env')})


export const config = {
    port: process.env.PORT,
    sort_round: process.env.SALT_ROUND,
    jwt_secret: process.env.JWT_SECRET,
    expires_in: process.env.EXPIRES_IN
}