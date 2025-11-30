import styles from './navBarHome.module.css'
import {Link} from 'react-router-dom'
function navBarHome(){
    return(
    <div className={styles.container}>
        <nav class="navbar navbar-expand-md">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">RickMorty</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" href="#" to={'/'}>Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link class="nav-link" href="#" to={'/Sobre'}>Sobre</Link>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Personagens
                    </a>
                    <ul class="dropdown-menu">
                        <li><Link class="dropdown-item" href="#" to={'/InfoPersonagens'}>Informações</Link></li>
                        <li><Link class="dropdown-item" href="#" to={'/Localizacao'}>Localização</Link></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export default navBarHome