import Counter from "@/components/Counter";

export default function Header() {
  //const { login, register, logout, isAuthenticated, isLoading, user } = useKindeAuth();
  // const { todos, showCompleted, handleFilterCompletedTodos } =
  //   useTodosContext();

  // const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <header className="w-full col-[1/3] row-[1/2] bg-[#fbf5ed] border-b border-b-[rgba(0,0,0,0.04)] flex justify-between items-center py-2 px-[28px] py-1">
      {/* <>
        <Logo />
        <div className="flex gap-2 ml-[10px] mr-auto">
          {isLoading ? null : isAuthenticated ? (
            <>
              <p>Hello, {user?.email ?? "User"}</p>

              <Button
                classCustom="rounded-full"
                buttonType="secondary"
                onClick={logout}
              >
                Đăng xuất
              </Button>
            </>
          ) : (
            <>
              <Button
                classCustom="rounded-full min-w-max px-1"
                buttonType="secondary"
                onClick={login}
              >
                Đăng nhập
              </Button>
              <Button
                classCustom="rounded-full px-2"
                buttonType="secondary"
                onClick={register}
              >
                Đăng ký
              </Button>
            </>
          )}
        </div>
      </> */}

      {/* <div className="flex gap-2">
        {completedTodos.length > 0 && (
          <Button
            onClick={handleFilterCompletedTodos}
            classCustom="px-4 rounded-full"
          >
            {showCompleted ? "Ẩn" : "Hiện"} việc đã làm
          </Button>
        )}
      </div> */}

      <Counter />
    </header>
  );
}
