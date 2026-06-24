import { PessoaBolha } from "../components/PessoaBolha";
import { pessoas } from "../data/pessoas";

export function SobrePage() {
  return (
    <div className="p-7">
      <div className="flex font-bold justify-center py-5 text-4xl">
        <h2 className="font-mono">Sobre o projeto</h2>
      </div>
      <p>
        O projeto é feito por uma pessoa apaixonada por RPG e programação, que
        se esforça para divulgar o RPG indie para os mais diversos públicos.
      </p>
      <p>
        RPG é para qualquer pessoa que tiver interesse e há inúmeros estilos
        para serem explorados.
      </p>
      <div className="mt-15">
        <h3 className="text-center font-mono pb-7 font-bold text-3xl">
          Membros
        </h3>
        <div className="flex justify-center">
          {pessoas.slice(0, 1).map((pessoa) => (
            <PessoaBolha key={pessoa.id} pessoa={pessoa} />
          ))}
        </div>
      </div>
    </div>
  );
}
