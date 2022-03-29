import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import axios from "axios";

import EventsCard from "../components/EventsCard";
import { Loader } from "../components/Loader";
import { addEvent, listEvents } from "../redux/actions/eventActions";
import { storeWrapper } from "../redux/store";

export const HomePage = ({ data }) => {
  // const dispatch = useDispatch();

  const [eventList, setEventList] = useState();
  // const [isLoading, setIsLoading] = useState(true);

  // const { loading, eventList } = useSelector((state) => state);

  useEffect(() => {
    setEventList(data);
  }, [data]);

  return (
    <>
      <Container className="my-3">
        <h1>Gerasom</h1>
        <Link href="/novo-evento">
          <Button onClick={() => dispatch(addEvent())}>Criar evento</Button>
        </Link>
        {eventList &&
          eventList.map((event) => <EventsCard key={event.id} {...event} />)}
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
