const router = require("express").Router();
const User = require("../models/User");

const Category = require("../models/Category");

//ADD
router.post("/", async (req, res) => {
  try {
    const newCategory = new Category({
      name: req.body.name,
    });
    const category = await newCategory.save();

    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET

router.get("/", async (req, res) => {
  try {
    const cats = await Category.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
