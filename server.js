const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const items = require("./routes/api/items");
const app = express();

app.use(bodyParser.json());

//DB COnfig
const db = require("./config/keys").mongoURI;

//connect to mongo db
mongoose
  .connect(db)
  .then(() => console.log("Mongo Db Connected"))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
