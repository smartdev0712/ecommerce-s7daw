import Link from 'next/link';
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-body">
        <LockOutlinedIcon className="avatar" />
        <h3>Sign In</h3>

        <form method="post" className="login-form">
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
          <br />
          <input type="submit" value="SIGN IN" className="formButton" />
        </form>

        <p>
          Don &apos;t have an account?{" "}
          <Link href="/signup">
            <a
              style={{ cursor: "pointer", color: "blue", fontWeight: "900" }}
            >
              Sign Up
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
