// TodoItem.tsx
import React from 'react';
//import { Todo } from '../../models/Todo';
interface Todo
{
    id:number;
    text:string;
    completed:boolean;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} readOnly />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
