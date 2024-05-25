const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const CategorySchema = new Schema(
  {
    categoryName: { type: String, required: true },
    categoryImage: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const CategoryModel = model("Category", CategorySchema, "Category");

module.exports = CategoryModel;
