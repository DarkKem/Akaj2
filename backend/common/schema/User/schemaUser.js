const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true
    },
    score: {
        type: Number,
        default: 0,
    },
}, {timestamps: true});

const User = mongoose.model("User", UserSchema);

module.exports = User;