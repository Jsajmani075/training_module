const Profile  = require("../models/profile");

exports.createProfile = async (req, res) => {
  const profile = await Profile.create(req.body);
  res.json(profile);
};
