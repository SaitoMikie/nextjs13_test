import express, { Request, Express, Response } from "express";

const app: Express = express();
const PORT = 8080;

// Todoの一覧を呼び出すapi
app.get("/allTodos", (req: Request, res: Response) => {
  return res.send("Todos");
});

app.listen(PORT, () => console.log("server is running"));
