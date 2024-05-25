const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    pName: { type: String, required: true },
    pDesc: { type: String, required: true },
    pCategory: { type: String, required: true },
    pIngredients: { type: String, required: true },
    pPrice: { type: String, required: true },
    pImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = model("Product", ProductSchema, "Products");

module.exports = ProductModel;
