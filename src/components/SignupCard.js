import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignupCard.css";

const SignupCard = () => {
  const [fname, setFname] = useState("");
  const [mname, setMname] = useState("");
  const [lname, setLname] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const errorStyle = { borderColor: "rgba(254, 0, 0, 0.597)" };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate username and password
    if (!username || !password) {
      setError("USERNAME AND PASSWORD CANNOT BE BLANK");
      return;
    }

    // Create a JSON object with the username and password
    const payload = {
      firstName: fname,
      middleName: mname,
      lastName: lname,
      userId: username,
      password: password,
      email: email,
      mobileNo: mobileNo,
    };

    // Send the payload to the API
    axios
      .post("http://localhost:8080/ems-user/user/create", payload)
      .then((response) => {
        console.log(response);
        setError(null);
        setUsername("");
        setPassword("");
        // Handle successful login response

        navigate("/home", { replace: true });
      })
      .catch((error) => {
        console.log(error["response"]["data"]);
        setError(error["response"]["data"]["message"]);
      });
  };
  return (
    <div className="signup-form-container">
      <p className="title">SIGN UP</p>
      <div className={error != null ? "error-label" : ""}>
        <label>{error}</label>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="name">
          <div className=" f-name">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
              value={fname}
              onChange={(event) => setFname(event.target.value)}
              style={error != null ? errorStyle : {}}
            />
          </div>
          <div className="m-name">
            <label htmlFor="mname">Middle Name</label>
            <input
              type="text"
              name="mname"
              id="mname"
              placeholder="Middle Name"
              value={mname}
              onChange={(event) => setMname(event.target.value)}
              style={error != null ? errorStyle : {}}
            />
          </div>
          <div className=" l-name">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
              value={lname}
              onChange={(event) => setLname(event.target.value)}
              style={error != null ? errorStyle : {}}
            />
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            style={error != null ? errorStyle : {}}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={error != null ? errorStyle : {}}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            style={error != null ? errorStyle : {}}
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobileno">Mobile Number</label>
          <input
            type="text"
            name="mobileno"
            placeholder="Mobile Number"
            value={mobileNo}
            onChange={(event) => setMobileNo(event.target.value)}
            style={error != null ? errorStyle : {}}
          />
        </div>
        <div className="signup-btn">
          <button type="submit" className="signup-sign">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupCard;
