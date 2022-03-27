import { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormLabel,
} from "react-bootstrap";

import { useDispatch } from "react-redux";

import { addEvent } from "../redux/actions/eventActions";

const AddEventPage = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [local, setLocal] = useState();
  const [invitees, setInvitees] = useState(0);
  const [eventContactName, setEventContactName] = useState();
  const [eventContactPhone, setEventContactPhone] = useState();
  const [eventContactEmail, setEventContactEmail] = useState();

  const eventData = {
    nome: title,
    data: date,
    local: local,
    numConvites: invitees,
    responsavelNome: eventContactName,
    responsavelCelular: eventContactPhone,
    responsavelEmail: eventContactEmail,
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    dispatch(addEvent(eventData));
  };

  return (
    <Container>
      <Form className="p-3 m-3" onSubmit={handleEventSubmit}>
        <h4>Criar novo evento</h4>
        <FormLabel>Titulo do evento</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e) => setTitle(e.target.value)}
          type="text"
        />
        <FormLabel>Data do evento</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e) => setDate(e.target.value)}
          type="date"
        />
        <FormLabel>Local do evento</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e) => setLocal(e.target.value)}
          type="text"
        />
        <FormLabel>Total de convidados</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e) => setInvitees(e.target.value)}
          type="number"
        />
        <FormLabel>Responsavel do Evento</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e) => setEventContactName(e.target.value)}
          type="text"
        />
        <FormLabel>Contato do responsavel do evento</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e) => setEventContactPhone(e.target.value)}
          type="phone"
        />
        <FormLabel>Email do responsavel do evento</FormLabel>
        <FormControl
          className="mb-3"
          onChange={(e) => setEventContactEmail(e.target.value)}
          type="email"
        />
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
};

export default AddEventPage;
