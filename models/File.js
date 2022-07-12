const mongoose = require("mongoose");

const File = new mongoose.Schema({
  path: { typr: String, required: true },
  originalName: { type: String, required: true },
  password: String,
  downloadCount: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("File", File);
