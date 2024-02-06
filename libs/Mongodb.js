
import mongoose from 'mongoose';

export default async function MongoDb() {
    try {
        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URL);
            console.log("Connected");
        } else {
            console.log("Already connected");
        }
    } catch (error) {
        console.log(error);
    }
}
