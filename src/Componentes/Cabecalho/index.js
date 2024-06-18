import { Link } from "react-router-dom";
import logo from './logo.png';
import styles from './cabecalho.module.css';
import CabecalhoLink from "Componentes/CabecalhoLink";

function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="logo cinetag"></img>
            </Link>

            <nav>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./Favoritos">
                    Favoritos
                </CabecalhoLink>
            </nav>
        </header>
    )
}

export default Cabecalho;
