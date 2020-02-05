const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    // publisher:{ type: String, required: true },
    // publishedDate:{ type: Date, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
