const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
// const Bike = require("../../models/Bike");
const Fashion = require("../../models/Fashion");
const User = require("../../models/User");
// const { getFashion } = require("../../client/src/actions/fashion");

// NOTE  Create a fashion
// @route   Get api/fashion
// @desc    Create a fashion
// @access  Private
router.post(
  "/",
  [
    auth,
    [
      check("text", "text is required")
        .not()
        .isEmpty(),
      check("phone", "Phone is required")
        .not()
        .isEmpty(),
      check("address", "Address is required")
        .not()
        .isEmpty(),
      check("description", "Description is required")
        .not()
        .isEmpty(),
      check("brand", "Brand is required")
        .not()
        .isEmpty(),
      check("tinhtrang", "Tinh trang is required")
        .not()
        .isEmpty(),
        check("date1", "Ngay dang is required")
        .not()
        .isEmpty(),
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const newFashion = new Fashion({
        text: req.body.text,
        brand: req.body.brand,
        tinhtrang: req.body.tinhtrang,
        img: req.body.img,
        price: req.body.price,
        costEdit: req.body.costEdit,
        cost: req.body.cost,
        date1: req.body.date1,
        phone: req.body.phone,
        address: req.body.address,
        description: req.body.description,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });
      const fashion = await newFashion.save();
      res.json(fashion);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

//NOTE  GET all bike
// @route   Get api/bikes
// @desc    Get all bike
// @access  Private
router.get("/", async (req, res) => {
  try {
    const fashions = await Fashion.find().sort({ date: -1 });
    res.json(fashions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//NOTE  get fashion by id
// @route   Get api/fashion/:id
// @desc    Get all fashion by id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const fashion = await Fashion.findById(req.params.id);
    if (!fashion) {
      return res.status(404).json({ msg: "Fashion not found" });
    }
    res.json(fashion);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "BIke not found" });
    }

    res.status(500).send("Server Error");
  }
});

// Delete fashion by id
// @route   DELETE api/bikes/:id
// @desc    Delete a bike
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const fashion = await Fashion.findById(req.params.id);
    if (!fashion) {
      return res.status(404).json({ msg: "Fashion not found" });
    }
    // Check user
    if (fashion.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }
    await fashion.remove();
    res.json({ msg: "Fashion Remove" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Fashion not found" });
    }

    res.status(500).send("Server Error");
  }
});
// NOTE  like a bike
// @route   PUT api/bikes/like/:id
// @desc    Like a bike
// @access  Private
router.put("/like/:id", auth, async (req, res) => {
  try {
    const fashion = await Fashion.findById(req.params.id);
    //Check if the post has already liked
    if (
      fashion.likes.filter(like => like.user.toString() == req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: "Bike already like" });
    }
    fashion.likes.unshift({ user: req.user.id });
    await fashion.save();

    res.json(fashion.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//NOTE  Dislike a bike
// @route   POST api/bikes/unlike/:id
// @desc    UnLike a bike
// @access  Private
router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const fashion = await Fashion.findById(req.params.id);
    //Check if the post has already liked
    if (
      fashion.likes.filter(like => like.user.toString() == req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: "Bike has not yet been liked" });
    }
    //Get remove index
    const removeIndex = fashion.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    fashion.likes.splice(removeIndex, 1);
    await fashion.save();

    res.json(fashion.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// NOTE  Create a comment
// @route    POST api/bikes/comment/:id
// @desc     Comment on a bike
// @access   Private
router.post(
  "/comment/:id",
  [
    auth,
    [
      check("text", "Text is required")
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select("-password");
      const fashion = await Fashion.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };
      fashion.comment.unshift(newComment);
      await fashion.save();

      res.json(fashion.comment);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route    DELETE api/bikes/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete("/comment/:id/:comment_id", auth, async (req, res) => {
  try {
    const fashion = await Fashion.findById(req.params.id);

    // Pull out comment
    const comment = fashion.comment.find(
      comment => comment.id === req.params.comment_id
    );

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: "Comment does not exist" });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "User not authorized" });
    }

    // Get remove index
    const removeIndex = fashion.comment
      .map(comment => comment.id)
      .indexOf(req.params.comment_id);

    fashion.comment.splice(removeIndex, 1);

    await fashion.save();

    res.json(fashion.comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
