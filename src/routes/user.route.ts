import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  let users = [
    "Wellington Menezes",
    "Rosimeire Melo",
    "Luanny Maria",
    "Luan Marx",
  ];
  res.status(200).json(users);
});

export { router };
