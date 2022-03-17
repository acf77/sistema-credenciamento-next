const { eventos } = require("../invitees.json");

export default function handler(req, res) {
  const evento = eventos.filter((e) => {
    return e.id == req.query.id;
  });

  if (req.method === "GET") {
    res.status(200).json(evento);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
