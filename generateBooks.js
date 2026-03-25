const sequelize = require("./config/database");
const Book = require("./models/book.model");

const seedBooks = async () => {
  try {
    await sequelize.sync();

    const books = [
      { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
      { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 },
      { title: "Refactoring", author: "Martin Fowler", year: 1999 },
      { title: "Design Patterns", author: "Erich Gamma", year: 1994 },
      { title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
      { title: "Eloquent JavaScript", author: "Marijn Haverbeke", year: 2011 },
      { title: "Clean Architecture", author: "Robert C. Martin", year: 2017 },
      { title: "Domain-Driven Design", author: "Eric Evans", year: 2003 },
      { title: "Working Effectively with Legacy Code", author: "Michael Feathers", year: 2004 },
      { title: "Code Complete", author: "Steve McConnell", year: 2004 }
    ];

    for (const book of books) {
      await Book.findOrCreate({
        where: book
      });
    }

    console.log("GenateBooks berhasil dijalankan");
    process.exit();

  } catch (error) {
    console.error(error);
  }
};

seedBooks();