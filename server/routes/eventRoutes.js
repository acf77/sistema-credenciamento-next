import express from "express";

import {
  listEventsController,
  createEventController,
  eventByIdController,
  eventStartController,
  qrCodeByEmailControler,
  getInviteeById,
  addInviteesController,
  deleInviteeController,
} from "../controllers/eventControllers.js";

const router = express.Router();

// list all events
router.route("/all/:id").get(listEventsController);

// create a new event
router.route("/").post(createEventController);

// return event by id
router.route("/:id").get(eventByIdController);

// start event
router.route("/start/:id").put(eventStartController);

// send qr code by email to invitee
router.route("/qrcode/email").post(qrCodeByEmailControler);

// return invitee by id
router.route("/invitee/:id").get(getInviteeById);

// add invitee to event
router.route("/invitee").put(addInviteesController);

// delete invitee from event
router.route("/invitee").delete(deleInviteeController);

export default router;
