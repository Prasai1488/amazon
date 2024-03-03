import mongoose from "mongoose";

const userName = "prasaiprithvi42";
const password = encodeURIComponent("prithvi1234");
const databaseName = "amazon";

const dbURL= `mongodb+srv://${userName}:${password}@cluster0.m7crm7k.mongodb.net/${databaseName}?retryWrites=true&w=majority&appName=Cluster0`

 const connectDB = async () => {
    try {
      await mongoose.connect(dbURL);
      console.log(`DB connected successfully`);
    } catch (error) {
      console.log(error.message);
      console.log(`DB Connection error`);
    }
  };

  export default connectDB;
  
