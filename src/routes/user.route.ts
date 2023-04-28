import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  let users = ["Rosimeire", "Luanny", "Luan"];
  res.status(200).json(users);
});

export { router };
