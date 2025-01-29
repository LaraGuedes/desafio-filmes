import "./style.scss";
import { Home, Film, Star } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

type PropsHeader = {
  nav: string[];
  setScrollToFilmes: (value: boolean) => void;
};

export default function Header({ nav, setScrollToFilmes }: PropsHeader) {
  const location = useLocation();

  const handleFilmesClick = () => {
    if (location.pathname === "/filmes") {
      setScrollToFilmes(true); 
    }
  };

  const icons: Record<string, JSX.Element> = {
    "Início": <Home size={20} />,
    "Filmes": <Film size={20} />,
    "Minha Lista": <Star size={20} />,
  };

  const links: Record<string, string> = {
    "Início": "/",
    "Filmes": "/filmes",
    "Minha Lista": "/minha-lista",
  };

  return (
    <section className="sectionHeader">
      <div className="logo">
        <img src="./img/logo.png" alt="Logo" />
      </div>
      <div className="header">
        {nav.map((item, index) => (
          <Link 
            key={index} 
            className="nav-item" 
            to={links[item]} 
            onClick={item === "Filmes" ? handleFilmesClick : undefined}
          >
            {icons[item]} <span className="text">{item}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
