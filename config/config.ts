import mongoose from "mongoose";
import router from "../router/main_router";
import { Express } from "express";
const db_uri =
  "mongodb+srv://arham:arham@nodejs.x48o2hy.mongodb.net/?retryWrites=true&w=majority";

export default function Config(server: Express) {
  mongoose
    .connect(db_uri, { dbName: "DemoApp" })
    .then(() => console.log("db connected..."))
    .catch((e) => console.log("db not connected...", e));

  server.use("/", router);
}
