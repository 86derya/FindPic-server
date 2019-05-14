const express = require("express");
const mainRoute = require("./controllers/main/main");

const apiRoutes = express.Router();

apiRoutes.get("/", mainRoute);
module.exports = apiRoutes;
