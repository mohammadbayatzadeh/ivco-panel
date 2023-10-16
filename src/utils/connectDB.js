const { connections, default: mongoose, connect } = require("mongoose");

const connectDB = async () => {
  if (connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  await connect(process.env.MONGO_URI);
  console.log("db connected");
};

export default connectDB;
