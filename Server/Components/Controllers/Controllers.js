const Product = require("../Models/Product");
const Category = require("../Models/Category");

// Products

module.exports.p_product = async (req, res) => {
  let { pName, pDesc, pCategory, pIngredients, pPrice, pImage } = req.body;
  try {
    let data = await Product.create({
      pName,
      pDesc,
      pCategory,
      pIngredients,
      pPrice,
      pImage,
    });
    res.status(200).json({ data: data, message: "Successfully Added!" });
  } catch (error) {
    console.log("Error: ", error);
    res.status(400).json({ error });
  }
};

module.exports.g_product = async (req, res) => {
  try {
    let data = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.u_product = async (req, res) => {};

module.exports.d_product = async (req, res) => {};

// Category

module.exports.p_category = async (req, res) => {
  let { name, image } = req.body;
  try {
    let data = await Category.create({
      categoryName: name,
      categoryImage: image,
    });
    res.status(200).json({ data: data, message: "success" });
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.g_category = async (req, res) => {
  try {
    let data = await Category.find().sort({ createdAt: -1 });
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports.u_category = async (req, res) => {};

module.exports.d_category = async (req, res) => {};

// Banners

module.exports.p_banner = async (req, res) => {};

module.exports.g_banner = async (req, res) => {};

module.exports.u_banner = async (req, res) => {};

module.exports.d_banner = async (req, res) => {};
