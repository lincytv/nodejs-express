const express = require("express");
const http = require("http");
const fs = require("fs");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3301
const k8si = require("./core/getnodestatus")
app.get("/",(req,res)=>{
    fs.readFile(path.join(__dirname,"public", "index.html"), "utf8",(err, data)=>{
        if (err) throw err;
        console.log(req.url);
        res.write(data);
    });

});

app.get("/nodes", (req,res)=>{
    res.send("nodes");
});

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})