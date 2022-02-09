import express from "express";
import PingController from "../controller/Ping";
require("express-async-errors");

export = (() => {
  const router = express.Router();
  router.get("/", PingController.ping);
  return router;
})();
