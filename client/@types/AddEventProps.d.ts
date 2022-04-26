// export interface IInviteeProps {
//   nome: string;
//   celular: string;
//   email: string;
//   senhas: number;
// }

// export interface IEventProps {
//   nome: string;
//   data: string;
//   local: string;
//   numConvites: number;
//   responsavelNome: string;
//   responsavelCelular: number;
//   responsavelEmail: string;
//   isEventStarted: boolean;
//   listaConvidados: IInviteeProps[];
// }

export interface ListEventProps {
  id: string;
}

export interface UseGetProps {
  link: string;
  body?: string;
}
