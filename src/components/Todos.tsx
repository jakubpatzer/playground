"use client";

import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

type Action =
  | { type: "ADD"; title: string }
  | { type: "TOGGLE"; id: string }
  | { type: "DELETE"; id: string };

const reducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        { id: uuidv4(), title: action.title, completed: false },
      ];
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

const Todos = ({ todos }: { todos: Todo[] }) => {
  const [state, dispatch] = useReducer(reducer, todos);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch({ type: "ADD", title: inputValue });
      setInputValue("");
    }
  };

  return (
    <div>
      <div className="flex justify-center items-start gap-3">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
          className="text-black mb-10 px-1 rounded-sm placeholder-red-500"
        />
        <button
          className="px-1 bg-white text-black rounded-sm"
          onClick={handleAdd}
        >
          Add Todo
        </button>
      </div>
      <ul>
        {state.length ? (
          state.map((todo) => (
            <li key={todo.id}>
              <div>
                <p
                  className={`text-center py-1 cursor-pointer transform transition duration-200 ease-in-out hover:scale-110 ${
                    todo.completed ? "line-through-custom" : ""
                  }`}
                  onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}
                >
                  {todo.title}
                  <button
                    className="ml-5"
                    onClick={() => dispatch({ type: "DELETE", id: todo.id })}
                  >
                    x
                  </button>
                </p>
              </div>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default Todos;
