import { RequestHandler } from "express";

const addToGroup: RequestHandler = async (req, res) => {
  const { device, groupId } = req.body;
  res.send({ messasge: "added" }).status(201);
};

const get: RequestHandler = async (req, res) => {
  const { groupIds } = req.params;
  res.send({ message: "get aLL" }).status(200);
};
export default { addToGroup, get };
