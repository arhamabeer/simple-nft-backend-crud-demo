import mongoose from "mongoose";
import router from "./router/main_router";
import express from "express";
import cors from "cors";

const server = express();
const port = 5000;
const db_uri =
  "mongodb+srv://arham:arham@nodejs.x48o2hy.mongodb.net/?retryWrites=true&w=majority";

server.use(express.json());
server.use(express.urlencoded({ extended: true, limit: "50mb" }));
server.use(cors());

mongoose
  .connect(db_uri, { dbName: "DemoApp" })
  .then(() => console.log("db connected..."))
  .catch((e) => console.log("db not connected...", e));

server.use("/", router);

server.listen(port, () => {
  console.log("Server is running...");
});
