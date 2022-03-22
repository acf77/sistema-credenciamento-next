import { QrReader } from "react-qr-reader";
import { Button, Card, Container, Stack } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const Qr = () => {
  const [qrData, setQrData] = useState();

  const handleQrCheckIn = async ({ qr }) => {
    const regData = qr.split(/(\s)/);
    const id = { event_id: regData[0], invitee_id: regData[2] };

    const { data } = await axios.get(
      `http://localhost:8080/api/event/${id.event_id}/invitee/${id.invitee_id}`
    );

    setQrData(data[0]);
  };

  return (
    <Container>
      {qrData ? (
        <Stack gap={3}>
          <Card className="p-5 m-5">
            <h4>Seja bem-vindo, {qrData.nome}! </h4>
            <span className="my-3">
              Voce tem direito a {qrData.senhas} senhas.
            </span>
            <Button className="my-3" onClick={() => setQrData()}>
              Retornar
            </Button>
            {setTimeout(() => {
              setQrData();
            }, 10000)}
          </Card>
        </Stack>
      ) : (
        <Container style={{ width: 800 }}>
          <QrReader
            scanDelay={1000}
            // constraints={{ facingMode: "user" }}
            onResult={(result, error) => {
              if (result) {
                handleQrCheckIn({ qr: result.text });
              }

              if (error) {
                console.error(error);
              }
            }}
          />
        </Container>
      )}
      {/* <QrCodeResultDialog isOpen={isOpen} onDismiss={onDismiss} {...qrData} /> */}
    </Container>
  );
};

export default Qr;
