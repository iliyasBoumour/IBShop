import asyncHandler from "express-async-handler";
import createError from "http-errors";
import Product from "../models/product.model.js";

const findAll = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const findOne = asyncHandler(async (req, res, next) => {
  try {
    const item = await Product.findById(req.params.id);
    // if the there is no product with the given
    if (item) {
      res.json(item);
    } else throw createError(404);
  } catch (err) {
    // if the request id is badly formatted (by defaut the status code is 404 / we wanna set it to 400)
    if (err.kind === "ObjectId")
      throw createError(400, `bad product id : ${req.params.id} !`);
    else next(err);
  }
});

const productsController = {
  findAll,
  findOne,
};
export default productsController;
