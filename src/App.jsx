import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/home";
import Postcode from "./pages/postcode";
import Error from "./pages/error";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:postcode" element={<Postcode />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
