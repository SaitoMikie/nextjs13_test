import express, { Request, Express, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app: Express = express();
const PORT = 8080;

app.use(express.json());
const prisma = new PrismaClient();

// Todoの一覧を呼び出すapi
app.get("/allTodos", async (req: Request, res: Response) => {
  try {
    const allTodos = await prisma.todo.findMany();
    return res.json(allTodos);
  } catch (error) {
    console.error("Error get Todos:");
    return error;
  }
});

// Todoを追加する
app.post("/createTodo", async (req: Request, res: Response) => {
  const { title, details, isCompleted } = req.body;

  try {
    const createTodo = await prisma.todo.create({
      data: {
        title,
        details,
        isCompleted,
      },
    });
    return res.json(createTodo);
  } catch (error) {
    console.error("Error creating Todo:");
    return error;
  }
});

app.listen(PORT, () => console.log("server is running"));
