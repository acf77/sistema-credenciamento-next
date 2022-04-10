import { useEffect, useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";
import Header from "../components/Header";

import { HiQrcode, HiPlusCircle } from "react-icons/hi";

import EventsCard from "../components/EventsCard";
import { useSelector } from "react-redux";

export const HomePage = ({ data }) => {
  const [eventList, setEventList] = useState();

  // const stateFromRedux = useSelector((state) => state.events);
  // const { loading } = stateFromRedux;

  useEffect(() => {
    setEventList(data);
  }, [data]);

  return (
    <>
      <Header />
      <Container className="my-3">
        {/* <h1 className="logo">EVEMTZ</h1> */}
        <Stack direction="horizontal" gap={2}>
          <Link href="/novo-evento">
            <Button>
              <HiPlusCircle /> Criar evento
            </Button>
          </Link>
          <Link href="/QrReader">
            <Button>
              <HiQrcode /> Ler QR Code
            </Button>
          </Link>
        </Stack>
        {eventList &&
          eventList.map((event) => <EventsCard key={event._id} {...event} />)}
      </Container>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:8080/api/events/");

  return {
    props: { data },
  };
};

export default HomePage;
