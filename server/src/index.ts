import express, { Request, Express, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app: Express = express();
const PORT = 8080;

const prisma = new PrismaClient();

// Todoの一覧を呼び出すapi
app.get("/allTodos", async (req: Request, res: Response) => {
  const allTodos = await prisma.todo.findMany();
  return res.json(allTodos);
});

app.listen(PORT, () => console.log("server is running"));
