import todoController from "./controller/todoController";
import express from "express";

const app = express();

app.use("/todo", todoController);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
