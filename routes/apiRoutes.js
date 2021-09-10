//*...............Pull in required Modules...............\\
const path = require("path");
const router = require("express").Router();
const fs = require("fs");

//*...............GET request...............\\
// sets up the get request to return the list of notes\\
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../db/db.json"));
});

// *..............POST request...............\\
// sets up the post request which pulls in the curent notes,
// adds an ID, appends the new note to the list of notes,
// and writes the new listof notes backto the db file.
router.post("/notes", (req, res) => {
  const dataBase = fs.readFileSync(path.join(__dirname, "../db/db.json"));
  const { title, text } = req.body;
  const id = Date.now();

  if (req.body) {
    const newNote = {
      title,
      text,
      id: id.toString(),
    };

    const parsedDB = JSON.parse(dataBase);

    parsedDB.push(newNote);

    const stringDB = JSON.stringify(parsedDB);

    fs.writeFile(path.join(__dirname, "../db/db.json"), stringDB, () => {
      res.json(`Note added successfully`);
    });
  } else {
    res.error("Error in adding Note");
  }
});

//TODO.........DELETE request...............\\
// there is where the delete request will go, should time allow......

module.exports = router;
