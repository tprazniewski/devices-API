import { RequestHandler } from "express";

export const addToGroupValidator: RequestHandler = (req, res, next) => {
  const { groupId, device, name } = req.body;

  if (!name && !groupId) {
    return res.status(404).send({ message: "Name and GroupId are empty " });
  }

  if (!device) {
    return res.status(404).send({ message: " device is empty  " });
  }

  if (!device.files) {
    return res.send({ message: "files field is not included in device" });
  }

  if (!(device.files instanceof Array)) {
    return res.send({
      message: "files is not an instance of Array ",
    });
  }

  if (device.files.length === 0) {
    return res.send({ message: "files field is empty" });
  }

  if (!groupId) {
    return res.status(404).send({ message: "groupId  is empty  " });
  }
  if (typeof groupId !== "string") {
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
  next();
};
