import mongoose from "mongoose";
// import aggregatePaginate from "mongoose-aggregate-paginate-v2";

const ReviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    Comment: { type: String, required: true },
    rating: { type: String, required: true },
  },
  { timestamps: true }
);

const ProductSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true, default: 0 },
    reviews: [ReviewSchema],
    size: {
      heigth: Number,
      width: Number,
      length: Number,
    },
    characteristics: [
      {
        color: String,
        inStock: Number,
      },
    ],
    price: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const productModel = mongoose.model("Product", ProductSchema);

export default productModel;
