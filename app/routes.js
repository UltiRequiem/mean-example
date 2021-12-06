import { join } from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { ifError } from "./utils.js";
import Book from "./model.js";

export default (app) => {
  app.get("/book", (_req, res) => {
    Book.find({}, (err, result) => {
      ifError(err);
      res.json(result);
    });
  });
  app.post("/book", (req, res) => {
    const book = new Book({
      name: req.body.name,
      isbn: req.body.isbn,
      author: req.body.author,
      pages: req.body.pages,
    });
    book.save((err, result) => {
      ifError(err);
      res.json({
        message: "Successfully added book",
        book: result,
      });
    });
  });
  app.delete("/book/:isbn", (req, res) => {
    Book.findOneAndRemove(req.query, (err, result) => {
      ifError(err);
      res.json({
        message: "Successfully deleted the book",
        book: result,
      });
    });
  });
  app.get("*", (_req, res) => {
    res.sendFile(
      join(dirname(fileURLToPath(import.meta.url)) + "/public", "index.html")
    );
  });
};
