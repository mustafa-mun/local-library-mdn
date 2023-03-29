const BookInstance = require("../models/bookinstance");

// Display the list of all bookinstances
exports.bookinstance_list = (req, res) => {
  res.send("NOT IMPLEMENTED: bookinstance list");
};

// Display detail page for a spesific bookinstance
exports.bookinstance_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: bookinstance detail: ${req.params.id}`);
};

// Display bookinstance create form on GET.
exports.bookinstance_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: bookinstance create get");
};

// Display bookinstance create form on POST.
exports.bookinstance_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: bookinstance create post");
};

// Display bookinstance delete form on GET.
exports.bookinstance_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: bookinstance delete get");
};

// Display bookinstance delelete form on POST.
exports.bookinstance_delelete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: bookinstance delelete post");
};

// Display bookinstance update form on GET.
exports.bookinstance_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: bookinstance update get");
};

// Display bookinstance update form on POST.
exports.bookinstance_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: bookinstance update post");
};
