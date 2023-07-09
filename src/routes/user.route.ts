import { Router, Request, Response } from "express";
import { sleep } from "../utils/sleep";
import {
  request_total_counter,
  request_time_histogram,
  request_time_summary,
  register,
} from "../utils/metrics";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  let users = [
    { id: 1, nome: "Wellington Menezes" },
    { id: 2, nome: "Rosimeire Menezes" },
    { id: 3, nome: "Luanny Menezes" },
    { id: 4, nome: "Luan Menezes" },
  ];

  const sucess = req.query.sucess == null || req.query.sucess === "true";
  const statusCode = sucess ? 200 : 500;
  request_total_counter.labels({ method: "GET", statusCode: statusCode }).inc();

  const initialTime = Date.now();
  await sleep(100 * Math.random());
  const durationTime = Date.now() - initialTime;
  request_time_histogram.observe(durationTime);
  request_time_summary.observe(durationTime);

  res.status(statusCode).json({ sucess: sucess, data: users });
});

export { router };
