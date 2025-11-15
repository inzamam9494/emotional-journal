import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    try {
      app.on("error", (error) => {
        console.log("Listening error:", error);
        throw error;
      });
      app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
      });
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  })
  .catch((error) => {
    console.log("MONGODB connection failed !!", error);
  });
