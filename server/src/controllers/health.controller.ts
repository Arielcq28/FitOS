import type { Request, Response } from "express";

/** GET /health — liveness probe. */
export function getHealth(_req: Request, res: Response): void {
  res.status(200).send("Server is healthy!");
}

/** GET / — root greeting. */
export function getRoot(_req: Request, res: Response): void {
  res.status(200).send("Hello from Server A!");
}
