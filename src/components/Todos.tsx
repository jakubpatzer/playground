"use client";
import React, { useEffect, useState, KeyboardEvent } from "react";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const LOCAL_STORAGE_KEY: string = "todos";

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const localData = localStorage.getItem(LOCAL_STORAGE_KEY);
    return localData ? JSON.parse(localData) : [];
  });

  const [text, setText] = useState<string>("");

  const handleAdd = (): void => {
    if (text.trim()) {
      const newTodo = { id: uuidv4(), text: text.trim(), completed: false };
      setTodos((prevTodos: Todo[]) => [...prevTodos, newTodo]);
    }
    setText("");
  };

  const handleDelete = (id: string): void => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.filter((todo: Todo) => todo.id !== id)
    );
  };

  const handleToggle = (id: string): void => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo: Todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleReset = (): void => {
    setTodos([]);
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          className="text-black ps-2"
          type="text"
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          value={text}
          placeholder="Add new todo..."
        />
        <button
          className="bg-white text-black rounded-sm px-2"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          className="bg-red-500 text-white rounded-sm px-2"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div>
        {todos.length > 0
          ? todos.map((todo: Todo) => (
              <div
                key={todo.id}
                className="flex justify-between items-center mb-4"
              >
                <p
                  className={`cursor-pointer max-w-64 ${
                    todo.completed && "line-through"
                  }`}
                  onClick={() => handleToggle(todo.id)}
                >
                  {todo.text}
                </p>
                <button
                  className="bg-white text-black px-2 rounded-sm"
                  onClick={() => handleDelete(todo.id)}
                >
                  x
                </button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Todos;
