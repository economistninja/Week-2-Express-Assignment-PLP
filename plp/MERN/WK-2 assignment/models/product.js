// models/product.js
const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');

const productSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    description: {
        type: String,
        required: [true, 'Product description is required'],
        trim: true
    },
    price: {
        type: Number,
        required: [true, 'Product price is required'],  
        min: [0, 'Price must be a positive number']
    },
    category: {
        type: String,
        required: [true, 'Product category is required']
    },
    instock: {
        type: Boolean,
        default: true
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

