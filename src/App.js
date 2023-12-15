import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/Login";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route paht="/*" /> {/* TODO: Add Default Path + error page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
