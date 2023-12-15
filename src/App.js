import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import UserProvider from "./components/providers/UserProvider";
import Dummy from "./pages/dummy";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/user/home" element={<Dummy />} />
            <Route path="/admin/home" element={<Dummy />} />
          </Routes>
        </UserProvider>{" "}
        {/* TODO: Add Default Path + error page */}
      </BrowserRouter>
    </div>
  );
}

export default App;
