import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  Nav,
  Navbar,
  Container,
  Stack,
  Button,
  DropdownButton,
} from "react-bootstrap";
import Link from "next/link";

import { HiUserCircle, HiLogout } from "react-icons/hi";

const Header = () => {
  const redirect = useRouter();

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    setUserInfo(userInfo);
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("userInfo");
    setUserInfo();
    window.location.replace("http://localhost:3000/login");
  };

  return (
    <header>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Link href="/">
            <h3 style={{ cursor: "pointer" }} className="logo">
              EVEMTZ
            </h3>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {userInfo && (
                <>
                  <HiUserCircle size={40} />
                  <Stack direction="horizontal" gap={3}>
                    <span>{userInfo && userInfo.nome}</span>
                    <DropdownButton
                      title=""
                      style={{ width: 50 }}
                      variant="primary"
                    >
                      <a
                        style={{ padding: 5, cursor: "pointer" }}
                        onClick={handleLogout}
                      >
                        Sair
                      </a>
                    </DropdownButton>
                  </Stack>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
