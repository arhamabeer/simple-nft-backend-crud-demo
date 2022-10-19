import express from "express";
import cors from "cors";
import Config from "./config/config";

const server = express();
const port = 5000;

server.use(express.json());
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(cors());

Config(server);

server.listen(port, () => {
  console.log("Server is running...");
});
