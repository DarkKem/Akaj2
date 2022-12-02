const mongoose = require("mongoose");

const BossSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, "can't be blank"],
        index: true
    },
    pv: {
        type: Number,
        default: 100,
    },
    description: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    }
}, {timestamp: true});

const Boss = mongoose.model("Boss", BossSchema);

module.exports = Boss;