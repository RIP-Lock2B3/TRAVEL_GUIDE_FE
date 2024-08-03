import React from "react";
import LoginCard from "./LoginCard";
import "./LoginPage.css";
import Shapes from "./Shapes";

function LoginPage() {
  return (
    <>
      <div className="login-page-body">
        <LoginCard></LoginCard>
        {/* <Shapes></Shapes> */}
      </div>
    </>
  );
}

export default LoginPage;
