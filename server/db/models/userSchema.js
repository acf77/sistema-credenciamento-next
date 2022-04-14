import mongoose from "mongoose";

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
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
