import mongoose from "mongoose";
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("kết nối thành công tới MongoDB");
  } catch (error) {
    console.error("Lỗi khi kết nối tới MongoDB", error.message);
    process.exit(1);
  }
};
export default connectDatabase;
