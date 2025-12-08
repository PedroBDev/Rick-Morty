import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const containerStyle = {
  padding: "20px",
  fontFamily: "'Trebuchet MS', sans-serif",
  color: "#00ff9f",
  backgroundColor: "#0d0d0d",
  minHeight: "100vh",
};

const titleStyle = {
  color: "#00ff9f",
  textShadow: "0 0 10px #00ff9f",
};

const cardStyle = {
  background: "#1a1a1a",
  padding: "12px",
  marginBottom: "12px",
  borderRadius: "8px",
  border: "1px solid #00ff9f",
  boxShadow: "0 0 8px #00ff9f55",
};

const buttonStyle = {
  background: "#00ff9f",
  color: "#000",
  padding: "8px 14px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
  textDecoration: "none",
};

const backButtonStyle = {
  ...buttonStyle,
  background: "#008f66",
  color: "#fff",
  marginBottom: "20px",
};


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
    <div style={containerStyle}>
      <h1 style={titleStyle}>Localizações — Rick and Morty</h1>

      {locations.map((loc) => (
        <div key={loc.id} style={cardStyle}>
          <h3 style={{ color: "#00ff9f" }}>{loc.name}</h3>
          <p style={{ color: "#ccc" }}>Tipo: {loc.type}</p>

          <Link to={`/locations/${loc.id}`} style={buttonStyle}>
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

        // Busca completa de personagens residentes
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
    <div style={containerStyle}>
      <Link to="/locations" style={backButtonStyle}>← Voltar</Link>

      <h1 style={titleStyle}>{location.name}</h1>
      <p style={{ color: "#bbb" }}><strong>Tipo:</strong> {location.type}</p>
      <p style={{ color: "#bbb" }}><strong>Dimensão:</strong> {location.dimension}</p>

      <h2 style={{ color: "#00ff9f", marginTop: "20px" }}>Personagens residentes:</h2>

      {location.residents.length === 0 ? (
        <p style={{ color: "#fff" }}>Nenhum personagem nesta localização.</p>
      ) : (
        location.residents.map((char) => (
          <div key={char.id} style={cardStyle}>
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
