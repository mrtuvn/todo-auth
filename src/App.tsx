import BackgroundHeading from "@/components/BackgroundHeading";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Sidebar from "@/components/Sidebar";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="scroll-smooth relative font-sans bg-[#f1d4b3] min-h-svh flex justify-center items-center flex-col text-black">
      <BackgroundHeading />

      <main
        className="relative flex-1 lg:max-w-[972px] lg:min-w-[972px] 
       shadow-[0_4px_4px_rgb(0,0,0,0.08)] bg-[#fffcf9] md:rounded-[8px]"
      >
        <Header />
        <div className="flex flex-1 w-full min-h-full flex-wrap gap-[1em] items-start w-full overflow-hidden">
          <TodoList />
          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
}
