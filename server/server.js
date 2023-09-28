import express from "express";
import dotenv from "dotenv";
import db from "./config/mongoose.js";
import userRoute from "./routes/userRoute.js";
import adminRoute from "./routes/adminRoute.js";
import doctorRoute from "./routes/doctorsRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/doctor", doctorRoute);

const port = process.env.PORT || 5000;
app.get("/", (req, res) => {
    res.send("Working");
});
app.listen(port, () => {
    db();
    console.log("server is running at", port);
});
