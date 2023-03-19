import { Route, Routes } from "react-router-dom";
import RegistrationPage from "./pages/Authentication/RegistrationPage";
import LoginPage from "./pages/Authentication/LoginPage";
import HomePage from "./pages/Authentication/HomePage";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  const addNumber = () => {
    setCount((state) => state + 1);
  };
  useEffect(() => {
    console.log("rerender");
  }, [count]);
  return (
    <div className="App">
      <div>count:{count}</div>
      <button onClick={addNumber}>Click</button>
      {/* <Routes> */}
      {/* <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
