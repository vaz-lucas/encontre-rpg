import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Evento } from "../types/evento";

export function useEventos() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEventos() {
      const { data, error } = await supabase.from("events").select("*");

      if (error) {
        setError(error.message);
      } else {
        setEventos(data as Evento[]);
      }
      setLoading(false);
    }

    fetchEventos();
  }, []);

  return { eventos, loading, error };
}
