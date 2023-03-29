const Book = require("../models/book");

exports.index = (req, res) => {
  res.send("NOP IMPLEMENTED: Site Home Page");
};

// Display the list of all books
exports.book_list = (req, res) => {
  res.send("NOT IMPLEMENTED: book list");
};

// Display detail page for a spesific book
exports.book_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: book detail: ${req.params.id}`);
};

// Display book create form on GET.
exports.book_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: book create get");
};

// Display book create form on POST.
exports.book_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: book create post");
};

// Display book delete form on GET.
exports.book_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: book delete get");
};

// Display book delelete form on POST.
exports.book_delelete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: book delelete post");
};

// Display book update form on GET.
exports.book_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: book update get");
};

// Display book update form on POST.
exports.book_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: book update post");
};
