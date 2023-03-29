const Genre = require("../models/genre");

// Display the list of all genres
exports.genre_list = (req, res) => {
  res.send("NOT IMPLEMENTED: genre list");
};

// Display detail page for a spesific genre
exports.genre_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: genre detail: ${req.params.id}`);
};

// Display genre create form on GET.
exports.genre_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: genre create get");
};

// Display genre create form on POST.
exports.genre_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: genre create post");
};

// Display genre delete form on GET.
exports.genre_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: genre delete get");
};

// Display genre delelete form on POST.
exports.genre_delelete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: genre delelete post");
};

// Display genre update form on GET.
exports.genre_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: genre update get");
};

// Display genre update form on POST.
exports.genre_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: genre update post");
};
