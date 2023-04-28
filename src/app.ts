import express, { Application, Request, Response, NextFunction } from "express";
import { router as userRoutes } from "./routes/user.route";

const app: Application = express();

app.use("/users", userRoutes);
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Express and Jest Example - IT Talent Program" });
});

export default app;
