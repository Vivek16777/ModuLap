import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Customize from "./pages/customize";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/customize" element={<Customize />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
