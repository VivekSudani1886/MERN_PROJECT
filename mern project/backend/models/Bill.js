const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    billHolder: {
        type: String,
        required: true,
    },
    items: [
        {
            productName: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;
