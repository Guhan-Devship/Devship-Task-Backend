const Product = require('../model/Product')


const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.status(200).json({ message: "created", savedProduct });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getProduct = async (req, res) => {
  const { ...others } = req.query;
  try {
    const product = await Product.find({ ...others });
    if (product) {
      res.json(product)
    }
  } catch (error) {
    console.log(error)
  }

}
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
}
const getProductId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product)
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    console.log(err);
  }
}

const countBymodel = async (req, res, next) => {
  const models = req.query.model;
  console.log(models)
  try {
    const list = await Promise.all(
      models.map((model) => {
        return Product.countDocuments({ model: model })
      })
    );
    res.status(200).json(list);
    console.log(list)
  } catch (err) {
    next(err);
  }
};
const countByCategory = async (req, res, next) => {
  const category = req.query.category;
  console.log(category)
  try {
    const list = await Promise.all(
      category.map((lists) => {
        return Product.countDocuments({ category: lists })
      })
    );
    res.status(200).json(list);
    console.log(list)
  } catch (err) {
    next(err);
  }
};

module.exports = { createProduct, getProduct, countBymodel, countByCategory, updateProduct, getProductId, deleteProduct };