// todos
// create

import { createContext, useState, useEffect, useContext } from "react";

const TodoContext = createContext(null);
export const useTodos = () => useContext(TodoContext);

export function TodoProvider({ children, todoService }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todoService.get().then(setTodos);
  }, [todoService]);

  const create = async (todo) => {
    const newTodo = await todoService.create(todo);
    setTodos((prev) => [...prev, newTodo]);
  };

  return (
    <TodoContext.Provider value={{ todos, create }}>
      {children}
    </TodoContext.Provider>
  );
}
