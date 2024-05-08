// TodoPage.tsx
import React, { useState } from 'react';
import TodoList from './todolist';
import TodoForm from './todoform';
//import { Todo } from '../../models/Todo';
interface Todo
{
    id:number;
    text:string;
    completed:boolean;
}

const TodoPage: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
};

export default TodoPage;
