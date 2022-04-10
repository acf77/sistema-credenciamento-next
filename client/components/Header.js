import { Nav, Navbar, Container } from "react-bootstrap";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Link href="/">
            <h3 className="logo">EVEMTZ</h3>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
