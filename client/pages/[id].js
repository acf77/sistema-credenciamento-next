import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

import { Container, Card, Button, Stack, FormControl } from "react-bootstrap";

import { HiUserAdd, HiHome } from "react-icons/hi";

import InviteeCard from "../components/InviteeCard";
import EventInfoCard from "../components/EventInfoCard";
import AddInviteeDialog from "../components/AddInviteeDialog";
import { Loader } from "../components/Loader";

export const StartedEventPage = ({ data, eventId }) => {
  // const dispatch = useDispatch();

  const [eventList, setEventList] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [eventIdState, setEventIdState] = useState({ eventId: eventId });

  useEffect(() => {
    setEventList(data);
    // console.log(data);
  }, [data, eventList]);

  // const { isLoading } = useSelector((state) => state);

  const handleAddInvitee = () => setIsOpen(true);
  const onDismiss = () => setIsOpen(false);

  const handleEventStart = async () => {
    await axios({
      method: "PUT",
      url: `http://localhost:8080/api/event/start/${data._id}`,
    });
    window.location.reload();
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
          variant={data.isEventStarted ? "danger" : "success"}
          onClick={handleEventStart}
          disabled={data.isEventStarted}
          className="mb-3"
        >
          {data.isEventStarted ? "Evento iniciado!" : "Iniciar evento"}
        </Button>
        <Button
          variant={data.isEventStarted ? "primary" : "success"}
          disabled={!data.isEventStarted}
        >
          Finalizar evento
        </Button>
      </Card>
      <h4 className="mx-3">Lista de convidados</h4>
      <AddInviteeDialog
        isOpen={isOpen}
        onDismiss={onDismiss}
        {...eventList}
        {...eventIdState}
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
        ? eventList.listaConvidados
            .filter((c) => {
              return c.nome.toLowerCase().includes(search) || c.nome === search;
            })
            .map((c) => <InviteeCard key={eventId} {...c} {...eventIdState} />)
        : eventList &&
          eventList.listaConvidados.map((c) => (
            <InviteeCard {...c} {...eventIdState} />
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
