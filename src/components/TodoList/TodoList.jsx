import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: '123', text: 'Groceries', status: 'active' },
    { id: '124', text: 'Studying', status: 'active' },
  ]);
  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
