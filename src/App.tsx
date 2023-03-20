import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/Authentication/RegistrationPage";
import LoginPage from "./pages/Authentication/LoginPage";
import HomePage from "./pages/Authentication/HomePage";
import { useEffect, useState } from "react";
import UseEf from "useEf/UseEf";

function App() {
  return (
    <div className="App">
      <UseEf />
      {/* <Routes> */}
      {/* <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
