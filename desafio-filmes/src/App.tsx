
import { useState } from "react";
import Footer from "./componentes/footer/index.tsx"
import Header from "./componentes/header/index.tsx"
import Main from "./componentes/main/index.tsx"
import "./global.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [scrollToFilmes, setScrollToFilmes] = useState(false);

  return (
    <>
      <Router>
      <Header nav={["Início", "Filmes", "Minha Lista"]} setScrollToFilmes={setScrollToFilmes} />
      <Routes>
        <Route path="/" element={<Main scrollToFilmes={scrollToFilmes} setScrollToFilmes={setScrollToFilmes} />} />
        <Route path="/filmes" element={<Main scrollToFilmes={scrollToFilmes} setScrollToFilmes={setScrollToFilmes} />} />
      </Routes>
      <Footer text={'2025 - Lara Calegário Guedes. Todos os direitos reservados.'} />
    </Router>
    </>
  )
}

export default App
