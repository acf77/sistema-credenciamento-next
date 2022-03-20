import { QrReader } from "react-qr-reader";
import { Button, Card, Container, Stack } from "react-bootstrap";
import { useState } from "react";

const QRReader = () => {
  const [qrData, setQrData] = useState();

  return (
    <Container>
      {qrData ? (
        <Stack gap={3}>
          <Card className="p-5 m-5">
            {qrData}
            <Button onClick={() => setQrData()}>Retornar</Button>
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
                setQrData(result.text);
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

export default QRReader;
