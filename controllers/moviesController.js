const connection = require("../database/connection")

function index(req, res) {
    connection.query(`SELECT * FROM movies`, (err, results) => {
        if (err) return res.status(500).json({ err: err })

        res.json({
            movies: results
        })
    })
}

function show(req, res) {
    const id = req.params.id
    connection.query(`SELECT * FROM movies WHERE id = ?`, [id], (err, results) => {
        if (err) return res.status(500).json({ err: err })
        if (results.length === 0) return res.status(404).json({ err: "Film non trovato" })

        connection.query(`SELECT * FROM reviews WHERE movie_id = ? ORDER BY id DESC`, [id], (err, reviewsResults) => {
            if (err) return res.status(500).json({ err: err })

            const movie = {
                ...results[0],
                reviews: reviewsResults
            }
            res.json(movie)
        })
    })
}

function newReview(req, res) {
    const movie_id = Number(req.params.id)
    const { name, vote, text } = req.body
    const time = new Date()

    const sql = "INSERT INTO `reviews` SET movie_id=?, name=?, vote=?, text=?, created_at=?"

    connection.query(sql, [movie_id, name, vote, text, time], (err, result) => {
        if (err) return res.status(500).json({ error: err })
        return res.status(201).json({ success: true })
    })
}

module.exports = {
    index,
    show,
    newReview
}