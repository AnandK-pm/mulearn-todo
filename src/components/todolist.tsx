// TodoList.tsx
import React from 'react';
import TodoItem from './todoitem';
//import { Todo } from '../../models/Todo';
interface Todo
{
    id:number;
    text:string;
    completed:boolean;
}
interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
