import { mockEventos }  from "../data/mockEventos";

export function EventosDisplay() {

  const formatDate = (dateStr: string) => {
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 font-mono">
        {mockEventos.map((ev) => (
                <div key={ev.id} className="border rounded-lg cursor-pointer min-w-3xs overflow-hidden hover:shadow-lg transition-shadow lg:max-w-sm ">
                    <img src={ev.coverUrl} alt={ev.name} />
                    <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">{ev.name}</h3>
                    <p className="text-gray-600">{ev.description}</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs sm:text-sm  mb-1 sm:mb-2">
                      <span>📅 {formatDate(ev.date)} às {ev.time}</span>
                      <span>📍 {ev.location}</span>
                    </div>
                    </div>
                    
                    </div>
            ))}
        
        </section>
    );
}