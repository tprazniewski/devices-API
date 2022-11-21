import GroupModel from "../models/group";
import DeviceModel from "../models/device";

export const addToGroup = async ({
  device,
  groupId,
}: {
  device: any;
  groupId: number;
}) => {
  const deviceRes = await DeviceModel.create(device);
  console.log(deviceRes._id.valueOf());
  const groupRes = await GroupModel.updateOne(
    {
      _id: groupId,
    },
    { $push: { devices: deviceRes._id } },
    { upsert: true }
  );
  const test = await GroupModel.find({ _id: groupRes._id });
};

export const get = async (groupId: string[]) => {
  const groups = await GroupModel.findOne({ _id: groupId });
  if (groups) {
    const devices = await DeviceModel.find({ $in: groups.devices });
    const files = devices?.map((d: any) => d.files)?.flat();
    return Array.from(new Set(files));
  }
  return [];
};

export default { addToGroup };
