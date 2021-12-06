import mongoose from "mongoose";

import {
  DB_USER,
  DB_PASSWORD,
  CLUSTER_NAME,
  SUBDOMAIN,
  DB_NAME,
} from "../config.js";

(async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${CLUSTER_NAME}.${SUBDOMAIN}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`
    );
  } catch (err) {
    console.log(err);
  }
})();

export default mongoose.model(
  "Book",
  mongoose.Schema({
    name: String,
    isbn: { type: String, index: true },
    author: String,
    pages: Number,
  })
);
