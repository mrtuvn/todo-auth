import { Todo } from "@/types/Todo";
import { createContext, useEffect, useState } from "react";

type TodosContextType = {
  todos: Todo[];
  isLoading: boolean;
  totalCount: number;
  completedCount: number;
  addTodo: (content: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  showCompleted: boolean;
  toggleShowCompleted: () => void;
};

export const TodosContext = createContext<TodosContextType>(
  {} as TodosContextType,
);

export default function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  //const { isAuthenticated } = useKindeAuth();
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
  const [showCompleted, setShowCompleted] = useState<boolean>(true);

  // derived state
  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;

  // actions / event handlers
  const addTodo = (content: string) => {
    // check if user is logged in
    // if (todos.length >= 4 && !isAuthenticated) {
    //   alert("Thêm hơn 4 lời nhắc cần phải đăng nhập");
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

  const toggleShowCompleted = () => {
    setShowCompleted((prev) => !prev);
  };

  // side effects write localstorage
  useEffect(() => {
    setIsLoading(true);

    localStorage.setItem("todos", JSON.stringify(todos));
    //}

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
        showCompleted,
        toggleShowCompleted,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
