import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    thumbnail: String,
    images: [String]
});

// Check if the Product model already exists
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
