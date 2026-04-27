import { useState } from 'react';

function TodoInput({ aoAdicionar }) {
  const [texto, setTexto] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      aoAdicionar(texto);
      setTexto(''); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TodoInput;