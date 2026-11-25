import express from "express";
import authroutes from "./src/routes/auth/auth.register.js"

const app = express();

app.use(express.json());

app.get( "/health", (req,res) => {
    res.json({
        message: "backend is running",
    })
})

app.use("/api/v1", authroutes);

app.listen(5000,()=>{
    console.log("server is started");
})