import Cabecalho from "Componentes/Cabecalho";
import Container from "Componentes/Container";
import Footer from "Componentes/Footer";
import Favoritos from "pages/Favoritos";
import Inicio from "pages/Inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes(){
    return(
        <BrowserRouter>
            <Cabecalho />
            <Container>
            <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/favoritos" element={<Favoritos />}></Route>
            </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}
export default AppRoutes;