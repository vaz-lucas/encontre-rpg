import { useRpgs } from "../hooks/useRpgs";
import { RpgCard } from "./RpgCard";

export function Catalogo() {
  const { rpgs, loading, error } = useRpgs();

  return (
    <section className="font-mono p-7">
      <h2 className="text-4xl font-bold mb-7 text-center">Catálogo</h2>
      {loading && <p className="text-center">Carregando...</p>}
      {error && (
        <p className="text-center text-red-500">
          Ocorreu um erro, tente novamente mais tarde
        </p>
      )}
      <div className="flex flex-wrap gap-4 alingn-stretch justify-center">
        {rpgs.map((rpg) => (
          <RpgCard key={rpg.id} rpg={rpg} />
        ))}
      </div>
    </section>
  );
}
