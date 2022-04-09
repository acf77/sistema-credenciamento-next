interface IAddress {
  email: string;
  name: string;
}

export interface IMessage {
  to: IAddress;
  from: string;
  subject: string;
  body: string;
}

export interface IMailProvider {
  sendMail(message: IMessage): Promise<void>;
}
