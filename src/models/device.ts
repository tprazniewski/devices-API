const mongoose = require("mongoose");

const deviceSchema = mongoose.Schema({
  id: { type: Number },
  files: [{ type: String }],
});

export default mongoose.model("Device", deviceSchema);
