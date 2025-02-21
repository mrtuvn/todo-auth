import { useTodosContext } from "@/lib/hooks";

export default function Counter() {
  const { totalCount, completedCount } = useTodosContext();

  return (
    <p className="ml-auto text-right">
      <b>{completedCount}</b> / {totalCount} đã làm xong
    </p>
  );
}
