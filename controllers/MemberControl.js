const Member = require("../model/Member");
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

const createMember = async (req, res) => {
  upload(req, res, function (err) {
    if (err) {
      console.log(err);
    } else {
      let image;

      if (req.file) {
        image = req.file.path.replace(/\\/g, "/");
      }

      const newMember = new Member({
        Name: req.body.Name,
        Url: req.body.Url,
        image,
        Active: req.body.Active,
        createdby: req.userId,
      });
      newMember
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

const getMember = async (req, res) => {
  const { ...others } = req.query;
  try {
    const member = await Member.find({ ...others });
    if (member) {
      res.json(member);
    }
  } catch (error) {
    console.log(error);
  }
};

const updateMember = async (req, res, next) => {
  try {
    const update = await Member.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(update);
  } catch (err) {
    next(err);
  }
};
const getMemberId = async (req, res) => {
  try {
    const product = await Member.findById(req.params.id);
    if (product) {
      res.json(product);
    }
  } catch (error) {
    console.log(error);
  }
};

const deleteMember = async (req, res) => {
  try {
    await Member.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted.");
  } catch (err) {
    console.log(err);
  }
};
module.exports = {
  createMember,
  getMember,
  updateMember,
  getMemberId,
  deleteMember,
};
