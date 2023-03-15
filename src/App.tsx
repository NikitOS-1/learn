import { Route, Routes } from "react-router-dom";
import Registration from "./pages/Login/Registration";
import SignUp from "./pages/Login/SignUp";
import Welcome from "./pages/Login/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Welcome" element={<Welcome />} />
      </Routes>
    </div>
  );
}

export default App;
