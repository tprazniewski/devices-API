import { Router } from "express";
import { groupController } from "../controllers";

const router = Router();

router.post("/add-to-group", groupController.addToGroup);
router.get("/get/:groupId", groupController.get);
export default router;
