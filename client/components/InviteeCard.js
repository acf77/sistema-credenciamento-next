import { Card, Stack, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import {
  HiOutlineMail,
  HiTrash,
  HiQrcode,
  HiOutlineCheckCircle,
} from "react-icons/hi";

import axios from "axios";
import { useState } from "react";

const InviteeCard = (props) => {
  const [emailSent, setEmailSent] = useState(false);

  const handleQrCode = async () => {
    await axios.post(`http://localhost:8080/api/qrcode/email`, props);

    setEmailSent(true);
    console.log(props);

    // <QRCode value={`${props.event_id}, ${props._id}`} />;
  };

  const handleDeleteInvitee = async () => {
    try {
      await axios.post("http://localhost:8080/api/event/invitee", props);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card className="p-3 m-3">
      <Stack direction="horizontal">
        <Stack>
          <span>
            <strong>Nome: </strong>
            {props.nome}
          </span>
          <span>
            <strong>Celular: </strong>
            <FaWhatsapp />{" "}
            <a
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=55${props.celular}`}
            >
              {props.celular}
            </a>
          </span>
          <span>
            <strong>Email: </strong>
            <HiOutlineMail />{" "}
            <a target="_blank" href={`mailto:${props.email}`}>
              {props.email}
            </a>
          </span>
        </Stack>

        <Stack direction="horizontal" gap={3}>
          <Button onClick={handleQrCode}>
            <HiQrcode /> Enviar QR Code
          </Button>
          {/* <span>Presente?</span> <Form.Check disabled={isEventStarted} /> */}
          <Button variant="danger" onClick={handleDeleteInvitee}>
            <HiTrash />
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default InviteeCard;
