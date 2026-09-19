#!/usr/bin/env node

import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const directory = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// EJS template settings
app.set("views", path.join(directory, "mb_views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index") // Second argument goes here but needs to be an object
});

// TODO: Revisit this as we may not need it (no new.html doc yet)
app.get("/new", (req, res) => {
  res.render("new") // Second argument goes here but needs to be an object
});

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