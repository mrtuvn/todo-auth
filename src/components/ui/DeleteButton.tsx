import { useTodosContext } from "@/lib/hooks";

export default function DeleteButton({ id }: { id: number }) {
  const { deleteTodo } = useTodosContext();

  return (
    <button
      className="cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        deleteTodo(id);
      }}
      title="bỏ lời nhắc"
    >
      ❌
    </button>
  );
}
