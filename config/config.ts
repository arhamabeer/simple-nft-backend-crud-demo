import mongoose from "mongoose";
import router from "../router/main_router";
import { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const db_uri = process.env.MDB_URI || "";
export default function Config(server: Express) {
  mongoose
    .connect(db_uri, { dbName: "DemoApp" })
    .then(() => console.log("db connected..."))
    .catch((e) => console.log("db not connected...", e));

  server.use("/", router);
}
