import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './Sidebar';

const Home = ({ user, setUser }) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div>
      <Navbar role={user.role} setUser={setUser} handleSidebarOpen={handleSidebarOpen} />
      <Sidebar open={openSidebar} onClose={handleSidebarClose} user={user} />
      <h1>{`Welcome ${user.fullName}`}</h1>
      <h3>{`Role: ${user.roles}`}</h3>
    </div>
  );
};

export default Home;
