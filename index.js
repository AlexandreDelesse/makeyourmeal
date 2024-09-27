const ingredientRoute = require("./routes/ingredient.route");

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3001;
const CORS_OPTIONS = {
  origin: "*",
};

app.use(express.json());
app.use(cors(CORS_OPTIONS));
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/ingredients", ingredientRoute);

app.get("/hello", (req, res) => res.send("Hello world"));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client/build", "index.html"))
);

app.listen(PORT, () => console.log("App is listening on port : ", PORT));
