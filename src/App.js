import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import UserProvider from "./providers/UserProvider";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import { Container, NavBar } from "./components/index";
import Hotel from "./pages/Hotel/Hotel";
import Checkout from "./pages/Checkout/Checkout";
import MessageProvider from "./providers/MessageProvider";
import CartProvider from "./providers/CartProvider";
import PageNotFound from "./pages/PageNotFound";
import AdminsOnly from "./guards/AdminsOnly";
import HotelRooms from "./pages/Admin/HotelRooms";

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
                  <Route
                    path="/admin/hotels/:id/rooms"
                    element={
                      <AdminsOnly>
                        <HotelRooms />
                      </AdminsOnly>
                    }
                  />
                  <Route
                    path="/admin/*"
                    element={
                      <AdminsOnly>
                        <Admin />
                      </AdminsOnly>
                    }
                  />
                  <Route path="/hotel/:id" element={<Hotel />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/*" element={<PageNotFound />} />
                </Routes>
              </Container>
            </CartProvider>
          </MessageProvider>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
