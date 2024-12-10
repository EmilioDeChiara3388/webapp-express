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

server.get("/:id", (req, res) => {
    const id = req.params.id
    connection.query(`SELECT * FROM movies WHERE id = ?`, [id], (err, results) => {
        if (err) return res.status(500).json({ err: err })
        if (results.length === 0) return res.status(404).json({ err: "Film non trovato" })

        connection.query(`SELECT * FROM reviews WHERE movie_id = ?`, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ err: err })

            const movie = {
                ...results[0],
                reviews: reviewsResults
            }
            res.json(movie)
        })
    })
})

server.listen(PORT, () => {
    console.log(`Server is listening on port ${HOST}:${PORT}`);
})