import mongoose from "mongoose";
import dotenv from "dotenv";

import Event from "../../../../db/models/eventSchema";
import { IDBProvider } from "../../../providers/IDBProvider";
import { ICreateEventRequestDTO } from "../CreateEventUseCaseDTO";

dotenv.config();

export class MongoDBProvider implements IDBProvider {
  private connect: any;

  async saveEvent(event: ICreateEventRequestDTO): Promise<void> {
    try {
      this.connect = await mongoose.connect(process.env.MONGO_URI);
      console.log(`MongoDB connected: ${this.connect.connection.host}`);
    } catch (error) {
      console.log(error.message || "Unable to connect to MongoDB. Try again.");
    }

    await Event.create(event);
  }
}
