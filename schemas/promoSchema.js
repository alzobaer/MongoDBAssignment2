const mongoose = require("mongoose");

const promoSchema = mongoose.Schema({
        name: String,
        image: String,
        label: String,
        price: String,
        description: String,
        featured: Boolean
        
})

module.exports = promoSchema;