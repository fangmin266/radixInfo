import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AtoD from "./screensComopnents/AtoD";
import Main from "./screens/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/AtoD" element={<AtoD />} /> */}
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
