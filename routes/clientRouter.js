const express = require("express");
const clientRouter = express.Router();

clientRouter.get("/", (req, res, next) => {
  res.render("client/mainWindow", {
    pageTitle: "Main Window",
  });
});

exports.clientRouter = clientRouter; // Exporting the client router
