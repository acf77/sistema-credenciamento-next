import { Container, Stack, Card, Button } from "react-bootstrap";
import { HiOutlineCheckCircle } from "react-icons/hi";

const QrResultCard = (qrData, setQrData) => {
  return (
    <Container>
      <Stack gap={3}>
        <Card className="p-5 m-5 mx-auto">
          <h4 style={{ textAlign: "center" }}>
            Seja bem-vindo, {qrData.nome}!
          </h4>
          <HiOutlineCheckCircle style={{ alignSelf: "center" }} size={60} />
          <span className="my-3" style={{ textAlign: "center" }}>
            Voce tem direito a <strong>{qrData.senhas}</strong> senhas.
          </span>
          <Button className="my-3" onClick={() => setQrData()}>
            Ler outro QR Code
          </Button>
          {/* {setTimeout(() => {
            setQrData();
          }, 10000)} */}
        </Card>
      </Stack>
    </Container>
  );
};

export default QrResultCard;
