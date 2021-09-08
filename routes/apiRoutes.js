// ...............Pull in required Modules...............\\
const path= require("path");
const router= require('express').Router();
const fs= require("fs");


router.get("/notes",(req, res)=>{
  res.sendFile(path.join(__dirname, "../db/db.json"))
});


router.post("/notes",(req, res)=>{
  const dataBase= fs.readFileSync("./db/db.json");
  const { title, text} = req.body;
  const id= Date.now()
  if (req.body) {
    const newNote = {
      title,
      text,
      id: id.toString()
    };
    const parsedDB= JSON.parse(dataBase);
    parsedDB.push(newNote);
    const stringDB= JSON.stringify(parsedDB);
    
    
    fs.writeFile(path.join(__dirname, "../db/db.json"),stringDB,()=>{
    res.json(`Note added successfully`);
    });
  } else {
    res.error('Error in adding Note');
  }
});




module.exports = router;