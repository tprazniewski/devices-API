import { Router } from "express";
import { groupController } from "../controllers";

import { deleteFromGroupValidator } from "../validators/delete-from-group";
import { addToGroupValidator } from "../validators/add-to-group";
import { getGroupIdValidator } from "../validators/get-group-id";
const router = Router();

router.post("/add-to-group", addToGroupValidator, groupController.addToGroup);
router.delete(
  "/delete-from-group",
  deleteFromGroupValidator,
  groupController.deleteFromGroup
);
router.get("/get/:groupId/", getGroupIdValidator, groupController.get);
export default router;
