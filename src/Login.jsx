import React, { useEffect, useState } from 'react'
import "./login.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user')))
      navigate('/home');
    if (user.response === "true" && user.state === "success")
      navigate("/home");
    else if (user.response === "false" && user.state === "error")
      setError(true);
    else
      setError(false);
  }, [user]);

  const handleLogin = async (e) => {
    // fetch("https://jsonplaceholder.typicode.com/posts/1")
    // .then(res => res.json())
    // .then(data => console.log(data));
    e.preventDefault();
    const res = await axios.post("http://localhost:8100/users/authenticate", {
      "email": `${email}`,
      "password": `${password}`
    }
    );
    if (res.data.user) {
      console.log(res.data);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);
    }
    else
      setError(true);
  }

  return (
    <form className='form' onSubmit={handleLogin}>
      <Box
        className="loginBox"
        sx={{
          width: 300,
          height: 300,
        }}
      >
        <TextField id="outlined-basic" label="Email ID" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="outlined" type='submit'>Login</Button>
        {error && <h2 style={{ color: 'red' }}>Login Failed !!!</h2>}
      </Box>
    </form>
  )
}

export default Login