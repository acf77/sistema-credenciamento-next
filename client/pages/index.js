import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import axios from "axios";

import EventsCard from "../components/EventsCard";
import Header from "../components/Header";

export const HomePage = () => {
  const [eventData, seEventData] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      const { data } = await axios.get("http://localhost:8080/api/events/");
      seEventData(data);
    };
    getEvents();
  }, []);

  return (
    <>
      {/* <Header /> */}
      <Container className="my-3">
        <h1>Gerasom</h1>
        <Button>Criar evento</Button>
        {eventData.map((event) => (
          <EventsCard key={event.id} {...event} />
        ))}
      </Container>
    </>
  );
};

export default HomePage;

// export const getServerSideProps = async () => {
//   const data = await fetch("http://localhost:3000/api/server");
//   const { eventos } = await data.json();

//   return {
//     props: { eventos },
//   };
// };
