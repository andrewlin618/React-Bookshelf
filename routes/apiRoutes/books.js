const router = require("express").Router();
const booksController = require("../../controllers/bookController");

// Routes with "/api/books"
router.route("/")
    .get(booksController.findMyAll)
    .post(booksController.create);

// Routes with "/api/books/:id"
router.route("/:id")
    .get(booksController.findById)
    .put(booksController.update)
    .delete(booksController.remove);
module.exports = router;