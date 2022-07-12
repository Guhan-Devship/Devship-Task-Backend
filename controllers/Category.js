const Category = require("../model/Category");
const fs = require("fs");
const multer = require("multer");

const fileStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./category");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({
  storage: fileStorage,
}).single("image");

const createNew = async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
    } else {
      let image;

      if (req.file) {
        image = req.file.path.replace(/\\/g, "/");
      }

      const newCategory = new Category({
        title: req.body.title,
        image,
      });
      newCategory
        .save()
        .then(() => {
          res.json({ message: "created" });
        })
        .catch((err) => {
          res.send(err);
        });
    }
  });
};

const getCategory = async (req, res) => {
  try {
    const product = await Category.find({});
    if (product) {
      res.json(product);
    }
  } catch (error) {
    console.log(error);
  }
};
const getProductId = async (req, res) => {
  try {
    const user = await Category.findById(req.params.id);
    if (user) {
      res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteCategory = async (req, res) => {
  try {
    const List = await Category.findByIdAndDelete(req.params.id);
    if (List) {
      res.send("deleted Successfully");
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createNew, getCategory, deleteCategory, getProductId };
