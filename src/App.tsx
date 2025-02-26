import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const NoPage = lazy(() => import("./pages/NoPage"));
const TodoPage = lazy(() => import("./pages/TodoPage"));
const MemoryBox = lazy(() => import("./pages/MemoryBox"));

export default function Home() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Chờ mình một xíu nha...</div>}>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/mystery" element={<MemoryBox />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
