const mongoose = require("mongoose");

const EventSchema = mongoose.Schema(
  {
    title: { type: String },

    desc: { type: String, required: true },

    img: { type: String, required: true },
    img1: { type: String },
    img2: { type: String },
    img3: { type: String },
    img4: { type: String },

    video: { type: String },

    duration: { type: String },
    originalPrice: { type: Number },
     eventtype: { type: String },
    groupsize: { type: Number },
    schedule: { type: Array },
    date: { type: string },
    categories: { type: Array },

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

EventSchema.index({ "$**": "text" });

module.exports = mongoose.model("Event", EventSchema);
