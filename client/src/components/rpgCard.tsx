import type { Rpg } from "../types/rpg";

interface RpgCardProps {
  rpg: Rpg;
}

export function RpgCard({ rpg }: RpgCardProps) {
  return (
    <article className="border rounded-lg min-w-3xs overflow-hidden hover:shadow-lg transition-shadow lg:max-w-sm ">
      <img
        src={rpg.coverUrl}
        alt={`Capa de ${rpg.name}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold lg:text-lg">{rpg.name}</h3>
        <p className="text-sm text-gray-600 mt-1">por {rpg.author}</p>
        <p className="mt-2 text-sm">{rpg.description}</p>
        <div className="flex flex-wrap gap-1 mt-3">
          {rpg.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}