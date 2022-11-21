import GroupModel from "../models/group";
import DeviceModel from "../models/device";

export const addToGroup = async ({
  device,
  groupId,
}: {
  device: any;
  groupId: string;
}) => {
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
};

export const get = async (groupId: string[]) => {
  const groups = await GroupModel.findOne({ _id: groupId });
  if (groups) {
    const devices = await DeviceModel.find({ $in: groups.devices });
    const files = devices?.map((d: any) => d.files)?.flat();
    return Array.from(new Set(files));
  }
  return { message: "ID not found" };
};

export default { addToGroup };
