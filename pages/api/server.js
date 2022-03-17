const invitees = require("./invitees.json");

export default function handler(req, res) {
  res.status(200).json(invitees);
}
