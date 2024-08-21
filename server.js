const express = require("express");
const http = require("http");


const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.status(200).json({
        status : true , 
        message : "Server is live"
    })
});

app.all("*", (req, res) =>{
    res.status(404).json({
        status : false ,
        message : "Page not found !"
    })
})

const server = http.createServer(app)
const PORT = process.env.PORT || 9090;

server.listen(PORT, async() => {
    console.log(`Server running on port ${PORT}`);
})