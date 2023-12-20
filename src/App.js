import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import UserProvider from "./providers/UserProvider";
import Dummy from "./pages/dummy";
import UHomePage from "./pages/UHomePage";
import NavBar from "./components/layout/NavBar";
import Container from "./components/layout/container";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserProvider>
          <NavBar />
          <Container>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/user/home" element={<UHomePage />} />
              <Route path="/admin/home" element={<Dummy />} />
            </Routes>
          </Container>
        </UserProvider>
        {/* TODO: Add Default Path + error page */}
      </BrowserRouter>
    </div>
  );
}

export default App;
