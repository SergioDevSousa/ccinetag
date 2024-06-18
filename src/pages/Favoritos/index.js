import Banner from 'Componentes/Banner';
import styles from './Favoritos.module.css';
import Card from 'Componentes/Card';
import Titulo from 'Componentes/Titulo';

function Favoritos() {
    return (
        <>
            <Banner imagem='favoritos' />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='O labirinto do Logcat' capa='https://img.ws.mms.shopee.com.br/br-11134207-7qukw-lf5n3oh4tzq770' />
            </section>
        </>
    )
}

export default Favoritos