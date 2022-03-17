import { Button, Container } from "react-bootstrap";

import EventsCard from "../components/EventsCard";

export const HomePage = ({ eventos }) => {
  return (
    <Container className="my-3">
      <h1>Gerasom</h1>
      <Button>Criar evento</Button>
      {eventos.map((event) => (
        <EventsCard {...event} />
      ))}
    </Container>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const data = await fetch("http://localhost:3000/api/server");
  const { eventos } = await data.json();

  return {
    props: { eventos },
  };
};
