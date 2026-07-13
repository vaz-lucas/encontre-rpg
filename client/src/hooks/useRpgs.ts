import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import type { Rpg } from "../types/rpg";

export function useRpgs() {
  const [rpgs, setRpgs] = useState<Rpg[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRpgs() {
      const { data, error } = await supabase.from("rpgs").select("*");

      if (error) {
        setError(error.message);
      } else {
        setRpgs(data as Rpg[]);
      }
      setLoading(false);
    }

    fetchRpgs();
  }, []);

  return { rpgs, loading, error };
}
