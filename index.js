import express from "express";
import bodyParser from "body-parser";
import initWebRoutes from "./src/routes/web.js";
import configViewEngine from "./src/config/viewEngine.js";
import dotenv from "dotenv";
import connectDatabase from "./src/config/connectDatabase.js";
dotenv.config();
let PORT = process.env.PORT;
let app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Kết nối cơ sở dữ liệu
(async () => {
  try {
    await connectDatabase(); // Gọi hàm kết nối
    console.log("Database connected successfully!");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Thoát chương trình nếu không kết nối được
  }
})();
configViewEngine(app);
initWebRoutes(app);
app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
