import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import createError from "http-errors";
import connection from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
dotenv.config();
// create express app
const app = express();

// parse requests of content-type  application/json -and- application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/products", productRoutes);

app.use((req, res) => {
  throw createError(404, `Can't find ${req.originalUrl} on this server!`);
});

// global error handling
app.use((err, req, res, next) => {
  let code;
  if (res.statusCode == 200) code = err.status || 500;

  res.status(code).json({
    status: code,
    message: err.message,
    stack: process.env.ENV === "DEV" && err.stack,
  });
});

connection();
app.listen(process.env.PORT, () => {
  console.log(
    `app listening at http://localhost:${process.env.PORT}`.green.underline.bold
  );
});
