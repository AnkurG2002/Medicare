import express from "express";
import dotenv from "dotenv";
import db from "./config/mongoose.js";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";
import doctorRoute from "./routes/doctorsRoute.js";

import path from "path";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client/build/index.html"));
    });
}

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Working");
});
app.listen(port, () => {
    db();
    console.log("server is running at", port);
});
