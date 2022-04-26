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
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<number>();
  const [password, setPassword] = useState<string>();
  const [repeatPassword, setRepeatPassword] = useState<string>();
  const [alert, setAlert] = useState<string>();
  const [successAlert, setSuccessAlert] = useState<boolean>();

  const handleRegister = async () => {
    const registerData = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      events: [],
    };

    try {
      await axios.post("http://localhost:8080/api/user/register", registerData);

      setSuccessAlert(true);
    } catch (error) {
      setAlert(
        `Email já registrado. Tente novamente com outro email ou clique em Esqueci a senha. ${error.message}`
      );
    }
  };

  return (
    <Row>
      <Col className="p-3 m-3 justify-content-center" sm={10} lg={5}>
        <Form>
          {successAlert && (
            <Alert variant="success">
              Usuário registardo com sucesso! <Link href="/">Entrar</Link>
            </Alert>
          )}
          <h3>Registre-se</h3>
          <FormLabel>Nome</FormLabel>
          <FormControl
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            className="mb-3"
          />
          <FormLabel>E-mail</FormLabel>
          <FormControl
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            className="mb-3"
          />
          <FormLabel>Celular</FormLabel>
          <FormControl
            //@ts-ignore
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            placeholder="Celular com DDD"
            className="mb-3"
          />
          <FormLabel>Senha</FormLabel>
          <FormControl
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            className="mb-3"
          />
          <FormLabel>Repita a senha</FormLabel>
          <FormControl
            onChange={(e) => setRepeatPassword(e.target.value)}
            type="password"
            placeholder="Repita a senha"
            className="mb-3"
          />
          {password !== repeatPassword && (
            <Alert variant="danger">Senhas não são iguais.</Alert>
          )}

          {alert && <Alert variant="danger">{alert}</Alert>}
        </Form>

        <Stack>
          <Button
            disabled={password !== repeatPassword}
            onClick={handleRegister}
            className="my-3"
          >
            Cadastre-se
          </Button>
        </Stack>
        <Stack
          direction="horizontal"
          gap={5}
          className="justify-content-center"
        >
          <Link href="/esquexi-senha">
            <a>Esqueci a senha</a>
          </Link>
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
