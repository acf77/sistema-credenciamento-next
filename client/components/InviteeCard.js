import { useState } from "react";
import { Card, Stack, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiTrash, HiQrcode, HiPrinter } from "react-icons/hi";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";
import BadgeDialog from "./BadgeDialog";

const InviteeCard = (props) => {
  const [emailSent, setEmailSent] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  console.log(props);

  const deleteInviteeProps = { eventId: props.event_id, _id: props._id };

  const handleQrCode = async () => {
    await axios.post(`http://localhost:8080/api/qrcode/email`, props);

    setEmailSent(true);
  };

  const handleDeleteInvitee = async () => {
    confirmAlert({
      title: "Remover convidado",
      message: `Voce quer mesmo remover o convidado ${props.nome}?`,
      buttons: [
        {
          label: "Sim",
          onClick: async function () {
            try {
              await axios({
                method: "DELETE",
                url: "http://localhost:8080/api/event/invitee",
                data: deleteInviteeProps,
              });
              window.location.reload();
            } catch (error) {
              console.error(error);
            }
          },
        },
        {
          label: "Cancelar",
          onClick: null,
        },
      ],
    });
  };

  const handleBadgeDialog = () => setIsOpen(true);
  const onDismiss = () => setIsOpen(false);

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
          <Button onClick={handleBadgeDialog}>
            <HiPrinter /> Gerar crachá
          </Button>
          <BadgeDialog
            isOpen={isOpen}
            onDismiss={onDismiss}
            name={props.nome}
          />
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
