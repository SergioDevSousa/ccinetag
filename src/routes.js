import Cabecalho from "Componentes/Cabecalho";
import Container from "Componentes/Container";
import Footer from "Componentes/Footer";
import Player from "Componentes/Player";
import FavoritosProvider from "Contextos/Favoritos";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Container>
                <FavoritosProvider >
                    <Routes>
                        <Route path="/" element={<Inicio />}></Route>
                        <Route path="/favoritos" element={<Favoritos />}></Route>
                        <Route path="/:id" element={<Player />}></Route>
                    </Routes>
                </FavoritosProvider >
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;