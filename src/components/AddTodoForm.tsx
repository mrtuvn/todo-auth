import Button from "@/components/ui/Button";
import { useTodosContext } from "@/lib/hooks";
import React from "react";

export default function AddTodoForm() {
  const [todoContent, setTodoContent] = React.useState("");
  const { addTodo } = useTodosContext();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(todoContent);
        setTodoContent("");
      }}
    >
      <h2 className="text-[#231d15] text-[16px] font-medium">Thêm lời nhắc</h2>
      <input
        type="text"
        autoFocus
        className="h-[45px] w-full border-[1px] border-[rgba(0,0,0,0.12)] rounded-[5px] ml-[0] mr-[0] my-[9px] px-[16px] py-[0] text-[14px]"
        value={todoContent}
        placeholder="Nhập việc ở đây nha"
        onChange={(e) => {
          setTodoContent(e.target.value);
        }}
      />
      <Button>Thêm lời nhắc</Button>
    </form>
  );
}
