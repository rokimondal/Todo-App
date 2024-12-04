import mongoose from 'mongoose'
const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected to MongoDB.");
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};
export default connectDB; // Ensure this is exported as default