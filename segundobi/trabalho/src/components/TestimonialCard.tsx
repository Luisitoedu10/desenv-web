import Star from "../assets/star.svg";
import StarOuter from "../assets/star_out.svg";

interface ITestimonialCard {
    imagemPerfil: string;
    testemunho: string;
    nome: string;
    cargo: string;
    quantidadeEstrelas: number;
}

export default function TestimonialCard(props: ITestimonialCard) {
    const listaEstrelas = new Array(props.quantidadeEstrelas).fill(1);
    const listaEstrelasVazia = new Array(5 - props.quantidadeEstrelas).fill(1);

    return (
        <div className="carousel-card">
            <img src={props.imagemPerfil} alt="Imagem perfil cliente" />
            <span className="testimony">
                <p>{props.testemunho}</p>
            </span>
            <span className="rating">
                {listaEstrelas.map((item, indice) => (
                    <img
                        key={indice}
                        src={Star}
                        alt="ícone estrela"
                        width={22}
                        height={20}
                    />
                ))}
                {listaEstrelasVazia.map((item, indice) => (
                    <img
                        key={indice}
                        src={StarOuter}
                        alt="ícone estrela sem fundo"
                        width={20}
                        height={22}
                    />
                ))}
            </span>
            <span className="names">
                <p>{props.nome}</p>
                <p>{props.cargo}</p>
            </span>
        </div>
    );
}
