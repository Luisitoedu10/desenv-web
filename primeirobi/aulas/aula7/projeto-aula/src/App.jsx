import Cabecalho from "./components/Cabecalho";

export default function App() {
    const nome = "Luis";

    return (
        <main>
            <Cabecalho titulo="Cabeçalho"/>
            <h1 className="">Olá {nome}</h1>
        </main>
    );
}
