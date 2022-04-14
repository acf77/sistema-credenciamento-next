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

router.route("/").get(listEventsController);
router.route("/").post(createEventController);
router.route("/:id").get(eventByIdController);
router.route("/start/:id").put(eventStartController);
router.route("/qrcode/email").post(qrCodeByEmailControler);
router.route("/invitee/:id").get(getInviteeById);
router.route("/invitee/").put(addInviteesController);
router.route("/invitee/").delete(deleInviteeController);

export default router;
