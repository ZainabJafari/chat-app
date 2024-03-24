import mongoose from 'mongoose';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log('connect to MongoDB')

    } catch (error) {
        console.log(error.message)
        
    }
}

export default connectToMongoDB