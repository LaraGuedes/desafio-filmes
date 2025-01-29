import { useEffect, useRef } from "react";
import filmes from "../filmes";
import "./style.scss";

type Props = {
  scrollToFilmes: boolean;
  setScrollToFilmes: (value: boolean) => void;
};

export default function ListaFilmes({ scrollToFilmes, setScrollToFilmes }: Props) {
    const aventuraRef = useRef<HTMLDivElement | null>(null);
    const comediaRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (scrollToFilmes) {
            const filmesSection = document.getElementById("filmesSection");
            if (filmesSection) {
                filmesSection.scrollIntoView({ behavior: "smooth" });
                setScrollToFilmes(false); // Reseta para evitar múltiplas rolagens
            }
        }
    }, [scrollToFilmes, setScrollToFilmes]);

    const scrollAventura = (direction: "left" | "right") => {
        if (aventuraRef.current) {
            const scrollAmount = 300;
            aventuraRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const scrollComedia = (direction: "left" | "right") => {
        if (comediaRef.current) {
            const scrollAmount = 300;
            comediaRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <section className="filmes-container">
                <div>
                    <button className="seta seta-esquerda" onClick={() => scrollAventura("left")}>◀</button>
                    <button className="seta seta-direita" onClick={() => scrollAventura("right")}>▶</button>
                </div>
                <p className="titulo">Filmes de Aventura</p>
                <section className="filmes" ref={aventuraRef}>
                    {filmes
                        .filter(filme => filme.tipo === "Aventura")
                        .map((filme, index) => (
                            <div key={index}>
                                <img src={filme.img} alt={filme.alt} className="img" />
                            </div>
                        ))}
                </section>
            </section>

            <section className="filmes-container">
                <div>
                    <button className="seta seta-esquerda" onClick={() => scrollComedia("left")}>◀</button>
                    <button className="seta seta-direita" onClick={() => scrollComedia("right")}>▶</button>
                </div>
                <p className="titulo">Filmes de Comédia</p>
                <section className="filmes" ref={comediaRef}>
                    {filmes
                        .filter(filme => filme.tipo === "Comédia")
                        .map((filme, index) => (
                            <div key={index}>
                                <img src={filme.img} alt={filme.alt} className="img" />
                            </div>
                        ))}
                </section>
            </section>

            <section className="listagem" id="filmesSection">
                <p className="titulo">Todos os Filmes</p>
                <section className="filmesOutros">
                    {filmes.map((filme, index) => (
                        <div key={index}>
                            <img src={filme.img} alt={filme.alt} className="img" />
                        </div>
                    ))}
                </section>
            </section>
        </>
    );
}
