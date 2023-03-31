import Navbar from "./components/Navbar";

const Home = ({ user, setUser }) => {
  console.log("user", user);
  return (
    <div>
      <Navbar role={user.role} setUser={setUser} />
      <h1>{`Welcome ${user.fullName}`}</h1>
      <h3>{`Role: ${user.role}`}</h3>
    </div>
  );
};

export default Home;
