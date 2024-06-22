import Cabecalho from "Componentes/Cabecalho"
import Container from "Componentes/Container"
import Footer from "Componentes/Footer"
import FavoritosProvider from "Contextos/Favoritos"
import { Outlet } from "react-router-dom"

function PaginaBase() {
    return (
        <main>
            <Cabecalho />
            <FavoritosProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritosProvider>
            <Footer />
        </main>
    )
}

export default PaginaBase