import Link from "next/link";
import React from "react";
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  Row,
  Col,
  Stack,
} from "react-bootstrap";

// import { Container } from './styles';

const LoginPage = () => {
  return (
    <Row>
      <Col
        style={{
          backgroundColor: "#f29616",
          height: "710px",
        }}
        sm={12}
        lg={6}
        className="d-none d-lg-block"
      ></Col>
      <Col className="p-3 m-3 justify-content-center" sm={10} lg={5}>
        <Form>
          <FormLabel>Login</FormLabel>
          <FormControl type="email" placeholder="E-mail" className="my-3" />
          <FormControl type="password" placeholder="Senha" />
        </Form>
        <Stack>
          <Button className="my-3">Login</Button>
        </Stack>
        <Stack
          direction="horizontal"
          gap={5}
          className="justify-content-center"
        >
          <Link href="/recuperar-senha">
            <a>Esqueci a senha</a>
          </Link>
          <Link href="/registrar">
            <a>Criar uma conta</a>
          </Link>
        </Stack>
      </Col>
    </Row>
  );
};

export default LoginPage;
