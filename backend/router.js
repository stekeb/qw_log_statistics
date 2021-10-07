const router = require("express").Router();
const { getAllData, createUser } = require("./controllers/user");
const { createLog, place } = require("./controllers/logs");
const { createName } = require("./controllers/names");

router.get("/user/:id", getAllData);

router.post("/user", createUser);
router.post("/log/:UserId", createLog);

router.post("/name/:UserId", createName);

module.exports = router;
