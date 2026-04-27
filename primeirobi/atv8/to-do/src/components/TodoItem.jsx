function TodoItem({ tarefa, aoRemover }) {
  return (
    <li 
      className="item-lista" 
      onClick={() => aoRemover(tarefa.id)} 
    >
      {tarefa.text}
    </li>
  );
}

export default TodoItem;