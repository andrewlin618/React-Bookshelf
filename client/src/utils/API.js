import axios from "axios";

export default {
    // Gets books from the Google API
    getBooks: function(q) {
        return axios.get("/api/google", { params: { q: "title:" + q } });
    },
    // Get all saved books from the database;
    getSavedBooks: function() {
        return axios.get("/api/books/");
    },
    // Get certain book from the database;
    getSavedBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Delete certain book from the database;
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    // Save a new book to the database;
    saveBook: function(bookData) { 
        return axios.post("/api/books", bookData);
    }
};