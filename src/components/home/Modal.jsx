import Botao from "./Botao";

function Modal({ personagem, fechar }) {
  return (
    <div className="meumodalOver" onClick={fechar}>
      <div
        className="meumodal"
        onClick={(e) => e.stopPropagation()} // não fecha ao clicar dentro
      >
        <img src={personagem.image} alt={personagem.name} className="modalImg" />
        <h2>{personagem.name}</h2>

        <p><strong>Status:</strong> {personagem.status}</p> 
        <p><strong>Espécie:</strong> {personagem.species}</p>
        <p><strong>Origem:</strong> {personagem.origin?.name}</p>

        <Botao texto="Fechar" onClick={fechar} />
      </div>
    </div>
  );
}


export default Modal;
