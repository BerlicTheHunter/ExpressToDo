// ...............Pull in required Modules...............\\
const path= require("path");
const router= require('express').Router();

router.get("/notes",(req, res)=>{
  res.sendFile(path.join(__dirname, "../db/db.json"))
});

// router.post("/notes",(req, res)=>{
//   console.log(req.body);
//   const { title, text, id} = req.body;
  
//   if (req.body) {
//     const newNote = {
//       title,
//       text,
//       id
//     };

//     readAndAppend(newNote, path.join(__dirname, "../db/db.json"));
//     res.json(`Note added successfully 🚀`);
//   } else {
//     res.error('Error in adding Note');
//   }
// });




module.exports = router;