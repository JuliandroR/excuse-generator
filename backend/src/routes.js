const express = require("express");

const ContributionController = require("./controllers/ContributionController");
const ExcuseController = require("./controllers/ExcuseController");

const routes = express.Router();

routes.get("/excuses", ExcuseController.listExcuses);
routes.post("/excuses/create", ExcuseController.createExcuse);
routes.delete("/excuses/delete/:id", ExcuseController.deleteExcuse);

routes.post(
  "/contributions/create",
  ContributionController.createContributions
);
routes.get("/contributions", ContributionController.listContrbutions);

// routes.delete("/contributions/delete/:id", ExcuseController.deleteExcuse);
module.exports = routes;
