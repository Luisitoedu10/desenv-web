import { useEffect, useState } from "react";

export default function App() {
    const [ativo, setAtivo] = useState(false);
    const [valorBtc, setValorBtc] = useState();

    useEffect(() => {
        //https://economia.awesomeapi.com.br/json/last/BTC

        fetch("https://economia.awesomeapi.com.br/json/last/BTC-USD")
            .then((response) => response.json())
            .then((json) => setValorBtc(json.BTCUSD.bid))
            .catch((erro) => console.error("Erro: ", erro));
        console.log("Teste Show!");
    }, [ativo]);

    return (
        <main>
            <h1>Exemplo useEffect</h1>
            <p>O valor é {ativo ? "Ativo" : "Inativo"}</p>
            {valorBtc &&
            <p>Valor Atual BTC: R$ {valorBtc}</p>
            }
            <button onClick={() => setAtivo(!ativo)}>Alterar Valor</button>
        </main>
    );
}
