import { ICreateEventRequestDTO } from "../useCases/CreateEvent/CreateEventUseCaseDTO";

export interface IDBProvider {
  saveEvent(event: ICreateEventRequestDTO): Promise<void>;
}
