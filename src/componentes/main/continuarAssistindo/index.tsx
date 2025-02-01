import { useRef } from "react";
import filmes from "../filmes"
import "./style.scss"

export default function Continuar() {
    const filmesSelecionados = filmes.slice(0, 6);
    const filmeRef = useRef<HTMLDivElement | null>(null);


    const scroll = (direction: "left" | "right") => {
        if (filmeRef.current) {
            const scrollAmount = 300;
            filmeRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };
    return (
        <>
            <section className="filmes-container">
                <div >
                    <button className="seta seta-esquerda" onClick={() => scroll("left")}>◀</button>
                    <button className="seta seta-direita" onClick={() => scroll("right")}>▶</button>
                </div>
                <p className="titulo">Continuar Assistindo</p>
                <section className="filmes" ref={filmeRef}>
                    {filmesSelecionados.map((filmes, index) => (
                        <div key={index} className="filme-item">
                            <img src={filmes.img} alt={filmes.alt} className="img" />
                            <div className="progress-container">
                                <div className="progress-bar" style={{ width: `${filmes.progresso}%` }}></div>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </>
    )
}