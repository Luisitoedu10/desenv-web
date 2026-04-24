function Article(props) {
  const { post } = props;

  return (
    <article>
      <h2>{post.titulo}</h2>
      <p className="data">
        <time>{post.data}</time>
      </p>

      
      {post.conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}

      <figure>
        <img src={post.imagem} alt={`Imagem de ${post.titulo}`} />
        <figcaption>{post.legendaImagem}</figcaption>
      </figure>
    </article>
  );
}

export default Article;