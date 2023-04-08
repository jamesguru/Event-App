const mongoose = require("mongoose");

const NewsletterSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },

    status: { type: Number, default: 0 },
  },

  { timestamps: true }
);
NewsletterSchema.index({ "$**": "text" });
module.exports = mongoose.model("Gallery", NewsletterSchema);
