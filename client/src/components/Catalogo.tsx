import { mockRpgs } from "../data/mockRpgs";
import { RpgCard } from "./rpgCard";

export function Catalogo() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Catálogo</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockRpgs.map((rpg) => (
          <RpgCard key={rpg.id} rpg={rpg} />
        ))}
      </div>
    </section>
  );
}