const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({    
    id: String,
    title: String,
    value: Number,    
    userId: String,
});

module.exports = mongoose.model('Purchase', PurchaseSchema);