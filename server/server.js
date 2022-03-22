import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./db/db.js";
import Event from "./db/models/eventSchema.js";

const app = express();
const port = 8080;
const urlParser = bodyParser.urlencoded({ extended: true });

connectDB();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// @GET returns all events
app.get("/api/events", urlParser, (req, res) => {
  const getAllFromDb = async () => {
    try {
      const event = await Event.find({});
      res.status(200).json(event);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  getAllFromDb();
});

// @GET returns event by id
app.get("/api/events/:id", urlParser, (req, res) => {
  const { params } = req;

  const getEventByIdFromDb = async () => {
    try {
      const event = await Event.findById(params.id);
      res.status(200).json(event);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  getEventByIdFromDb();
});

// @GET returns invitees by id
app.get("/api/event/:event_id/invitee/:invitee_id", urlParser, (req, res) => {
  const { params } = req;

  const getinviteeByIdFromDb = async () => {
    try {
      const event = await Event.findById(params.event_id);
      const invitee = event.listaConvidados.filter((i) => {
        return i._id == params.invitee_id;
      });

      res.status(200).json(invitee);
    } catch (error) {
      res.status(400).json(error);
    }
  };
  getinviteeByIdFromDb();
});
app.use("/", (req, res) => res.send("API is running..."));

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
