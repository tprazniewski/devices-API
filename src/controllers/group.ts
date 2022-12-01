import { RequestHandler } from "express";
import { validationResult } from "express-validator";
import {
  addToGroup as add,
  get as getGroups,
  remove,
} from "../services.ts/group";

const addToGroup: RequestHandler = async (req, res) => {
  const { device, groupId, name } = req.body;
  try {
    const resp = await add({ device, groupId, name });
    res.status(201).send(resp.obj);
  } catch (error) {
    res.status(502).send({ messagE: " Something Went Wrong druring adding" });
  }
};

const get: RequestHandler = async (req, res) => {
  // const groupId: number = parseInt(req.params.groupId as string);
  const groupId: string = req.params.groupId;
  try {
    const resp = await getGroups([groupId]);

    res.send({ resp });
  } catch (error) {
    res.status(502).send({ messagE: " Something Went Wrong during getting" });
  }
};

const deleteFromGroup: RequestHandler = async (req, res) => {
  const { deviceId, groupId, name } = req.body;

  try {
    const resp = await remove({ deviceId, groupId, name });
    return res.status(resp.status).send(resp.obj);
  } catch (error) {
    res.status(502).send({ messagE: " Something Went Wrong during deletion" });
  }
};
export default { addToGroup, get, deleteFromGroup };
