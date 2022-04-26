import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

import {
  Container,
  Card,
  Button,
  Stack,
  FormControl,
  Alert,
} from "react-bootstrap";

import { HiUserAdd, HiHome } from "react-icons/hi";

import InviteeCard from "../components/InviteeCard";
import EventInfoCard from "../components/EventInfoCard";
import AddInviteeDialog from "../components/AddInviteeDialog";
import { Loader } from "../components/Loader";

export const StartedEventPage = ({ data, eventId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const event_id = { event_id: eventId };

  const handleAddInvitee = () => setIsOpen(true);
  const onDismiss = () => setIsOpen(false);

  const handleEventStart = async () => {
    try {
      setLoading(true);
      const { data } = await axios({
        method: "PUT",
        url: `http://localhost:8080/api/event/start/${eventId}`,
      });
      data && setLoading(false);
      window.location.reload();
    } catch (error) {
      setError(`Não foi possível iniciar o evento. ${error}`);
      setLoading(false);
    }
  };

  return (
    <Container className="my-3">
      {/* Home button */}
      <Link href="/">
        <Button className="p-3 m-3">
          <HiHome /> Página inicial
        </Button>
      </Link>

      {/* Event info card */}
      <Card className="p-3 m-3">
        <EventInfoCard {...data} />
        <Button
          variant={data.isEventStarted ? "danger" : "success"}
          onClick={handleEventStart}
          disabled={data.isEventStarted}
          className="mb-3"
        >
          {loading && <Loader />}
          {data.isEventStarted ? "Evento iniciado!" : "Iniciar evento"}
        </Button>
        {error && <Alert variant="danger">{error}</Alert>}
        <Button
          variant={data.isEventStarted ? "primary" : "success"}
          disabled={!data.isEventStarted}
          onClick={handleEventStart}
        >
          Finalizar evento
        </Button>
      </Card>
      <h4 className="mx-3">Lista de convidados</h4>
      <AddInviteeDialog
        isOpen={isOpen}
        onDismiss={onDismiss}
        {...data}
        {...event_id}
      />

      {/* Search invitee box */}
      <Stack direction="horizontal">
        <FormControl
          onChange={(e) => setSearch(e.target.value)}
          className="p-3 m-3"
          placeholder="Buscar convidados"
        />
        <Button
          className="m-3"
          disabled={data.isEventStarted}
          onClick={handleAddInvitee}
        >
          <HiUserAdd /> Adicionar convidado
        </Button>
      </Stack>

      {search
        ? data.listaConvidados
            .filter((c) => {
              return c.nome.toLowerCase().includes(search) || c.nome === search;
            })
            .map((c) => (
              <InviteeCard key={eventId} {...data} {...c} {...event_id} />
            ))
        : data &&
          data.listaConvidados.map((c) => (
            <InviteeCard {...data} {...c} {...event_id} />
          ))}
    </Container>
  );
};

export default StartedEventPage;

export const getServerSideProps = async ({ params: { id } }) => {
  const eventId = id;

  const { data } = await axios.get(
    `http://localhost:8080/api/event/${eventId}`
  );

  return {
    props: { data, eventId },
  };
};
