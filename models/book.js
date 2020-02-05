const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    author: { type: [String], required: true },
    categories: { type: [String], required: true },
    publisher:{ type: String, required: true },
    publishedDate:{ type: Date, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    googleId: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
