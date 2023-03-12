import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
          {/* <Route path="/checkout" element={<Header />, <Checkout />} /> */}
          {/* <Route path = "/login" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
