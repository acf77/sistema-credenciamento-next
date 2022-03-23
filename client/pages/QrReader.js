import { QrReader } from "react-qr-reader";
import { Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import QrResultCard from "../components/QrResultCard";

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
        <QrResultCard onClick={setQrData} {...qrData} />
      ) : (
        <Container style={{ width: 800 }}>
          <QrReader
            scanDelay={3000}
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
    </Container>
  );
};

export default Qr;
