const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/dist`))

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
  })

app.listen(3004, () => {
  console.log(`Server Quotes Running on 3004`)
});