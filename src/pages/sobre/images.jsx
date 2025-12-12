import { useState } from "react";
import styles from "./galeria.module.css";

function Galeria() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);

  const imagensRickAndMorty = [
    "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/77.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/265.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/375.jpeg",
    "https://rickandmortyapi.com/api/character/avatar/343.jpeg",
  ];

  return (
    <>
      
      <div className={styles.galeria}>
        
        {imagensRickAndMorty.map((url, index) => (
          <div
            key={index}
            className={styles.portalContainer}
            onClick={() => setImagemSelecionada(url)}
          >
            <div className={styles.portal}></div>
            <img className={styles.img} src={url} alt={`Rick and Morty ${index}`} />
          </div>
        ))}
      </div>
      {imagemSelecionada && (
        <div className={styles.lightbox} onClick={() => setImagemSelecionada(null)}>
          <img 
            className={styles.lightboxImg} 
            src={imagemSelecionada} 
            alt="Zoom" 
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default Galeria;