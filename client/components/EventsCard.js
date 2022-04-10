import Link from "next/link";
import { Button, Card, Stack } from "react-bootstrap";

import { HiEye } from "react-icons/hi";

import "@reach/dialog/styles.css";

export const EventsCard = (event) => {
  return (
    <Card className="p-3 m-3">
      <Stack direction="horizontal">
        <Stack>
          <h5>{event.nome}</h5>
          <span>Data: {event.data}</span>
          <span>Local: {event.local}</span>
          <span>Total de convidados: {event.listaConvidados.length}</span>
        </Stack>
        <Stack gap={3}>
          <Link href={`/${event._id}`}>
            <Button variant="success">
              <HiEye /> Visualizar evento
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Card>
  );
};

export default EventsCard;
