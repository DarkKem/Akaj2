const mongoose = require("mongoose");
const Schema = mongoose.Schema

const CardsSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true,
        required: [true, "can't be blank"]
    },
    type: {
        type: String,
        default: '',
        required: true
    },
    description: {
        type: String,
        default: ""
    },
    boss: {
        type: Schema.Types.ObjectId,
        ref: 'Boss',
        required: true
    }
}, {timestamp: true});

const Cards = mongoose.model("Cards", CardsSchema);

module.exports = Cards;