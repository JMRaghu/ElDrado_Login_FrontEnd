// import { GoogleLogin } from '@react-oauth/google';
// import jwt_decode from "jwt-decode";
// import { useState } from 'react';
import "./App.css";
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  // const [login, setLogin] = useState(false);
  // const [userInfo, setUserInfo] = useState({});
  return (
    <div className="App">
      {/* {login ? <div className='profile'>
        <img className='profilePic' src={userInfo.picture} alt="Profile Pic"/>
        <h2 className='name'>{userInfo.name}</h2>
      </div> : <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          var decoded = jwt_decode(credentialResponse.credential);
          console.log(decoded)
          setUserInfo(decoded);
          setLogin(true);
          
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        className="login-btn"
      />} */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Login/>} />
          <Route exact path="/home" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
