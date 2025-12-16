// config/db.js
import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Use process.env directly since dotenv is loaded in server.js
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;