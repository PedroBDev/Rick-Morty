import styles from './sobre.module.css'
import { useNavigate } from "react-router-dom";

function Sobre(){
    const navigate = useNavigate(); 
    return(
        <>
        <div className={styles.container}>
            <h1>Série - Rick Morty</h1>
        </div>
        <div className={styles.button}>
            <button onClick={() => navigate("/resumoSobre")}>Sobre a série</button>
        </div>

        <div className={styles.button}>
            <button onClick={() => navigate("/Galeria")}>Galeria de Fotos</button>
        </div>

        </>
    )
}

export default Sobre