import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import db from "./db/mongo-db";
import routes from "./routers";

dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(routes);

mongoose
  .connect(db.mongoUrl, db.mongoOptions)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`App is running on Port:${PORT} and DB is conected `)
    );
  })
  .catch((err: any) => {
    console.log(err);
  });
