import { useState } from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";

import axios from "axios";

import {
  Button,
  Container,
  Form,
  FormControl,
  FormLabel,
} from "react-bootstrap";

import { useDispatch } from "react-redux";

import { withAuth } from "../utils/withAuth";
// import { IEventProps } from "../@types/AddEventProps";
import useAddEvent from "../hooks/useListEvents";

const AddEventPage = () => {
  const [title, setTitle] = useState<string>();
  const [date, setDate] = useState<string>();
  const [local, setLocal] = useState<string>();
  const [amountInvitees, setAmountInvitees] = useState<number>();
  const [eventContactName, setEventContactName] = useState<string>();
  const [eventContactPhone, setEventContactPhone] = useState<number>();
  const [eventContactEmail, setEventContactEmail] = useState<string>();

  const { id } = JSON.parse(sessionStorage.getItem("userInfo"));

  const eventData = {
    user: id,
    nome: title,
    data: date,
    local: local,
    numConvites: amountInvitees,
    responsavelNome: eventContactName,
    responsavelCelular: eventContactPhone,
    responsavelEmail: eventContactEmail,
    isEventStarted: false,
    listaConvidados: [],
  };

  const handleEventSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await axios({
        method: "POST",
        url: "http://localhost:8080/api/events",
        data: JSON.stringify(eventData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error, error.message);
    }
  };

  return (
    <Container>
      {/* {loading && <span>Loading...</span>} */}
      {/* Home button */}
      <Link href="/">
        <Button className="p-3 m-3">
          <HiHome /> Página inicial
        </Button>
      </Link>
      <Form className="p-3 m-3" onSubmit={handleEventSubmit}>
        <h4>Criar novo evento</h4>
        <FormLabel>Titulo do evento</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e: any) => setTitle(e.target.value)}
          type="text"
        />
        <FormLabel>Data do evento</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e: any) => setDate(e.target.value)}
          type="date"
        />
        <FormLabel>Local do evento</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e: any) => setLocal(e.target.value)}
          type="text"
        />
        <FormLabel>Total de convidados</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e: any) => setAmountInvitees(e.target.value)}
          type="number"
        />
        <FormLabel>Responsavel do Evento</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e: any) => setEventContactName(e.target.value)}
          type="text"
        />
        <FormLabel>Contato do responsavel do evento</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e: any) => setEventContactPhone(e.target.value)}
          type="phone"
        />
        <FormLabel>Email do responsavel do evento</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e: any) => setEventContactEmail(e.target.value)}
          type="email"
        />
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
};

export default withAuth(AddEventPage);
