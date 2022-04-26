import { useState, useEffect } from "react";

import axios from "axios";

import { ListEventProps } from "../@types/AddEventProps";

export default function useListEvents({ id }: ListEventProps) {
  const [response, setResponse] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const listEvents = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: `http://localhost:8080/api/event/all/${id}`,
          headers: {
            "Content-Type": "application/json",
          },
        });

        setResponse(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    listEvents();
  }, [id]);

  return { response, error, loading };
}
