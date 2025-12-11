import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "./localizacao.module.css";

export function LocationList() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const response = await fetch("https://rickandmortyapi.com/api/location");
        const data = await response.json();
        setLocations(data.results);
      } catch (error) {
        console.log("Erro ao carregar localizações:", error);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  if (loading) return <p style={{ color: "#fff" }}>Carregando...</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Localizações — Rick and Morty</h1>

      {locations.map((loc) => (
        <div key={loc.id} className={styles.card}>
          <h3 style={{ color: "#00ff9f" }}>{loc.name}</h3>
          <p style={{ color: "#ccc" }}>Tipo: {loc.type}</p>

          <Link to={`/locations/${loc.id}`} className={styles.button}>
            Ver detalhes
          </Link>
        </div>
      ))}
    </div>
  );
}

export function LocationDetail() {
  const { id } = useParams();
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadLocation() {
      try {
        const response = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
        const data = await response.json();

        const residents = await Promise.all(
          data.residents.map((url) => fetch(url).then((res) => res.json()))
        );

        setLocation({ ...data, residents });
      } catch (error) {
        console.log("Erro ao carregar detalhes:", error);
      } finally {
        setLoading(false);
      }
    }
    loadLocation();
  }, [id]);

  if (loading) return <p style={{ color: "#fff" }}>Carregando...</p>;

  return (
    <div className={styles.container}>
      <Link to="/Localizacao" className={styles.backButton}>
        ← Voltar
      </Link>

      <h1 className={styles.title}>{location.name}</h1>
      <p style={{ color: "#bbb" }}><strong>Tipo:</strong> {location.type}</p>
      <p style={{ color: "#bbb" }}><strong>Dimensão:</strong> {location.dimension}</p>

      <h2 style={{ color: "#00ff9f", marginTop: "20px" }}>Personagens residentes:</h2>

      {location.residents.length === 0 ? (
        <p style={{ color: "#fff" }}>Nenhum personagem nesta localização.</p>
      ) : (
        location.residents.map((char) => (
          <div key={char.id} className={styles.card}>
            <h3 style={{ color: "#00ff9f" }}>{char.name}</h3>
            <p style={{ color: "#ccc" }}>Status: {char.status}</p>
            <p style={{ color: "#ccc" }}>Espécie: {char.species}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default LocationList;
