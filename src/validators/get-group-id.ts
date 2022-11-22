import { RequestHandler } from "express";

export const getGroupIdValidator: RequestHandler = (req, res, next) => {
  const { groupId } = req.params;
  const isWhiteSpace = /\s/.test(groupId);
  if (groupId.trim().length != 24) {
    return res.status(404).send({ message: "Params field is invalid" });
  }
  if (isWhiteSpace) {
    return res.status(404).send({ message: "Params field have white spaces" });
  }

  next();
};
