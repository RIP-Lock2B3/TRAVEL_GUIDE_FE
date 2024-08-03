import React, { useState, useEffect } from "react";
import "./App.css";
import SplashScreen from "./splash_screen/SplashScreen";
import CustomCursor from "./custom-cursor/CustomCursor";
import LoginPage from "./components/LoginPage";

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
          <LoginPage></LoginPage>
        </>
      )}
      {showSplash && <SplashScreen />}
      {!showSplash && (
        <>
          <CustomCursor />
          <LoginPage></LoginPage>
        </>
      )}
    </div>
  );
}

export default App;
