const mongoose = require("mongoose");
import { ObjectId } from "bson";

const groupSchema = mongoose.Schema({
  name: { type: String, index: true, unique: true, required: true },
  devices: [{ type: ObjectId }],
});

export default mongoose.model("Group", groupSchema);
