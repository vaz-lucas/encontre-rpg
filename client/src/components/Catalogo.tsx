

export function Catalogo() {

  return (
    <>
    <h2>Catálogo</h2>

    <div className="text-center flex gap-2.5 flex-wrap">
    {Array.from({ length: 10 }, (_, i) => (
        <div key={i}>
        <h3>Título {i + 1}</h3>
        <p>content</p>
        <p>tags</p>
        </div>
    ))}
    </div>

    </>
  )
}