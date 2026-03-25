const Book = require("../models/book.model");
const { Op } = require("sequelize");

exports.createBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;

    if (!title || !author || !year) {
      return res.status(400).json({
        status: false,
        message: "Semua field wajib diisi"
      });
    }

    const existingBook = await Book.findOne({
      where: {
        title,
        author,
        year
      }
    });

    if (existingBook) {
      return res.status(400).json({
        status: false,
        message: "Buku sudah ada (duplikat)"
      });
    }

    const book = await Book.create({
      title,
      author,
      year
    });

    return res.status(201).json({
      status: true,
      message: "Buku berhasil ditambahkan",
      data: book
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message
    });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const { title, author, year } = req.query;

    let condition = {};

    if (title) {
      condition.title = {
        [Op.like]: `%${title}%`
      };
    }

    if (author) {
      condition.author = {
        [Op.like]: `%${author}%`
      };
    }

    if (year) {
      condition.year = {
        [Op.eq]: year
      };
    }

    const books = await Book.findAll({
      where: condition,
      order: [["year", "DESC"]]
    });

    if (books.length === 0) {
      return res.status(200).json({
        status: true,
        message: "Data buku tidak ditemukan",
        data: []
      });
    }

    return res.status(200).json({
      status: true,
      message: "Data buku berhasil diambil",
      data: books
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message
    });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        status: false,
        message: "Buku tidak ditemukan"
      });
    }

    return res.status(200).json({
      status: true,
      message: "Detail buku berhasil diambil",
      data: book
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message
    });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, year } = req.body;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        status: false,
        message: "Buku tidak ditemukan"
      });
    }

    if (!title || !author || !year) {
      return res.status(400).json({
        status: false,
        message: "Semua field wajib diisi"
      });
    }

    const existingBook = await Book.findOne({
      where: {
        title,
        author,
        year
      }
    });

    if (existingBook && existingBook.id != id) {
      return res.status(400).json({
        status: false,
        message: "Data buku duplikat"
      });
    }

    await book.update({ title, author, year });

    return res.status(200).json({
      status: true,
      message: "Buku berhasil diupdate",
      data: book
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message
    });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({
        status: false,
        message: "Buku tidak ditemukan"
      });
    }

    await book.destroy();

    return res.status(200).json({
      status: true,
      message: "Buku berhasil dihapus"
    });

  } catch (error) {
    return res.status(500).json({
      status: false,
      message: error.message
    });
  }
};