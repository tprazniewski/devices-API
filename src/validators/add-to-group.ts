import {
  body,
  check,
  ValidationChain,
  query,
  oneOf,
  param,
} from "express-validator";

export const if_files_exist: ValidationChain[] = [
  body("device.files")
    .not()
    .isEmpty()
    .withMessage("The Device.files field is mandatory!"),
];
export const if_name_or_groupId_exist = oneOf([
  check("groupId")
    .exists()
    .withMessage("groupId is required")
    .trim()
    .isString()
    .withMessage("Only Decimals allowed"),
  check("device.name").exists().withMessage("name is required"),
]);

export const is_groupId: ValidationChain[] = [
  param("groupId").trim().isString().withMessage("Only Strings allowed"),
];
