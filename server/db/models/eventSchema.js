import mongoose from "mongoose";

const inviteesSchema = mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    celular: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senhas: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const eventSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    nome: {
      type: String,
      required: true,
    },
    data: {
      type: String,
      required: true,
    },
    local: {
      type: String,
      required: true,
    },
    numConvites: {
      type: Number,
      required: true,
    },
    responsavelNome: {
      type: String,
      required: true,
    },
    responsavelCelular: {
      type: Number,
      required: true,
    },
    responsavelEmail: {
      type: String,
      required: true,
    },
    isEventStarted: {
      type: Boolean,
      required: true,
    },
    listaConvidados: [inviteesSchema],
  },
  {
    timestamps: true,
  }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
