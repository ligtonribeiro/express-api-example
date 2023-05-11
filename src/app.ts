import express, { Application, Request, Response, NextFunction } from "express";
import { router as userRoutes } from "./routes/user.route";

const app: Application = express();
app.disable("x-power-by");

app.use("/users", userRoutes);
app.use("/version", (req: Request, res: Response, next: NextFunction) => {
  res.json({ version: "1.0.1-release" });
});

export default app;
