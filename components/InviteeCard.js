import { Card, Stack, Form, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiTrash } from "react-icons/hi";

const InviteeCard = (c, isEventStarted) => {
  return (
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
          <span>Presente?</span> <Form.Check disabled={isEventStarted} />
          <Button variant="danger">
            <HiTrash />
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default InviteeCard;
