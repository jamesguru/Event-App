const mongoose = require("mongoose");

const ActivitySchema = mongoose.Schema(
  {
    title: { type: String },

    desc: { type: String, required: true },

    video: { type: String },
    img: { type: String, required: true },
    duration: { type: String },

    originalPrice: { type: Number },
    pricing: { type: Array },

    tourtype: { type: String },
    groupsize: { type: Number },

    tourguide: { type: Number },

    overview: { type: String },

    active: { type: Boolean, default: true },

    ratings: [
      {
        star: Number,

        name: { type: String },

        comment: { type: String },

        postedBy: { type: String },
      },
    ],
  },

  { timestamps: true }
);

ActivitySchema.index({ "$**": "text" });

module.exports = mongoose.model("Activity", ActivitySchema);