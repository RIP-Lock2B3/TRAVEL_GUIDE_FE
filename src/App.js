import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SplashScreen from "./splash_screen/SplashScreen";
import CustomCursor from "./custom-cursor/CustomCursor";
import LoginPage from "./components/LoginPage";
import "./App.css";
import Home from "./home-screen/Home";
import SignupPage from "./components/SignupPage";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false);
  };
  console.log(showSplash);

  useEffect(() => {
    // Simulate the splash screen duration (e.g., 3 seconds)
    const timer = setTimeout(handleSplashFinish, 7000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showSplash && (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} index />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <>
          <CustomCursor />

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} index />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/home" element={<Home />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </BrowserRouter>
        </>
      )}
    </div>
  );
  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<LoginPage />} index />
  //       <Route path="/login" element={<LoginPage />} />
  //       <Route path="/home" element={<Home />} />
  //       <Route path="*" element={<Navigate to="/" replace />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App;
