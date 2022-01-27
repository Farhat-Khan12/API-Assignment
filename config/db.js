const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/employees";
const connectDB = async () => {
    try {
        await mongoose.connect(db, { useNewUrlParser: true });
        console.log("MongoDB Connected");
    }
    catch (err) {
        console.log(err.message);
    }
}
module.exports = connectDB;