import express from "express";

import {
  loginController,
  registerController,
  resetPasswordController,
} from "../controllers/userControllers.js";
import { createEventController } from "../controllers/eventControllers.js";

const router = express.Router();

router.route("/login").post(loginController);
router.route("/register").post(registerController);
router.route("/event").put(createEventController);
router.route("/reset-password").post(resetPasswordController);

export default router;
