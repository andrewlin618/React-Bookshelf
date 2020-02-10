const express = require("express");

// Configure body parsing for AJAX requests
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}


// Use Routes;
const routes = require("./routes");
app.use(routes);

// Connect to MongoDB;
const mongoose = require("mongoose")

// mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

// mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true});

mongoose.connect(
    'mongodb://localhost:27017/reactBookshelf',
    { useNewUrlParser: true }
)
.then(() => console.log("MongoDB successfully connected"))
.catch(err => console.log(err));

// Connect to the Mongo DB
// mongoose.connect(
//     process.env.MONGODB_URI || "andrewlin618:Lin123456@cluster0-xjna8.mongodb.net/test?retryWrites=true&w=majority",
//     {
//         useCreateIndex: true,
//         useNewUrlParser: true
//     }
// );

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
    console.log(`🌎 ==> Visit: http://localhost:${PORT}`);
    
});