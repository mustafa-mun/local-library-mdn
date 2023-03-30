const Genre = require("../models/genre");
const Book = require("../models/book");
const async = require("async");

// Display the list of all genres
exports.genre_list = (req, res, next) => {
  Genre.find()
    .sort({ name: 1 })
    .exec(function (err, list_genres) {
      if (err) {
        return next(err);
      }
      res.render("genre_list", {
        title: "Genre List",
        genre_list: list_genres,
      });
    });
};

// Display detail page for a spesific genre
exports.genre_detail = (req, res) => {
  async.parallel(
    {
      genre(callback) {
        Genre.findById(req.params.id).exec(callback);
      },

      genre_books(callback) {
        Book.find({ genre: req.params.id }).exec(callback);
      },
    },
    (err, results) => {
      if (err) {
        return next(err);
      }
      if (results.genre === null) {
        // no results
        const err = new Error("Genre not found");
        err.status(404);
        return next(err);
      }
      // Successful, so render
      res.render("genre_detail", {
        title: "Genre Detail",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    }
  );
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
