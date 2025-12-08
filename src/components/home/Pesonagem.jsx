import Botao from "./Botao";

export default function Personagem({ personagem, abrirDetalhes }) {
  return (
    <div className="card">
      <img src={personagem.image} alt={personagem.name} />
      <h3>{personagem.name}</h3>

      <Botao texto="Ver detalhes" onClick={abrirDetalhes} />
    </div>
  );
}