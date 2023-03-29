import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = () => {
  const [user, setUser] = useState({});
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('user') === null)
    navigate("../");
    else
    setUser(JSON.parse(localStorage.getItem('user')));
  },[])
  return (
    <div>
      <Navbar />
      <h1>{`Welcome ${user.fullName}`}</h1>
      <h3>{`Role: ${user.role}`}</h3>
    </div>
  )
}

export default Home