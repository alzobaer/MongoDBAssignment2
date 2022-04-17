const mongoose = require("mongoose");

const leaderSchema = mongoose.Schema({
    name: String,
    image: String,
    designation: String,
    abbr: String,
    description: String,
    featured: Boolean
})

module.exports = leaderSchema;
