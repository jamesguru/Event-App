const express = require("express");

const router = express.Router();

const Event = require("../models/Event");

const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndAuthorization,
} = require("./verifyToken");

//CREATE

router.post("/", async (req, res) => {
  const newEvent = Event(req.body);

  try {
    console.log("trying ...");
    const Event = await newEvent.save();
    console.log(Event);

    res.status(200).json(Event);
  } catch (error) {
    console.log(error);

    res.status(500).json(error);
  }
});

//UPDATED

router.put("/:id", async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedEvent);
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE

router.delete("/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);

    res.status(200).json("Event has been deleted!");
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET Event

router.get("/find/:id", async (req, res) => {
  const id = req.params.id;

  try {
    console.log(id);
    console.log("Event");
    const Event = await Event.findById(id);

    console.log(Event);

    res.status(200).json(Event);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET RELATED

router.get("/related/:id", async (req, res) => {
  try {
    const Event = await Event.findById(req.params.id).exec();

    const related = await Event.find({
      _id: { $ne: Event._id },

      brand: Event.brand,
    })
      .limit(50)
      .populate("categories")
      .exec();

    res.status(200).json(related);
  } catch (error) {
    res.status(200).json(error);
  }
});

//GET ALL EventS

router.get("/", async (req, res) => {
  const qNew = req.query.new;

  const qCategory = req.query.category;

  const qSearch = req.query.search;

  const page = req.query.page;

  const limit = req.query.limit;

  try {
    let Events;

    if (qNew) {
      Events = await Event.find().sort({ createdAt: -1 }).limit(5);
    } else if (qCategory) {
      Events = await Event.find({ categories: { $in: [qCategory] } })
        .limit(limit * 1)
        .skip((page - 1) * limit);
    } else if (qSearch) {
      Events = await Event.find({
        $text: {
          $search: qSearch,
          $caseSensitive: false,
          $diacriticSensitive: false,
        },
      })
        .limit(limit * 1)
        .skip((page - 1) * limit);
    } else {
      Events = await Event.find().limit(6);
    }

    res.status(200).json(Events);
  } catch (error) {
    res.status(200).json(error);
  }
});

// RATING

router.put("/ratings/:EventId", async (req, res) => {
  const { star, name, comment, postedBy } = req.body;

  try {
    if (star) {
      const postedRating = await Event.findByIdAndUpdate(
        req.params.EventId,
        { $push: { ratings: { star, name, comment, postedBy } } },
        { new: true }
      );

      res.status(201).json(postedRating);
    } else {
      res.status(401).json("no rating");
    }
  } catch (error) {
    res.status(500).json("something went wrong");
  }
});

module.exports = router;
