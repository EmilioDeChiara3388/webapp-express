const express = require("express");
const server = express();
const movieRouter = require("./routes/movies.js")

const HOST = process.env.HOST
const PORT = process.env.PORT

server.use("/movies", movieRouter)

server.listen(PORT, () => {
    console.log(`Server is listening on port ${HOST}:${PORT}`);
})