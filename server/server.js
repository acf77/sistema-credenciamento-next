import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import nodemailer from "nodemailer";
import QRCode from "qrcode";

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

// @POST handles qrcode creation and sends via email
app.post("/api/qrcode/:event_id/:invitee_id", urlParser, (req, res) => {
  const { params } = req;

  // Configures SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "trent.swaniawski3@ethereal.email",
      pass: "42QZXfrYRn1B5rpYKy",
    },
  });

  const createQr = async () => {
    // Creates qrcode using event_id and invitee_id
    try {
      const event = await Event.findById(params.event_id);

      const qrCode = await QRCode.toDataURL(
        `${params.event_id} ${params.invitee_id}`
      );

      // Configures email info and content
      const mailOptions = {
        from: "antoniocarlos.j77@gmail.com",
        to: "acfilho@acfilho.dev",
        subject: "Qr Code test",
        html: `
        <h1 style='font-family: Arial, sans-serif' >Você foi convidado para o evento: ${event.nome}!</h1>
        <p style='font-family: Arial, sans-serif'>O evento acontecerá ${event.data} no ${event.local}</p>
        <p style='font-family: Arial, sans-serif'>Abaixo está o seu convite em QR Code, que deve ser escaneado na entrada do evento.</p>
        <img style='display: block; margin-left: auto; margin-right: auto; width: 50%;' src=${qrCode}></img>
        <a href='https://api.whatsapp.com/send?phone=' style='padding: 2%; background-color: #25D366; border-color: white; color: white; font-family: Arial, sans-serif' ><strong>Enviar para o meu Whatsapp</strong></a>
        `,
      };

      //Sends email with content
      transporter.sendMail(mailOptions, (err, info) => {
        err ? console.error(err) : console.log(info.response);
      });
    } catch (error) {
      console.error(error);
    }
  };

  createQr();
});

app.use("/", (req, res) => res.send("API is running..."));

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
