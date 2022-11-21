import { validationResult } from "express-validator";
import { Request, Response } from "express";
export const BodyErrorValidation = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());
};
