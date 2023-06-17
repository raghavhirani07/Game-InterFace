import mongoose from 'mongoose';

const connectDb = async (DATABASE_URL) => {
    try{
        const DB_OPTIONS = {
            dbName : 'games'
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log('Connection SuccessFully  ');
    }
    catch(error){
        console.log(error);
    }
}
export default connectDb