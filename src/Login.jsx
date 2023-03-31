import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useLoginUserMutation } from "./services/authApi";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);
  let navigate = useNavigate();

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleLogin = async (e) => {
    e.preventDefault();

    setErrorMsg("");
    try {
      // Call mutation trigger and await and unwrap resolved response
      const userData = await loginUser({ email, password }).unwrap();

      // Update the auth state
      onLogin(userData.user);

      // Redirect back to home
      navigate("/home", { replace: true });
    } catch (error) {
      setErrorMsg(true);
    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <Box
        className="loginBox"
        sx={{
          width: 300,
          height: 300,
        }}
      >
        <TextField
          id="outlined-basic"
          label="Email ID"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outlined" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
        {errorMsg && (
          <h2 style={{ color: "red" }}>Login Failed !!!{errorMsg}</h2>
        )}
      </Box>
    </form>
  );
};

export default Login;
