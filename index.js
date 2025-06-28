const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { text } = require("stream/consumers");
const PORT = process.env.PORT||8080;
const MONGOURL = process.env.MONGOURL;

app.use(express.json());
mongoose.connect(MONGOURL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});
const userSchema=new mongoose.Schema({
    username: String,
    password: String,
});
const User = mongoose.model("User" ,userSchema);
const taskSchema = new mongoose.Schema({
    text: String,
    status: String,
    priority: String,
    userId: mongoose.Schema.Types.ObjectId,
});
const Task = mongoose.model("Task", taskSchema);

app.post("/register" ,async(req,res)=>{
    const {username,password} =req.body;
    const hashed=await bcrypt(password,10);
})

app.listen(PORT, () => console.log("Server is running"))