import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Income";
import Customers from "./pages/Customers";
import Product from "./pages/Product";
import Promote from "./pages/Promote";
import Help from "./pages/Help";
import Income from "./pages/Income";
function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/income" element={<Income />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/product" element={<Product />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/help" element={<Help />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
