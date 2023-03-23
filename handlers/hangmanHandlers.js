const { words } = require('../data/words');

const handlehangmanGuess = (req, res) => {
  const letter = req.params.letter;
  const wordFound = words.find((w) => w.id === req.params.id);
  if (!wordFound) {
    return res.status(400).json("word not found");
  }
  const filterWord = wordFound.word.split("").map((match) => match === letter);
  res.status(200).json(filterWord);
};

const handleGetHangId = (req, res) => {
  const word = words.find((w) => w.id === req.params.id);
  if (!word) {
    return res.status(404).json({ message: "Not found :(" });
  }
  res.json(word);
};

const handleGetHangWord = (req, res) => {
  // Group Work
  const letter = req.params.letter;
  const wordFound = words.find((w) => w.id === req.params.id);
  if (!wordFound) {
    return res.status(400).json("not found");
  }
  const filterWord = wordFound.word.split("").map((match) => match === letter);
  res.status(200).json(filterWord);
};

module.exports = { handlehangmanGuess, handleGetHangId, handleGetHangWord };