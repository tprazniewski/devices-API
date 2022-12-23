const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const groupSchema = mongoose.Schema({
  name: { type: String, index: true, unique: true },
  devices: [{ type: String }],
});

groupSchema.plugin(uniqueValidator);

export default mongoose.model("Group", groupSchema);
