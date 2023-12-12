import Landing from "./pages/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PressureWashing from "./pages/PressureWashing";
import Error from "./pages/Error";
import Contact from "./pages/Contact";
import WindowCleaning from "./pages/WindowCleaning";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pressure-washing" element={<PressureWashing />} />
          <Route path="/window-cleaning" element={<WindowCleaning />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
