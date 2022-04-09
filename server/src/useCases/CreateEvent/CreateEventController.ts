import { Request, Response } from "express";
import { CreateEventUseCase } from "./CreateEventUseCase";

export class CreateEventController {
  constructor(private createEventUseCase: CreateEventUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      date,
      location,
      numInvitees,
      eventOwnerName,
      eventOwnerPhone,
      eventOwnerEmail,
      isEventStarted,
      inviteeList,
    } = request.body;

    try {
      await this.createEventUseCase.execute({
        name,
        date,
        location,
        numInvitees,
        eventOwnerName,
        eventOwnerPhone,
        eventOwnerEmail,
        isEventStarted,
        inviteeList,
      });

      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({
        error: error.message || "An unexpected error happened.",
      });
    }
  }
}
