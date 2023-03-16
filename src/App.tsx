import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/Login/RegistrationPage";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Login/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </div>
  );
}

export default App;
