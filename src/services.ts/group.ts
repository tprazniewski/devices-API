import GroupModel from "../models/group";
import DeviceModel from "../models/device";
import { IDevice } from "../interfaces/IDevice";
import { IDeviceModel } from "../interfaces/IDeviceModel";

export const addToGroup = async ({
  device,
  groupId,
}: {
  device: IDevice;
  groupId: string;
}) => {
  try {
    const deviceRes = await DeviceModel.create(device);

    const isGroup = await GroupModel.findById(groupId);

    if (!isGroup) {
      const groupRes = await GroupModel.create({ devices: deviceRes._id });
      return { obj: groupRes, status: 201 };
    } else {
      // findOneAndUpadte doesn't consider required: true  in the model ;'/
      const groupRes = await GroupModel.findOneAndUpdate(
        {
          _id: groupId,
        },
        { $push: { devices: deviceRes._id } },
        { upsert: true, new: true }
      );
      return { obj: groupRes, status: 204 };
    }
  } catch (error) {
    return { obj: { mesage: " Error during DB operations" }, status: 500 };
  }
};

export const get = async (groupId: string[]) => {
  try {
    const groups = await GroupModel.findOne({ _id: groupId });
    if (groups) {
      const devices = await DeviceModel.find({ $in: groups.devices });
      const files = devices?.map((d: IDeviceModel) => d.files)?.flat();
      return Array.from(new Set(files));
    }
    return { obj: { message: "ID not found" }, status: 400 };
  } catch (error) {
    return { obj: { mesage: " Error during DB operations" }, status: 500 };
  }
};

export const remove = async ({
  deviceId,
  groupId,
}: {
  deviceId: string;
  groupId: string;
}) => {
  try {
    const isGroup = await GroupModel.findById(groupId);
    if (!isGroup) {
      return { obj: { message: "Group wasn't found" }, status: 202 };
    } else {
      // findOneAndUpadte doesn't consider required: true  in the model ;'/
      const groupRes = await GroupModel.findOneAndUpdate(
        {
          _id: groupId,
        },
        { $pull: { devices: deviceId } },
        { upsert: true, new: true }
      );
      if (groupRes.devices.length === 0) {
        await GroupModel.deleteOne({ _id: groupId });
      }
      return { obj: groupRes, status: 201 };
    }
  } catch (error) {
    return { obj: { mesage: " Error during DB operations" }, status: 500 };
  }
};

export default { addToGroup };
