// /pages/sobre/ResumoSobre.jsx
import React from "react";
import styles from "./resumoSobre.module.css"; // nome do arquivo CSS module abaixo

function ResumoSobre() {
  return (
    <div className={styles.sobreContainer}>
      <h1 className={styles.tituloSobre}>Sobre a Série – Rick and Morty</h1>

      <p className={styles.textoSobre}>
        <strong>Rick and Morty</strong> é uma série de animação adulta criada por
        Justin Roiland e Dan Harmon, lançada em 2013. A história acompanha as
        aventuras caóticas do cientista genial e alcoólatra <strong>Rick Sanchez</strong> e seu neto
        inseguro e ingênuo <strong>Morty Smith</strong>. Juntos, eles viajam por planetas,
        dimensões e realidades alternativas enfrentando situações imprevisíveis.
      </p>

      <p className={styles.textoSobre}>
        A série mistura ficção científica, humor ácido, crítica social, paródias culturais
        e reflexões filosóficas sobre existência, livre-arbítrio e identidade, mantendo um
        estilo irreverente e caótico.
      </p>

      <h2 className={styles.subtitulo}>Personagens Principais</h2>
      <ul className={styles.lista}>
        <li><strong>Rick Sanchez:</strong> Cientista brilhante, sarcástico e imprevisível.</li>
        <li><strong>Morty Smith:</strong> Neto de Rick, mais inocente e emocional.</li>
        <li><strong>Summer Smith:</strong> Irmã de Morty, determinada e ousada.</li>
        <li><strong>Beth Smith:</strong> Filha de Rick, marcada pela ausência do pai.</li>
        <li><strong>Jerry Smith:</strong> Pai de Morty, inseguro e constantemente alvo de piadas.</li>
      </ul>

      <h2 className={styles.subtitulo}>Elementos e Temas</h2>
      <ul className={styles.lista}>
        <li>Multiversos e realidades alternativas</li>
        <li>Crítica social e política</li>
        <li>Humor negro e absurdo</li>
        <li>Paródias de filmes e teorias científicas</li>
        <li>Questões filosóficas e existenciais</li>
      </ul>

      <h2 className={styles.subtitulo}>Curiosidades</h2>
      <ul className={styles.lista}>
        <li>A série nasceu de uma paródia de “De Volta para o Futuro”.</li>
        <li>Justin Roiland dublava Rick e Morty por muitos anos.</li>
        <li>Os arrotos do Rick eram gravados de verdade durante as falas.</li>
        <li>A série possui inúmeras referências a filmes e cultura pop.</li>
        <li>Existem infinitas versões da família Smith no multiverso.</li>
        <li>Rick é considerado um dos seres mais inteligentes do multiverso.</li>
        <li>A trilha sonora virou fenômeno na internet.</li>
        <li>É uma das séries mais populares da Adult Swim.</li>
      </ul>

      <h2 className={styles.subtitulo}>Por que faz tanto sucesso?</h2>
      <p className={styles.textoSobre}>
        A série combina humor absurdo com discussões profundas, oferece episódios imprevisíveis,
        personagens complexos e liberdade criativa total para explorar qualquer tema.
      </p>
    </div>
  );
}
export default ResumoSobre;
