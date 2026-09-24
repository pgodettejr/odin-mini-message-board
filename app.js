#!/usr/bin/env node

import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { indexRouter } from "./mb_routes/indexRouter.js";

// Variation of directory variable below. Switch to this if errors pop up
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const directory = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// EJS template settings
app.set("views", path.join(directory, "mb_views"));
app.set("view engine", "ejs");

// TODO - RefError: messages is not defined. Did current dot notation fix the error or do we need to import "messages" separately from indexRouter.js?
app.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: indexRouter.messages })
});

// TODO: Revisit this as we may not need it (no new.html doc yet)
app.get("/new", (req, res) => {
  res.render("new") // Second argument goes here but needs to be an object
});

app.use("/", indexRouter);

// Express middleware that parses the form data into req.body which accesses the contents of the form and use that data
app.use(express.urlencoded({ extended: true }));

// Error catching
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

// May switch to this for the listen code below
// const PORT = process.env.PORT || 8080;

app.listen(8080, (err) => {
  if (err) {
    throw err;
  }
  console.log('Listening for requests on port 8080');
});