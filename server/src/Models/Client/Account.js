const mongoose = require("mongoose");
const accountSchema = mongoose.Schema(
  {
    client:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Client"
    },
    solde: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Account", accountSchema);
