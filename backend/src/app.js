import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors());
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import userRoutes from "./routes/user.routes.js";
app.use("/api/entries", userRoutes);

    // app.use((err, req, res, next) => {
    //     console.error("Error middleware caught:", err);
        
    //     const statusCode = err.statusCode || 500;
    //     const message = err.message || "Internal Server Error";
        
    //     res.status(statusCode).json({
    //         success: false,
    //         statusCode,
    //         message,
    //         stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    //     });
    // });

export default app;