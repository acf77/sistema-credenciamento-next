import Link from "next/link";
import { Container, Card, Button, Stack, Form } from "react-bootstrap";
import QRCode from "react-qr-code";

import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const StartedEventPage = ({ eventos }) => {
  return (
    <Container className="my-3">
      <Link href="/">
        <Button>Página inicial</Button>
      </Link>
      <Card className="p-3 m-3">
        <Stack direction="horizontal" gap={3}>
          <Stack>
            <h2>{eventos[0].nome}</h2>
            <span>Data: {eventos[0].data}</span>
            <span>Local: {eventos[0].local}</span>
            <span>
              Total de convidados: {eventos[0].listaConvidados.length}
            </span>
          </Stack>
          <Button variant="success">Iniciar evento</Button>
        </Stack>
      </Card>
      <h4>Lista de convidados</h4>
      {eventos[0].listaConvidados.map((c) => (
        <Card className="p-3 m-3">
          <Stack direction="horizontal">
            <Stack>
              <span>
                <strong>Nome: </strong>
                {c.nome}
              </span>
              <span>
                <strong>Celular: </strong>
                <FaWhatsapp />{" "}
                <a
                  target="_blank"
                  href={`https://api.whatsapp.com/send?phone=55${c.celular}`}
                >
                  {c.celular}
                </a>
              </span>
              <span>
                <strong>Email: </strong>
                <HiOutlineMail />{" "}
                <a target="_blank" href={`mailto:${c.email}`}>
                  {c.email}
                </a>
              </span>
            </Stack>

            <Stack direction="horizontal" gap={3}>
              {/* <QRCode value={`${c.email}`} /> */}
              <span>Presente?</span> <Form.Check />
            </Stack>
          </Stack>
        </Card>
      ))}
    </Container>
  );
};

export default StartedEventPage;

export const getServerSideProps = async ({ params: { id } }) => {
  const data = await fetch(`http://localhost:3000/api/event/${id}`);
  const eventos = await data.json();

  return {
    props: { eventos },
  };
};
