import { Router } from "express";

import groupRoutes from "./group";

const router = Router();

router.use("/api", groupRoutes);

export default router;
