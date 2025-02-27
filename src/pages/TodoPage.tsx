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

        <div className="flex justify-center items-center w-full h-20 bg-blue min-h-[80px]  outline-amber-200">
          <Link to="/mystery">
            {/* <button
              type="button"
              className="cursor-pointer text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              🎉 Mở túi bí mật nè 🎉
            </button> */}

            <PulsatingButton>🎉 Mở túi bí mật nè 🎉</PulsatingButton>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TodoPage;
