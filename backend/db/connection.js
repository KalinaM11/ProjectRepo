import {config as dotenvConfig} from "dotenv";
import mongoose from 'mongoose'

// reads dot evn files process it and returns it as an object
export default class Connectioni {
    static async open(db) {
        dotenvConfig();

        const {MONG_USERNAME, MONGO_PASSWORD, MONG_CLUSTER} = process.env
        const DATABASE_URL = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.xtdufxk.mongodb.net/?retryWrites=true&w=majority`;
   
        mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnified: true,
            maxPoolSize: 50,
            socketTimeout: 2500,
            dbName: db

        });

        return mongoose.connection;
    }
    
}