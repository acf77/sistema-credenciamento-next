export interface ICreateEventRequestDTO {
  name: string;
  date: string;
  location: string;
  numInvitees: number;
  eventOwnerName: string;
  eventOwnerPhone: number;
  eventOwnerEmail: string;
  isEventStarted: boolean;
  inviteeList: {
    name?: string;
    phone?: number;
    email?: string;
    invites?: number;
  };
}
