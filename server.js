require("dotenv").config(); 
const express = require("express");
const postRoute = require("./routes/postRoutes")
const app = express();

app.use(express.json()); 

app.use("/posts", postRoute)
app.use((err, req, res, next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Something went wrong",
  });
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
