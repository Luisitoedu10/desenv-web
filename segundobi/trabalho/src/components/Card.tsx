interface ICard {
    iconeSrc: string;
    iconeAlt: string;
    titulo: string;
    descricao: string;
}


export default function Card(props: ICard) {
    return (
        <div className="card">
            <span>
                <img src={props.iconeSrc} alt={props.iconeAlt} width={64} height={64} />
            </span>
            <div>
                <h3>
                    {props.titulo}
                </h3>
                <p>
                    {props.descricao}
                </p>
                <hr />
            </div>
        </div>
    );
}