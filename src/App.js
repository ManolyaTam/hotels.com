import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import UserProvider from "./providers/UserProvider";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/container";
import Hotel from "./pages/Hotel/Hotel";
import Checkout from "./pages/Checkout/Checkout";
import MessageProvider from "./providers/MessageProvider";
import CartProvider from "./providers/CartProvider";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserProvider>
          <MessageProvider>
            <CartProvider>
              <NavBar />
              <Container>
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/" element={<Navigate to="/home" />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/admin/*" element={<Admin />} />
                  <Route path="/hotel/:id" element={<Hotel />} />
                  <Route path="/checkout" element={<Checkout />} />
                </Routes>
              </Container>
            </CartProvider>
          </MessageProvider>
        </UserProvider>
        {/* TODO: Add Default Path + error page */}
      </BrowserRouter>
    </div>
  );
}

export default App;
