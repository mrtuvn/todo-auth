import DeleteButton from "@/components/ui/DeleteButton";
import { useTodosContext } from "@/lib/hooks";
import type { Todo } from "@/types/Todo";

export default function TodoList() {
  const { todos, toggleTodo, isLoading, showCompleted } = useTodosContext();

  const displayedTodos = showCompleted
    ? todos.filter((todo) => !todo.completed)
    : [...todos].sort((a: Todo, b: Todo) => a.completed - b.completed);

  console.log(displayedTodos);
  console.log(todos);

  return (
    <>
      <ul className="[scrollbar-width:thin] overflow-y-auto xs:max-h-[65svh] md:max-h-none relative grow-[9999] basis-[500px]">
        {isLoading && (
          <li className="h-full flex justify-center items-center font-semibold">
            Hiển thị lời nhắc...
          </li>
        )}

        {displayedTodos.length === 0 ? (
          <li className="h-full min-h-[200px] flex justify-center items-center font-semibold">
            Chưa có lời nhắc nào. Hãy thêm lời nhắc mới
          </li>
        ) : null}

        {displayedTodos.map((todo: Todo) => {
          return (
            <li
              key={todo.id}
              className={`flex text-lg justify-between items-center px-8 h-[50px]  cursor-pointer border-b border-b-[rgba(0,0,0,0.08)]`}
              onClick={() => {
                toggleTodo(todo.id);
              }}
            >
              <span
                className={`${todo.completed ? "line-through text-[#ccc]" : ""}`}
              >
                {todo.content}
              </span>

              <DeleteButton id={todo.id} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
