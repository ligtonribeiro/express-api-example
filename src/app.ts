import express, { Application, Request, Response, NextFunction } from "express";
import { router as userRoutes } from "./routes/user.route";
import log from "./utils/logger";
import { register } from "./utils/metrics";

const app: Application = express();
app.disable("x-power-by");

app.use((req, res, next) => {
  log.info(`Request Type: ${req.ip} - ${req.method}: ${req.path}`);
  next();
});

app.use("/users", userRoutes);
app.use("/version", (req: Request, res: Response, next: NextFunction) => {
  res.json({ version: "1.1.0-main" });
});
app.use("/metrics", async (req: Request, res: Response) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

export default app;
