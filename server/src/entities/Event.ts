import { uuid } from "uuidv4";

export class Event {
  public readonly id: string;

  public name: string;
  public date: string;
  public location: string;
  public numInvitees: number;
  public eventOwnerName: string;
  public eventOwnerPhone: number;
  public eventOwnerEmail: string;
  public isEventStarted: boolean;
  public inviteeList: {
    name?: string;
    phone?: number;
    email?: string;
    invites?: number;
  };

  constructor(props: Omit<Event, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
