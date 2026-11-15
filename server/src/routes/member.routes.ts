import * as memberController from "../controllers/member.controller.ts";

import { Router } from "express";

const router = Router();

router.get("/:id", memberController.getMemberById);

export default router;
