import { Event } from "../entities/Event";

export interface IEventRepository {
  save(event: Event): Promise<void>;
}
