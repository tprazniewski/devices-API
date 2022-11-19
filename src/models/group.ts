const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  name: { type: String, index: true, unique: true, required: true },
  devices: [{ type: Number }],
  id: { type: Number, required: true },
});

export default mongoose.model("Group", groupSchema);
