import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import Invoice from "./Pages/Invoice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
