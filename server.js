const express = require("express");
// const path = require("path");
const mongoose = require("mongoose")

const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Use Routes
app.use(routes);

mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
    console.log(`🌎 ==> Visit: http://localhost:${PORT}`);
    
});