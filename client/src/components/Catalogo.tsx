import { mockRpgs } from "../data/mockRpgs";
import { RpgCard } from "./RpgCard";

export function Catalogo() {
  return (
    <section className="p-7">
      <h2 className="text-4xl font-bold mb-4 text-center">Catálogo</h2>
      <div className="flex flex-wrap gap-4 alingn-stretch justify-center">
        {mockRpgs.map((rpg) => (
          <RpgCard key={rpg.id} rpg={rpg} />
        ))}
      </div>
    </section>
  );
}