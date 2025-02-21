import { Todo } from "@/types/Todo";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { createContext, useEffect, useState } from "react";

type TodosContextType = {
  todos: Todo[];
  isLoading: boolean;
  totalCount: number;
  completedCount: number;
  addTodo: (content: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TodosContextType>(
  {} as TodosContextType,
);

export default function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useKindeAuth();
  // state
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedData = localStorage.getItem("todos");
    if (savedData) {
      return JSON.parse(savedData);
    } else {
      return [];
    }
  });
  const [isLoading, setIsLoading] = useState(false);

  // derived state
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  // actions / event handlers
  const addTodo = (content: string) => {
    // check if user is logged in
    // if (todos.length >= 3 && !isAuthenticated) {
    //   alert("Thêm lời nhắc cần phải đăng nhập");
    //   return;
    // }

    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        content,
        completed: false,
      },
    ]);
  };
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // side effects write localstorage
  useEffect(() => {
    // const fetchTodos = async () => {
    //   setIsLoading(true);

    //   //   const response = await fetch(
    //   //     "https://bytegrad.com/course-assets/api/todos",
    //   //   );
    //   //   const todos = await response.json();
    //   //localStorage.setItem("todos", JSON.stringify(todos));

    //   setTodos(todos);

    //   setIsLoading(false);
    // };
    setIsLoading(true);
    localStorage.setItem("todos", JSON.stringify(todos));
    setIsLoading(false);
    //fetchTodos();
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        isLoading,
        totalCount,
        completedCount,
        addTodo,
        toggleTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
