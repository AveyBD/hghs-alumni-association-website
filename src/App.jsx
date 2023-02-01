import { useState } from "react";
import { Route, Routes } from "react-router";
import Constitution from "./pages/Constitution";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route exact index element={<Home />} />
        <Route path="constitution" element={<Constitution />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
