import Link from "next/link";
import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  Row,
  Col,
  Stack,
  Alert,
} from "react-bootstrap";
import axios from "axios";

const RegisterPage = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [alert, setAlert] = useState<string>();
  const [successAlert, setSuccessAlert] = useState<boolean>();

  const handleforgotLogin = async () => {
    if (email === null) {
      setAlert("Adicione um email válido.");
    } else {
      try {
        //   await axios.post("http://localhost:8080/api/user/register", email);

        setSuccessAlert(true);
      } catch (error) {
        setAlert(`Email não encontrado. ${error.message}`);
      }
    }
  };

  return (
    <Row>
      <Col className="p-3 m-3 justify-content-center" sm={10} lg={5}>
        <Form>
          {successAlert && (
            <Alert variant="success">
              O link de recuperação de senha foi enviado no email.
            </Alert>
          )}
          <h3>Entre seu email cadastrado na Evemtz</h3>
          <FormLabel>E-mail</FormLabel>
          <FormControl
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            className="mb-3"
          />

          {alert && <Alert variant="danger">{alert}</Alert>}
        </Form>

        <Stack>
          <Button onClick={handleforgotLogin} className="my-3">
            Cadastre-se
          </Button>
        </Stack>
        <Stack
          direction="horizontal"
          gap={5}
          className="justify-content-center"
        >
          <Link href="/login">
            <a>Já possui conta? Entrar</a>
          </Link>
        </Stack>
      </Col>
      <Col
        style={{
          backgroundColor: "#f29616",
          height: "710px",
        }}
        sm={12}
        lg={6}
        className="d-none d-lg-block"
      ></Col>
    </Row>
  );
};

export default RegisterPage;
