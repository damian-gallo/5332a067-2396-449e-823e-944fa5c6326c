import express from "express";
import CriptosController from "../controller/Criptos";
import cache from "../middleware/cache";
require("express-async-errors");

export = (() => {
  const router = express.Router();
  router.get("/", cache, CriptosController.all);
  return router;
})();
