const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require("../controllers/book.controller");

router.post("/books", auth, createBook);
router.get("/books", getAllBooks);
router.get("/books/:id", getBookById);
router.put("/books/:id", auth, updateBook);
router.delete("/books/:id", auth, deleteBook);

module.exports = router;