    
import { useEffect, useState } from "react";
import Personagem from "../components/home/Personagem";
import Modal from "../components/home/Modal";
import "./infoPersonagens.css";

function InfoPersonagens() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  async function buscarPersonagens() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://rickandmortyapi.com/api/character");

      if (!response.ok) throw new Error("Erro ao buscar API");

      const result = await response.json();

      setData(result.results);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    buscarPersonagens();
  }, []);

  if (loading) return <p>Carregando personagens...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div className="container">
      <h1>Personagens</h1>

      <div className="lista">
        {data.map((p) => (
          <Personagem
            key={p.id}
            personagem={p}
            abrirDetalhes={()=> setPersonagemSelecionado(p)}
          />
        ))}
      </div>

      {personagemSelecionado && (
        <Modal
          personagem={personagemSelecionado}
          fechar={() => setPersonagemSelecionado(null)}
        />
      )}
    </div>
  );
}




export default InfoPersonagens
