export default function Sidebar() {
  const postsRelacionados = [
    "Grêmio encaminha título do gauchão",
    "Melhores momentos Grêmio 3 Internacional 0",
    "Polêmicas da arbitragem no clássico GREnal 450"
  ];

  return (
    <aside>
      <h3>Posts Relacionados</h3>
      <ul className="lateral">
        {postsRelacionados.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </aside>
  );
}