import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  let users = [
    { id: 1, nome: "Wellington Menezes" },
    { id: 2, nome: "Rosimeire Menezes" },
    { id: 3, nome: "Luanny Menezes" },
    { id: 4, nome: "Luan Menezes" },
  ];
  res.status(200).json(users);
});

export { router };
