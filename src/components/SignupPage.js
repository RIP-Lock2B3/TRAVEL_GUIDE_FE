import React from "react";
import "./LoginPage.css";
import Shapes from "./Shapes";
import SignupCard from "./SignupCard";
import "./SignupPage.css";

function SignupPage() {
  return (
    <>
      <div className="page-body">
        <SignupCard></SignupCard>
        {/* <Shapes></Shapes> */}
      </div>
    </>
  );
}

export default SignupPage;
