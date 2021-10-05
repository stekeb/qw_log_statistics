const User = require("../models/user.model");
const Log = require("../models/log.model");
const Name = require("../models/name.model");

async function createName(req, res) {
  console.log("HELLO")
  try {
    const { UserId } = req.params;
    const { playerName } = req.body;
    const newName = await Name.create({ UserId, playerName });
    res.status(201);
    res.send(newName);
    
  } catch (error) {
    res.status(500);
    console.log(error);
  }  
}

module.exports = {createName};
