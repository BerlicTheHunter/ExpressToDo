//* ...............Pull in required Modules...............\\
const path = require("path");
const router = require("express").Router();

//*................GET request...............\\
// sets the get request which returns the webpage html as a response
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
