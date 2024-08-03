import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";
import "./SplashScreen.css";

const SplashScreen = ({ onRemove }) => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container main-hed">
        <span className="gradient-text-start">Adventure</span>
        <span className="gradient-text-mid">Starts</span>
        <span className="gradient-text-end">Here.</span>
      </div>
      <div className="texts-container sub-hed">
        <span className="gradient-text-start">Plan,</span>
        <span className="gradient-text-mid">Share,</span>
        <span className="gradient-text-end">Explore.</span>
      </div>
    </div>
  );
};

export default SplashScreen;
