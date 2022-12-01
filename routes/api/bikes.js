const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const Bike = require("../../models/Bike");
const User = require("../../models/User");

// NOTE  Create a bike
// @route   Get api/bikes
// @desc    Create a bike
// @access  Private
// const updateStatus = async (req, res) => {
//   const bike = Bike.findById(req.params.id);
//   try {
//     if (id) {
//       const response = await updateStatus(id, data)
//       if (response)
//       return res.json(response)

//     } else return res.json({
//       message: e,
//       status: "err"
//     })
//   } catch (e) {
//     return res.json({
//       message: e,
//       status: "err"
//     })

//   }
// }

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
      // check("date1", "Ngay dang is required")
      //   .not()
      //   .isEmpty(),
      // check("costEdit", "Chi phi is required")
      //   .not()
      //   .isEmpty(),
      // check("cost", "Chi phi thiet is required")
      //   .not()
      //   .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const user = await User.findById(req.user.id).select("-password");
      const newBike = new Bike({
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
        user: req.user.id,
        status: "Chưa duyệt"

      });
      const bike = await newBike.save();
      res.json(bike);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);
// Patch Status
router.patch("/:id", async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    //Check status
    if (bike)
    // bike.status==="Chưa duyệt")
    {

      // console.log('>>>>>>>>>>>>>>>>>>>test');
      // console.log('>>>>>bike', bike.price);
      // console.log('status', bike.status);
      bike.status="Đã duyệt";
      // console.log('ssssss', bike.status);
      // console.log('>>>>>bike', bike);
    }
    // return res.json(bike.status);
    // bike.likes.unshift({ user: req.user.id });
    await bike.save();
    // console.log('>>> bike check:', bike)
    console.log(bike.status);
    res.json(bike.status);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//NOTE  GET all bike
// @route   Get api/bikes
// @desc    Get all bike
// @access  Private
router.get("/", async (req, res) => {
  try {
    const bikes = await Bike.find().sort({ date: -1 });
    res.json(bikes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
//NOTE  get bike by id
// @route   Get api/bikes/:id
// @desc    Get all bike by id
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) {
      return res.status(404).json({ msg: "Bike not found" });
    }
    res.json(bike);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "BIke not found" });
    }

    res.status(500).send("Server Error");
  }
});

// Delete bike by id
// @route   DELETE api/bikes/:id
// @desc    Delete a bike
// @access  Private
router.delete("/:id", async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) {
      return res.status(404).json({ msg: "Bike not found" });
    }
    // Check user
    // if (bike.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: "User not authorized" });
    // }
    await bike.remove();
    res.json({ msg: "Bike Remove" });
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Bike not found" });
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
    const bike = await Bike.findById(req.params.id);
    //Check if the post has already liked
    if (
      bike.likes.filter(like => like.user.toString() == req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: "Bike already like" });
    }
    bike.likes.unshift({ user: req.user.id });
    await bike.save();

    res.json(bike.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// router.patch("/status/:id",z updateStatus)

// try {
//   const bike = await Bike.findById(req.params.id);

//  bike.status
//   // bike.status.unshift({ user: req.user.id });
//   await bike.save();

//   res.json(bike.status);
// } catch (err) {
//   console.error(err.message);
//   res.status(500).send("Server Error");
// }

//NOTE  Dislike a bike
// @route   POST api/bikes/unlike/:id
// @desc    UnLike a bike
// @access  Private
router.put("/unlike/:id", auth, async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    //Check if the post has already liked
    if (
      bike.likes.filter(like => like.user.toString() == req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: "Bike has not yet been liked" });
    }
    //Get remove index
    const removeIndex = bike.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    bike.likes.splice(removeIndex, 1);
    await bike.save();

    res.json(bike.likes);
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
      const bike = await Bike.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };
      bike.comment.unshift(newComment);
      await bike.save();

      res.json(bike.comment);
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
    const bike = await Bike.findById(req.params.id);

    // Pull out comment
    const comment = bike.comment.find(
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
    const removeIndex = bike.comment
      .map(comment => comment.id)
      .indexOf(req.params.comment_id);

    bike.comment.splice(removeIndex, 1);

    await bike.save();

    res.json(bike.comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
