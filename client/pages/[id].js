import { useState } from "react";
import Link from "next/link";
import { Container, Card, Button, Stack, FormControl } from "react-bootstrap";
import { HiUserAdd, HiHome } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

import InviteeCard from "../components/InviteeCard";
import EventInfoCard from "../components/EventInfoCard";
import AddInviteeDialog from "../components/AddInviteeDialog";

export const StartedEventPage = ({ eventos }) => {
  const [eventData, setEventData] = useState(eventos);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isEventStarted, setIsEventStarted] = useState(false);

  const handleAddInvitee = () => setIsOpen(true);
  const onDismiss = () => setIsOpen(false);

  const handleEventStart = () => {
    setIsEventStarted(!isEventStarted);
  };

  const id = { event_id: eventData._id };

  return (
    <Container className="my-3">
      <Link href="/">
        <Button className="p-3 m-3">
          <HiHome /> Página inicial
        </Button>
      </Link>
      <Card className="p-3 m-3">
        <Stack direction="horizontal" gap={3}>
          <EventInfoCard {...eventData} />
          <Button
            className="ms-auto"
            variant={isEventStarted ? "danger" : "success"}
            onClick={handleEventStart}
          >
            {isEventStarted ? "Evento iniciado!" : "Iniciar evento"}
          </Button>
        </Stack>
      </Card>
      <h4 className="mx-3">Lista de convidados</h4>
      <AddInviteeDialog isOpen={isOpen} onDismiss={onDismiss} {...eventos} />
      <Stack direction="horizontal">
        <FormControl
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 m-3"
          placeholder="Buscar convidados"
        />
        <Button className="m-3" onClick={handleAddInvitee}>
          <HiUserAdd /> Adicionar convidado
        </Button>
      </Stack>

      {search
        ? eventData.listaConvidados
            .filter((c) => {
              return c.nome.toLowerCase().includes(search) || c.nome === search;
            })
            .map((c) => (
              <InviteeCard
                key={eventos.id}
                {...c}
                {...id}
                {...isEventStarted}
              />
            ))
        : eventData.listaConvidados.map((c) => (
            <InviteeCard key={eventos.id} {...c} {...id} {...isEventStarted} />
          ))}
    </Container>
  );
};

export default StartedEventPage;

export const getServerSideProps = async ({ params: { id } }) => {
  const data = await fetch(`http://localhost:8080/api/events/${id}`);
  const eventos = await data.json();

  return {
    props: { eventos },
  };
};
