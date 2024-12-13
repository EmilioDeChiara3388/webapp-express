const express = require("express");
const server = express();
const movieRouter = require("./routes/movies.js");
const cors = require('cors');

const HOST = process.env.HOST
const PORT = process.env.PORT

server.use(cors())
server.use(express.json())

server.use("/api/movies", movieRouter)



server.listen(PORT, () => {
    console.log(`Server is listening on port ${HOST}:${PORT}`);
})