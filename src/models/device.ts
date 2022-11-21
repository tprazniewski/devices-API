const mongoose = require("mongoose");
var AutoIncrement = require("mongoose-sequence")(mongoose);
var uniqueValidator = require("mongoose-unique-validator");
const deviceSchema = mongoose.Schema({
  files: [{ type: String }],
});

export default mongoose.model("Device", deviceSchema);
