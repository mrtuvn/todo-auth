import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";
import TodoPage from "./pages/TodoPage";
const NoPage = lazy(() => import("./pages/NoPage"));
const MemoryBox = lazy(() => import("./pages/MemoryBox"));

export default function Home() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/mystery" element={<MemoryBox />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
