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

const RegisterPage = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [phone, setPhone] = useState<number>();
  const [password, setPassword] = useState<string>();
  const [repeatPassword, setRepeatPassword] = useState<string>();

  const handleRegister = () => {};

  return (
    <Row>
      <Col className="p-3 m-3 justify-content-center" sm={10} lg={5}>
        <Form onSubmit={handleRegister}>
          <h3>Login</h3>
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
          {password !== repeatPassword ? (
            <Alert variant="danger">Senhas não são iguais.</Alert>
          ) : (
            <Alert variant="success">Senhas digitadas são iguais.</Alert>
          )}
        </Form>

        <Stack>
          <Button
            disabled={password !== repeatPassword}
            type="submit"
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
          <Link href="/recuperar-senha">
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
