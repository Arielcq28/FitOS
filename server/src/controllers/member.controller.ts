import type { NextFunction, Request, Response } from "express";
import * as memberService from "../services/member.service.ts";

export function getMemberById(
  req: Request,
  res: Response,
  next: NextFunction,
): void {
  try {
    const { id } = req.params;
    const member = memberService.findMemberById(id);

    // QUIRK (preserved): 200 with an error body rather than a 404.
    res.status(200).json(member ?? { error: "Member not found" });
  } catch (error) {
    next(error);
  }
}
