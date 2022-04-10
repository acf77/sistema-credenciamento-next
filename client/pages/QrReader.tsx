import { QrReader, OnResultFunction } from "react-qr-reader";
import { Container, Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import QrResultCard from "../components/QrResultCard";

const Qr = () => {
  const [qrData, setQrData] = useState<string>();

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
        <QrResultCard onClick={setQrData} {...qrData} />
      ) : (
        <Container style={{ width: 800 }}>
          <Card body style={{ margin: 5 }}>
            <h4>Posicione o QR code em frente a câmera e aguarde a leitura</h4>
            <li>Segure firmemente o QR code, sem tremer</li>
            <li>Aproxime bem o QR code para garantir uma boa visualização</li>
            <QrReader
              scanDelay={3000}
              // @ts-ignore
              onResult={(result: string, error: string) => {
                if (result) {
                  // @ts-ignore
                  handleQrCheckIn({ qr: result?.text });
                }
                if (error) {
                  console.error(error);
                }
              }}
            />
          </Card>
        </Container>
      )}
    </Container>
  );
};

export default Qr;
