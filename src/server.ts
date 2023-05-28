import mongoose from "mongoose";
import config from "./config";
import app from './app';


async function Main() {
    try {
        await mongoose.connect(config.database_url as string)
        console.log('Databse connected')
        app.listen(config.port, () => {
            console.log(`University management system listening on port ${config.port}`)
        })

    }
    catch (err) {
        console.log('Connection Failed')
    }
}




Main();