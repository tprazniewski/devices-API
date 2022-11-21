import { RequestHandler } from "express";

export const deleteFromGroupValidator: RequestHandler = (req, res, next) => {
  const { groupId, deviceId } = req.body;

  if (!groupId && !deviceId) {
    return res.status(404).send({ message: "groupId and deviceId is empty  " });
  }
  if (typeof groupId !== "string" || typeof deviceId !== "string") {
    return res
      .status(404)
      .send({ message: "groupId && deviceId must be a type of a string" });
  }
  if (Object.keys(req.body).length > 2) {
    return res.status(404).send({ message: "You Provided to many data " });
  }
  if (!groupId) {
    return res.status(404).send({ message: "groupId field is empty " });
  }
  if (groupId.length != 24) {
    console.log("aha", groupId.length);
    return res.status(404).send({ message: "groupId field is invalid" });
  }
  if (!deviceId) {
    return res.status(404).send({ message: "deviceId field is empty " });
  }
  if (deviceId.length != 24) {
    console.log("aha", groupId.length);
    return res.status(404).send({ message: "groupId field is invalid" });
  }
  next();
};
