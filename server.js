const express = require("express")

const app = express()

app.get("/",(req,res)=>{

    res.send("Welcome to techparts")
})

app.listen(4000,()=>console.log("app is listening on 3000"))