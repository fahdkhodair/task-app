import mongoose from 'mongoose'

export async function dbConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("database connected");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
