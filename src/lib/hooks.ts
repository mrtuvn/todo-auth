import { TodosContext } from "@/contexts/TodosContextProvider";
import React from "react";

export function useTodosContext() {
  const context = React.useContext(TodosContext);

  if (!context) {
    throw new Error(
      "TodosContext must be used within a TodosContextProvider component",
    );
  }

  return context;
}
