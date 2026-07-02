import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import FormPage from "./pages/FormPage";
import ListPage from "./pages/ListPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Create</Link>

        {" | "}

        <Link to="/people">People</Link>
      </nav>

      <Routes>
        <Route path="/" element={<FormPage />} />

        <Route path="/people" element={<ListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
