const Product = require("../model/Product");
const multer = require("multer");
const fileStorage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({
  storage: fileStorage,
}).single("image");

const createProduct = async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
    } else {
      let image;

      if (req.file) {
        image = req.file.path.replace(/\\/g, "/");
      }

      const newProduct = new Product({
        title: req.body.title,
        desc: req.body.desc,
        image,
        model: req.body.model,
        category: req.body.category,
        price: req.body.price,
        offerPrice: req.body.offerPrice,
      });
      newProduct
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
const getProduct = async (req, res) => {
  const { ...others } = req.query;
  try {
    const product = await Product.find({ ...others });
    if (product) {
      res.json(product);
    }
  } catch (error) {
    console.log(error);
  }
};
const updateProduct = async (req, res, next) => {
  try {
    const update = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(update);
  } catch (err) {
    next(err);
  }
};
const getProductId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    console.log(err);
  }
};

const countBymodel = async (req, res, next) => {
  const models = req.query.model;
  console.log(models);
  try {
    const list = await Promise.all(
      models.map((model) => {
        return Product.countDocuments({ model: model });
      })
    );
    res.status(200).json(list);
    console.log(list);
  } catch (err) {
    next(err);
  }
};
const countByCategory = async (req, res, next) => {
  const category = req.query.category;
  console.log(category);
  try {
    const list = await Promise.all(
      category.map((lists) => {
        return Product.countDocuments({ category: lists });
      })
    );
    res.status(200).json(list);
    console.log(list);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createProduct,
  getProduct,
  countBymodel,
  countByCategory,
  updateProduct,
  getProductId,
  deleteProduct,
};
