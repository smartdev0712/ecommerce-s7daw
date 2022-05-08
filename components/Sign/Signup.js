import Link from 'next/link'
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-body">
        <LockOutlinedIcon className="avatar" />
        <h3>Sign up</h3>

        <form method="post" className="login-form">
          <div
            style={{ display: "flex", padding: "6px" }}
            className="form-floating"
          >
            <input
              type="text"
              className="form-control"
              style={{ maxWidth: "50%", flexBasis: "50%" }}
              name="firstName"
              id="firstName"
              placeholder="First Name *"
              required
              autoFocus
            />
            <input
              type="text"
              className="form-control"
              style={{ maxWidth: "50%", flexBasis: "50%", marginLeft: "10px" }}
              name="lastName"
              id="lastName"
              placeholder="Last Name *"
              required
              autoFocus
            />
            {/* <label htmlFor="username">Email Address *</label> */}
          </div>
          <div className="form-floating formControl">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Email Address*"
              required
              autoFocus
            />
            {/* <label htmlFor="username">Email Address *</label> */}
          </div>
          <div className="form-floating formControl">
            <input
              type="email"
              className="form-control"
              name="confirmEmail"
              id="confirmEmail"
              placeholder="Confirm Email Address*"
              required
              autoFocus
            />
            {/* <label htmlFor="username">Email Address *</label> */}
          </div>
          <div className="form-floating formControl">
            {/* <label htmlFor="password" className="">Password</label> */}
            <input
              type="password"
              className="form-control"
              name="password"
              id="password"
              placeholder="Password *"
              required
            />
          </div>
          <div className="form-floating formControl">
            {/* <label htmlFor="password" className="">Password</label> */}
            <input
              type="password"
              className="form-control"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Password *"
              required
            />
          </div>
          <br />
          <input type="submit" value="SIGN UP" className="formButton" />
        </form>

        <p>
          Already have an account?{" "}
          <Link href="/login">
            <a
              style={{ cursor: "pointer", color: "blue", fontWeight: "900" }}
            >
              Sign In
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
