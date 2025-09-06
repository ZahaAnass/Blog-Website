const mongoose = require("mongoose")
const date = new Date()
const today = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide title"],
        trim: true,
        maxlength: [100, "Title cannot be more than 100 characters"],
        minlength: [3, "Title must be at least 3 characters"],
    },
    excerpt: {
        type: String,
        required: [true, "Please provide excerpt"],
        trim: true,
    },
    imageUrl: {
        type: String,
        required: [true, "Please provide image url"],
        trim: true,
    },
    category: [
        {
            type: String,
            required: [true, "Please provide category"],
            trim: true,
        }
    ],
    date: {
        type: String,
        default: today,
    },
    content: {
        type: String,
        required: [true, "Please provide content"],
        trim: true,
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Please provide user id"],
    }
}, { timestamps: true })

module.exports = mongoose.model("Blog", BlogSchema)
