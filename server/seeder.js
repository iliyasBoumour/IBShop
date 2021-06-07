import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import User from "./models/user.model.js";
import Product from "./models/product.model.js";
import connection from "./config/db.js";
import users from "./data/users.js";
import products from "./data/products.js";

dotenv.config();

const seed = async () => {
  try {
    await connection();
    await User.deleteMany();
    await Product.deleteMany();
    const all = await User.insertMany(users);
    const newP = products.map((product) => {
      return { ...product, user: all[0]._id };
    });
    await Product.insertMany(newP);
    console.log(`seeded !`.green.inverse.bold);
    process.exit();
  } catch (err) {
    console.log(`${err}`.red.inverse);
    process.exit(1);
  }
};

const clean = async () => {
  try {
    await connection();
    await User.deleteMany();
    await Product.deleteMany();
    console.log("Database Empty !".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

process.argv[2] == "clean" ? clean() : seed();
