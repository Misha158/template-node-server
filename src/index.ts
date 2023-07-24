import express, { Request, Response } from "express";
import postRouter from "./routers/postRouter";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Привет, MISHA это простой сервер на Node.js с использованием Express и TypeScript!");
});

// Используем маршрутизатор для постов
app.use("/posts", postRouter);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
