import { ObjectId } from "bson";

export interface IDeviceModel {
  _id: ObjectId;
  files: string[];
  __v: Number;
}
