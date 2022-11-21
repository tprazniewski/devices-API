import { Router } from "express";
import { groupController } from "../controllers";
import {
  if_files_exist,
  if_name_or_groupId_exist,
  is_groupId,
} from "../validators/add-to-group";
const router = Router();

router.post(
  "/add-to-group",
  if_files_exist,
  if_name_or_groupId_exist,
  groupController.addToGroup
);
router.get("/get/:groupId", is_groupId, groupController.get);
export default router;
