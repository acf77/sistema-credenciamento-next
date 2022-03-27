import { Card, Stack } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const EventInfoCard = (props) => {
  return (
    <Stack direction="horizontal">
      <Stack>
        <h2>{props.nome}</h2>
        <span>Data: {props.data}</span>
        <span>Local: {props.local}</span>
        <span>Total de convidados: {props.listaConvidados.length}</span>
        <Card className="p-3 my-3">
          <h5 className="my-2">Responsavel do evento</h5>
          <span>
            <strong>Nome: </strong>
            {props.responsavelNome}
          </span>
          <span>
            <strong>Celular: </strong>
            <FaWhatsapp />{" "}
            <a
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=55${props.responsavelCelular}`}
            >
              {props.responsavelCelular}
            </a>
          </span>
          <span>
            <strong>Email: </strong>
            <HiOutlineMail />{" "}
            <a target="_blank" href={`mailto:${props.responsavelEmail}`}>
              {props.responsavelEmail}
            </a>
          </span>
        </Card>
      </Stack>
    </Stack>
  );
};

export default EventInfoCard;
