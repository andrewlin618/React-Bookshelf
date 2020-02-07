const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    googleId: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: [String], required: true },
    categories: { type: [String], required: true },
    publisher:{ type: String, required: true },
    publishedDate:{ type: Date, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    link: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
