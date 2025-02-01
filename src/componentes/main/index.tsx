import ListaFilmes from "./lista-filmes/index.tsx";
import Continuar from "./continuarAssistindo";
import "./style.scss";

type Props = {
    scrollToFilmes: boolean;
    setScrollToFilmes: (value: boolean) => void;
  };

export default function Main({ scrollToFilmes, setScrollToFilmes }: Props) {
    return (
        <section className="main">
            <section className="banner">
                <div className="texto">
                    <div>
                        <div className="tituloFilme"><img src="img/titulo.png" alt="Titulo do filme" /></div>
                        <p>1h 51min | Animação, Comédia, Aventura,</p>
                    </div>
                    <div>
                        <p>
                            Ratatouille é um filme da Pixar que conta a história de Remy, um rato com um talento único para a culinária, que sonha em ser chef em Paris. Ele faz uma parceria improvável com Linguini, um jovem desajeitado que trabalha como ajudante de cozinha, para criar pratos incríveis no renomado restaurante Gusteau's. Juntos, enfrentam desafios enquanto provam que talento e paixão podem vir de qualquer lugar.
                        </p>
                    </div>
                    <div className="buttons">
                        <button className="assistir">
                        ▶ Assistir
                        </button>
                        <button className="favoritos">
                            ⭐️ Adicionar aos favoritos
                        </button>
                    </div>
                </div>
                <div className="img">
                    <img src="/img/ratatui.jpg" alt="Imagem de capa" />
                </div>
            </section>
            <section className="listagemFilmes">
                <Continuar />
                <ListaFilmes scrollToFilmes={scrollToFilmes} setScrollToFilmes={setScrollToFilmes}/>
            </section>
        </section>
    )
}