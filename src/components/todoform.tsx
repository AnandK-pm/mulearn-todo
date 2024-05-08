// TodoForm.tsx
import React, { useState } from 'react';
//import { Todo } from '../../models/Todo';
interface Todo
{
    id:number;
    text:string;
    completed:boolean;
}
interface TodoFormProps {
  onAdd: (todo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        text,
        completed: false
      };
      onAdd(newTodo);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter new todo"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
