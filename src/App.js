import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import UserProvider from "./providers/UserProvider";
import Admin from "./pages/Admin/Admin";
import Home from "./pages/home/Home";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/container";
import Hotel from "./pages/Hotel/Hotel";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserProvider>
          <NavBar />
          <Container>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/hotel" element={<Hotel />} />
            </Routes>
          </Container>
        </UserProvider>
        {/* TODO: Add Default Path + error page */}
      </BrowserRouter>
    </div>
  );
}

export default App;
