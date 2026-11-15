import { Router } from "express";
import healthRoutes from "./health.routes.ts";
import memberRoutes from "./member.routes.ts";

const router = Router();

router.use("/", healthRoutes);
router.use("/", memberRoutes);

export default router;
