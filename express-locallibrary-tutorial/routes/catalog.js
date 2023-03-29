const express = require("express");
const router = express.Router();

// Require controller modules.
const book_controller = require("../controllers/bookController");
const author_controller = require("../controllers/authorController");
const genre_controller = require("../controllers/genreController");
const bookinstance_controller = require("../controllers/bookinstanceController");

/// BOOK ROUTES ///

// GET catalog home page
router.get("/", book_controller.index);

// GET request for creating a Book. NOTE This must come before routes that display Book (uses id).
router.get("/book/create", book_controller.book_create_get);

// POST request for creating Book.
router.post("/book/create", book_controller.book_create_post);

// GET request for delete Book.
router.get("book/:id/delete", book_controller.book_delete_get);

// POST request for delete Book.
router.post("book/:id/delete", book_controller.book_delelete_post);

// GET request for update Book.
router.get("book/:id/update", book_controller.book_update_get);

// POST request for update Book.
router.post("book/:id/update", book_controller.book_update_post);

// GET request for one Book.
router.get("/book/:id", book_controller.book_detail);

// GET request for all Books.
router.get("/books", book_controller.book_list);

/// AUTHOR ROUTES ///

// GET request for creating a author. NOTE This must come before routes that display author (uses id).
router.get("/author/create", author_controller.author_create_get);

// POST request for creating author.
router.post("/author/create", author_controller.author_create_post);

// GET request for delete author.
router.get("author/:id/delete", author_controller.author_delete_get);

// POST request for delete author.
router.post("author/:id/delete", author_controller.author_delelete_post);

// GET request for update author.
router.get("author/:id/update", author_controller.author_update_get);

// POST request for update author.
router.post("author/:id/update", author_controller.author_update_post);

// GET request for one author.
router.get("/author/:id", author_controller.author_detail);

// GET request for all authors.
router.get("/authors", author_controller.author_list);

/// GENRE ROUTES ///

// GET request for creating a genre. NOTE This must come before routes that display genre (uses id).
router.get("/genre/create", genre_controller.genre_create_get);

// POST request for creating genre.
router.post("/genre/create", genre_controller.genre_create_post);

// GET request for delete genre.
router.get("genre/:id/delete", genre_controller.genre_delete_get);

// POST request for delete genre.
router.post("genre/:id/delete", genre_controller.genre_delelete_post);

// GET request for update genre.
router.get("genre/:id/update", genre_controller.genre_update_get);

// POST request for update genre.
router.post("genre/:id/update", genre_controller.genre_update_post);

// GET request for one genre.
router.get("/genre/:id", genre_controller.genre_detail);

// GET request for all genres.
router.get("/genres", genre_controller.genre_list);

/// BOOK INSTANCE ROUTES ///

// GET request for creating a bookinstance. NOTE This must come before routes that display bookinstance (uses id).
router.get(
  "/bookinstance/create",
  bookinstance_controller.bookinstance_create_get
);

// POST request for creating bookinstance.
router.post(
  "/bookinstance/create",
  bookinstance_controller.bookinstance_create_post
);

// GET request for delete bookinstance.
router.get(
  "bookinstance/:id/delete",
  bookinstance_controller.bookinstance_delete_get
);

// POST request for delete bookinstance.
router.post(
  "bookinstance/:id/delete",
  bookinstance_controller.bookinstance_delelete_post
);

// GET request for update bookinstance.
router.get(
  "bookinstance/:id/update",
  bookinstance_controller.bookinstance_update_get
);

// POST request for update bookinstance.
router.post(
  "bookinstance/:id/update",
  bookinstance_controller.bookinstance_update_post
);

// GET request for one bookinstance.
router.get("/bookinstance/:id", bookinstance_controller.bookinstance_detail);

// GET request for all bookinstances.
router.get("/bookinstances", bookinstance_controller.bookinstance_list);

module.exports = router;
