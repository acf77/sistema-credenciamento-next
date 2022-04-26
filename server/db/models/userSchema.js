import mongoose from "mongoose";
import Event from "./eventSchema.js";

// interface User {
//   nome: string;
//   celular: number;
//   email: string;
//   senha: string;
// }

const userSchema = mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    celular: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
    // events: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Event",
    //   },
    // ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
