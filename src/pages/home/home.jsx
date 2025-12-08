import styles from './home.module.css'
import rickMortyImage from '../../assets/rick-and-morty.jpg'



function home(){
    return(
    <>

    <div className = {styles.container}>
      <div className={styles.titulo}>
        <h1>Rick and Morty</h1>
      </div>

      <div className={styles.imagem}>
        <img src={rickMortyImage} alt={'Imagem Rick and Morty'} />
      </div>

      <div className={styles.descricao}>
          <p>
          <strong>Rick and Morty</strong> é uma série animada de comédia e ficção científica criada por 
          <strong>Justin Roiland</strong> e <strong>Dan Harmon</strong>, lançada em <strong>2013</strong> pelo canal 
          <em>Adult Swim</em>.  
          A trama acompanha as aventuras insanas de <strong>Rick Sanchez</strong>, um cientista genial, alcoólatra e moralmente duvidoso, e seu neto <strong>Morty Smith</strong>, um adolescente inseguro que o acompanha em viagens interdimensionais e experimentos caóticos.
          </p>

          <p>
          Juntos, eles exploram <strong>universos paralelos</strong>, <strong>realidades alternativas</strong> e 
          <strong>criaturas bizarras</strong>, enquanto enfrentam dilemas existenciais e familiares.  
          A série combina <strong>humor ácido</strong>, <strong>crítica social</strong> e <strong>conceitos de física teórica</strong>, explorando temas como identidade, livre-arbítrio e o sentido da vida — tudo com muito sarcasmo e caos.
          </p>

      </div>
    </div>
    </>
    )
}

export default home
