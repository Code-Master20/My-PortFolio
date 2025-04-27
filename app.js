const { clientRouter } = require("./routes/clientRouter"); // Importing the client router
const path = require("path");
const rootDir = require("./utils/pathUtils");
const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: false })); // Middleware to parse URL-encoded data
app.use(express.static(path.join(rootDir, "public")));

app.use(clientRouter); // Use the clientRouter for handling requests

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
