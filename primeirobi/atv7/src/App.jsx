import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Article from "./components/Article";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    const postDoGrenal = {
        titulo: "Grêmio atropela o Internacional na Arena pela primeira partida da final do Gauchão",
        data: "2 de março de 2026",
        imagem: "https://conteudo.imguol.com.br/c/esporte/66/2026/03/01/jose-enamorado-jogador-do-gremio-comemora-seu-gol-durante-partida-contra-o-internacional-1772403391913_v2_450x450.jpg.webp",
        legendaImagem: "Grêmio venceu o GREnal 450 por 3 a 0 na partida de ida",
        conteudo: [
            "A última partida do Grêmio foi realizada contra seu maior rival internacional no dia de ontem, 02 de março de 2026, na Arena do Grêmio. O jogo terminou com a vitória da equipe tricolor por 3 a 0, com gols de José Enamorado, Francis Amuzu e Carlos Vinícius.",
            "A partida foi marcada por lances polêmicos como a expulsão do lateral do colorado, Bernabei, e uma possível falta na origem do lance do segundo gol do Grêmio.",
        ],
    };

    return (
        <div className="app-container">
            <Header />
            <Navigation />
            <div className="main-layout">
                <main>
                    <Article post={postDoGrenal} />
                    <Sidebar />
                </main>
            </div>
            <Footer copyright="Todos os direitos reservados - 2026" />
        </div>
    );
}

export default App;
