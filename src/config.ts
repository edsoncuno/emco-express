import dotenv from 'dotenv'
dotenv.config();

export default {
    EMCO_SERVER_PORT: process.env.EMCO_SERVER_PORT,
    EMCO_CONNECTION_STRING_MONGOOSE: process.env.EMCO_CONNECTION_STRING_MONGOOSE,
}