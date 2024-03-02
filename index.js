import express from "express";
import { APP_NAME, APP_PORT } from "./commons/constants.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(APP_PORT, () => {
  console.log(`${APP_NAME} app listening on port ${APP_PORT}`);
});
