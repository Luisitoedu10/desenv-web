import TodoItem from './TodoItem';

function TodoList({ tarefas, aoRemover }) {
  return (
    <ul className="lista">
      {tarefas.map((tarefa) => (
        <TodoItem 
          key={tarefa.id} 
          tarefa={tarefa} 
          aoRemover={aoRemover} 
        />
      ))}
    </ul>
  );
}

export default TodoList;