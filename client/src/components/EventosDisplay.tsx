import { mockEventos }  from "../data/mockEventos";

export function EventosDisplay() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {mockEventos.map((ev) => (
                <div key={ev.id}>{ev.name}</div>
            ))}
        
        </div>
    );
}