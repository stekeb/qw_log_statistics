const User = require("../models/user.model");
const Log = require("../models/log.model");
const Name = require("../models/name.model");

async function createLog(req, res) {
  const { UserId } = req.params;
  const {
    nmyName,
    ownLG,
    ownRL,
    ownMH,
    ownFrags,
    nmyLG,
    nmyRL,
    nmyMH,
    nmyFrags,
    map,
  } = req.body;
  try {
    const newLog = await Log.create({
      UserId,
      nmyName,
      ownLG,
      ownRL,
      ownMH,
      ownFrags,
      nmyLG,
      nmyRL,
      nmyMH,
      nmyFrags,
      map,
    });
    res.status(201);
    res.send(newLog);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

async function place(req, res) {}

module.exports = { createLog, place };
