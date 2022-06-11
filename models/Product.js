const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
    name: {
        type: String,       
        required: [true, 'Name is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;


