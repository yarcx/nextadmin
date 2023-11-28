import mongoose from "mongoose";

export const connectToDB = async function () {
  const connection = {};
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGOURI);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log("an error occurred", error);
    throw new Error(error);
  }
};
