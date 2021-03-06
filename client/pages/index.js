import { useEffect, useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import Link from "next/link";
import axios from "axios";

import { HiQrcode, HiPlusCircle } from "react-icons/hi";

import EventsCard from "../components/EventsCard";
import { withAuth } from "../utils/withAuth";
import { Loader } from "../components/Loader.js";

import useListEvents from "../hooks/useListEvents";

export const HomePage = () => {
  const userId = JSON.parse(sessionStorage.getItem("userInfo"));
  const { loading, response, error } = useListEvents(userId);

  return (
    <>
      <Container className="my-3">
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
        {loading && <Loader />}
        {/* {response && Array(response).map((e) => <span>{e.nome}</span>)} */}
        {response &&
          response.map((event) => <EventsCard key={event._id} {...event} />)}
      </Container>
    </>
  );
};

// export const getServerSideProps = async () => {
//   const { data } = await axios.get("http://localhost:8080/api/event/");

//   return {
//     props: { data },
//   };
// };

export default withAuth(HomePage);
