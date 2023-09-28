import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const db = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB database is connected");
    } catch (error) {
        console.log("MongoDB database connection failed : ", error);
    }
};

export default db;
