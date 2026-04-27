import { useState } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (texto) => {
    const novaTarefa = { id: Date.now(), text: texto };
    setTarefas([...tarefas, novaTarefa]);
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter(t => t.id !== id));
  };

  return (
    <main className="container">
      <Header />
      <TodoInput aoAdicionar={adicionarTarefa} />
      <TodoList tarefas={tarefas} aoRemover={removerTarefa} />
    </main>
  );
}

export default App;