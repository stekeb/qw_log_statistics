const User = require("../models/user.model");
const Log = require("../models/log.model");
const Name = require("../models/name.model");

async function getAllData(req, res) {
  const { id } = req.params;

  try {
    const singleUser = await User.findOne({
      where: {
        id: id,
      },
      include: [{ model: Log }, { model: Name }],
    });
    res.status(201);
    res.json(singleUser);
  } catch (error) {
    res.status(500);

    console.log(error);
  }
}

async function createUser(req, res) {
  try {
    const { userName, password, eMail } = req.body;
    const newUser = await User.create({ userName, password, eMail });
    res.status(201);
    res.json(newUser);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

module.exports = { getAllData, createUser };
