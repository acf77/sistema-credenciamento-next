import { IEventRepository } from "../../repositories/IEventRepository";
import { ICreateEventRequestDTO } from "./CreateEventUseCaseDTO";
import { Event } from "../../entities/Event";
// import { IMailProvider } from "../../providers/IMailProvider";

export class CreateEventUseCase {
  constructor(
    private eventRepository: IEventRepository
  ) // private mailProvider: IMailProvider
  {}

  async execute(data: ICreateEventRequestDTO) {
    const event = new Event(data);

    await this.eventRepository.save(event);
  }
}
