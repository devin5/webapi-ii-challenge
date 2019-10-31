const express = require("express");
const postsRouter = require("./Routes/postsRouter");

const server = express();

server.use(express.json());
server.use("/api/posts", postsRouter);

server.listen(8000, () => console.log("server on port 8000"));
