"use strict";

const express = require("express");
const morgan = require("morgan");

const { v4: uuidv4 } = require("uuid");
const { clients } = require("./data/clients");
const { words } = require("./data/words");
const {
  handlehangmanGuess,
  handleGetHangId,
  handleGetHangWord,
} = require("./handlers/hangmanHandlers");

const {
  handleGetAllClient,
  handleGetClientById,
  handlePostClient,
  handleDeleteClient,
} = require("./handlers/clientHandlers");

const app = express();
express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

  .get("/clients", handleGetAllClient)
  .get("/clients/:clientId", handleGetClientById)
  .post("/clients", handlePostClient)
  .delete("/clients/:clientId", handleDeleteClient)

  // group work - start
  .get("/hangman/word", handleGetHangWord)
  .get("/hangman/word/:id", handleGetHangId)
  // group work - End
  .get("/hangman/guess/:id/:letter", handlehangmanGuess)

  .listen(8000, () => console.log(`Listening on port 8000`));
