import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import axios from "axios";

import { Container, Card, Button, Stack, FormControl } from "react-bootstrap";

import { HiUserAdd, HiHome } from "react-icons/hi";
import { useSelector } from "react-redux";

import InviteeCard from "../components/InviteeCard";
import EventInfoCard from "../components/EventInfoCard";
import AddInviteeDialog from "../components/AddInviteeDialog";
import { listEventDetails } from "../redux/actions/eventActions";
import { Loader } from "../components/Loader";

export const StartedEventPage = ({ data, eventId }) => {
  // const dispatch = useDispatch();

  const [eventList, setEventList] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    setEventList(data);
  }, [data]);

  // const { isLoading } = useSelector((state) => state);

  const handleAddInvitee = () => setIsOpen(true);
  const onDismiss = () => setIsOpen(false);

  const handleEventStart = () => {
    setIsEventStarted(!isEventStarted);
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
        <EventInfoCard {...eventList} />
        <Button
          variant={isEventStarted ? "danger" : "success"}
          onClick={() => console.log(eventData.listaConvidados)}
        >
          {isEventStarted ? "Evento iniciado!" : "Iniciar evento"}
        </Button>
      </Card>
      <h4 className="mx-3">Lista de convidados</h4>
      <AddInviteeDialog isOpen={isOpen} onDismiss={onDismiss} {...eventList} />

      {/* Search invitee box */}
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
        ? eventList.listaConvidados
            .filter((c) => {
              return c.nome.toLowerCase().includes(search) || c.nome === search;
            })
            .map((c) => (
              <InviteeCard
                key={eventList.id}
                {...c}
                {...eventId}
                {...isEventStarted}
              />
            ))
        : eventList &&
          eventList.listaConvidados.map((c) => (
            <InviteeCard
              key={eventList.id}
              {...c}
              {...eventId}
              {...isEventStarted}
            />
          ))}
    </Container>
  );
};

export default StartedEventPage;

export const getServerSideProps = async ({ params: { id } }) => {
  const eventId = id;

  const { data } = await axios.get(
    `http://localhost:8080/api/events/${eventId}`
  );

  return {
    props: { data, eventId },
  };
};
