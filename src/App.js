import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Products />
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
