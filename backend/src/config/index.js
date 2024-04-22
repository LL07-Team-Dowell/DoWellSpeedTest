import dotenv from 'dotenv';

dotenv.config()

const config = {
    PORT : process.env.PORT,
    API_KEY : process.env.API_KEY,
    DATABASE : process.env.DATABASE,
    COLLECTION : process.env.COLLECTIONNAME,
}

console.log(config.API_KEY);

export default config