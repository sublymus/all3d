import express from "express";
import path from "path";

const PORT = 8080;
const app = express();
const server = app.listen(PORT, () => {
  console.log('Server running at http://localhost:'+PORT);
});
app.use(express.static('public'))


app.get("/", (req, res) => {
  //res.redirect('/public/Home/home.html');
  
});
app.get("*", (req, res) => {
  const filePath = path.join(__dirname, req.path);
  res.sendFile(filePath);
});





 