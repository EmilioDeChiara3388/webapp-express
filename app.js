const express = require("express");
const server = express();
const connection = require("./database/connection")

const HOST = process.env.HOST
const PORT = process.env.PORT

server.get("/", (req, res) => {
    connection.query(`SELECT * FROM movies`, (err, results) => {
        if (err) return res.status(500).json({ err: err })
        res.json({
            movies: results
        })
    })
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${HOST}:${PORT}`);
})