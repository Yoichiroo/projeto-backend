import express from "express";

const app = express();
app.listen(3000, ()=>{
    console.log("ta on o server paizao");
});

app.get("/api", (req, res) => {
    res.status(200).send("faaaala mulekos e molekas!!!");
});

