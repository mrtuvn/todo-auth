import BackgroundHeading from "@/components/BackgroundHeading";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { PulsatingButton } from "@/components/magicui/pulse-button";

import Sidebar from "@/components/Sidebar";
import TodoList from "@/components/TodoList";

import { Link } from "react-router-dom";

const TodoPage = () => {
  return (
    <div className="scroll-smooth relative font-sans bg-[#f1d4b3] min-h-svh flex justify-center items-center flex-col text-black">
      <BackgroundHeading />

      <main
        className="relative flex-1 lg:max-w-[972px] lg:min-w-[972px] 
         shadow-[0_4px_4px_rgb(0,0,0,0.08)] bg-[#fffcf9] md:rounded-[8px]"
      >
        <Header />
        <div className="flex flex-1 w-full min-h-full flex-wrap gap-[1em] items-start overflow-hidden">
          <TodoList />
          <Sidebar />
        </div>
        <div className="flex gap-2 mt-2 flex-col justify-center items-center w-full h-20 bg-blue min-h-[80px]  outline-amber-200">
          <Link to="/mystery">
            <PulsatingButton className="animate-bounce">
              🎉 Mở túi bí mật nè 🎉
            </PulsatingButton>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TodoPage;
