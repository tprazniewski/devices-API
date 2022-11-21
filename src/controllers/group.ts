import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import {
  addToGroup as add,
  get as getGroups,
  remove,
} from "../services.ts/group";

const addToGroup: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());

  const { device, groupId } = req.body;
  const resp = await add({ device, groupId });

  res.status(resp.status).send(resp.obj);
};

const get: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());
  // const groupId: number = parseInt(req.params.groupId as string);
  const groupId: string = req.params.groupId;
  const resp = await getGroups([groupId]);

  res.send(resp).status(200);
};

const deleteFromGroup: RequestHandler = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());

  const { deviceId, groupId } = req.body;
  const resp = await remove({ deviceId, groupId });

  res.status(200).send(resp);
};
export default { addToGroup, get, deleteFromGroup };
