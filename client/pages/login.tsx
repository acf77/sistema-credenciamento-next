import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  Row,
  Col,
  Stack,
  Alert,
} from "react-bootstrap";

import axios from "axios";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    localStorage.getItem("userInfo") && redirect.push("/");
  });

  const redirect = useRouter();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [alert, setAlert] = useState<string>();

  const handleLogin = async () => {
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/user/login",
        loginData
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      redirect.push("/");
    } catch (error) {
      setAlert(`Email ou senha incorretos. Tente novamente. ${error.message}`);
    }
  };

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
          {alert ? <Alert variant="danger">{alert}</Alert> : null}
          <h3>Login</h3>
          <FormControl
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            className="my-3"
          />
          <FormControl
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
          />
        </Form>
        <Stack>
          <Button onClick={handleLogin} className="my-3">
            Login
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
          <Link href="/registrar">
            <a>Criar uma conta</a>
          </Link>
        </Stack>
      </Col>
    </Row>
  );
};

export default LoginPage;
