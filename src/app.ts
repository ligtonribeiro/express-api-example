import express, { Application, Request, Response, NextFunction } from "express";
import { router as userRoutes } from "./routes/user.route";

const app: Application = express();
app.disable("x-power-by");

app.use("/users", userRoutes);
app.use("/version", (req: Request, res: Response, next: NextFunction) => {
  res.json({ version: "1.1.0-main" });
});
app.use("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Express and Jest Example - IT Talent Program" });
});

export default app;
