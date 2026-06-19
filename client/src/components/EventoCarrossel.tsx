import { useState, useEffect, useCallback } from "react";
import { mockEventos } from "../data/mockEventos";

export function EventoCarrossel() {
  const [current, setCurrent] = useState(0);
  const total = mockEventos.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const evento = mockEventos[current];

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <section className="relative w-full overflow-hidden lg:rounded-xl h-62.5 sm:h-auto sm:aspect-16/5 sm:w-5/6 mt-5 mb-5">
      {mockEventos.map((ev, i) => (
        <div
          key={ev.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
        >
          <img
            src={ev.coverUrl}
            alt={ev.name}
            className="w-full h-full object-cover"
          />
          <div className="relative inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent sm:bg-linear-to-r sm:from-black/70 sm:via-black/40 sm:to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-left pointer-events-none">
        <span className="text-xs font-semibold uppercase tracking-widest mb-1 sm:mb-2" style={{ color: "var(--accent)" }}>
          Evento em destaque
        </span>
        <h2 className="text-white text-xl sm:text-2xl font-bold leading-tight mb-1 drop-shadow">
          {evento.name}
        </h2>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs sm:text-sm text-gray-200 mb-1 sm:mb-2">
          <span>📅 {formatDate(evento.date)} às {evento.time}</span>
          <span>📍 {evento.location}</span>
          <span className="capitalize">🎲 {evento.duration}</span>
        </div>
        <p className="text-gray-300 text-xs sm:text-sm max-w-xl line-clamp-2 hidden sm:block">{evento.description}</p>
      </div>

      <button
        onClick={prev}
        aria-label="Anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Próximo"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {mockEventos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Ir para evento ${i + 1}`}
            className="w-2 h-2 rounded-full transition-colors"
            style={{ background: i === current ? " " : "rgba(255,255,255,0.5)" }}
          />
        ))}
      </div>
    </section>
  );
}
