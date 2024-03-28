import jsonServer from "json-server";
import express from "express";

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// add delay to all requests to simulate network latency
server.use((req, res, next) => {
  setTimeout(next, 1000);
});

server.use(middlewares);
server.use(router);

const app = express();
app.use(server);

app.get("/ping", (req, res) => {
  res.send("pong");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server is running on...", PORT);
});

export default app;
