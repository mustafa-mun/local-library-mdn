const Author = require("../models/author");

// Display the list of all authors
exports.author_list = (req, res) => {
  res.send("NOT IMPLEMENTED: Author list");
};

// Display detail page for a spesific author
exports.author_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`);
};

// Display Author create form on GET.
exports.author_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create get");
};

// Display Author create form on POST.
exports.author_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author create post");
};

// Display Author delete form on GET.
exports.author_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete get");
};

// Display Author delelete form on POST.
exports.author_delelete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delelete post");
};

// Display Author update form on GET.
exports.author_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update get");
};

// Display Author update form on POST.
exports.author_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author update post");
};
